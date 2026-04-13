import "./App.css";
import { Editor } from "@monaco-editor/react";
import { MonacoBinding } from "y-monaco"; // binding for Monaco Editor , which allows us to synchronize the
// editor's content with a Yjs document,broadcast changes to other clients, and receive updates from other clients in real-time.
import { useRef, useMemo, useState, useEffect } from "react";
import * as Y from "yjs"; // Yjs is a powerful library for building collaborative applications. It provides a shared data structure that can be synchronized across multiple clients in real-time.
import { SocketIOProvider } from "y-socket.io"; // SocketIOProvider is a connector that allows Yjs to communicate with a Socket.IO server, enabling real-time synchronization of shared data across clients.

function App() {
  const editorRef = useRef(null);
  const [username, setUsername] = useState(() => {
    return new URLSearchParams(window.location.search).get("username") || "";
  }); // State to hold the username input by the user for collaborative editing. This username can be used to identify different users in the collaborative environment, allowing for features like user presence indicators or personalized cursors.
  const [users, setUsers] = useState([]); // State to hold the list of users currently connected to the collaborative editing session. This can be used to display a list of active users in the UI, allowing participants to see who else is collaborating on the document in real-time.
  const ydoc = useMemo(() => new Y.Doc(), []); // Create a Yjs document instance
  // const provider = useMemo(
  // () => new SocketIOProvider("http://localhost:3000", "my-roomname", ydoc),
  //  [ydoc],
  // ); // Create a Socket.IO provider instance and connect to the server
  const yText = useMemo(() => ydoc.getText("monaco"), [ydoc]); // Get a Y.Text type from the Yjs document to hold the editor's content
  //"monaco" empty string =use in handlemouth, the name of the shared text type that will be used to synchronize the content of the Monaco Editor across clients. You can choose any name you like, but it should be consistent across all clients that need to share the same editor content.
  // useMemo(() => {
  //   if (editorRef.current) {
  //     new MonacoBinding( //perform monacobinding
  //       yText,
  //       editorRef.current.getModel(),
  //       new Set([editorRef.current]),
  //       provider.awareness,
  //     ); // Create a MonacoBinding instance to bind the Y.Text type to the Monaco Editor
  //   }
  // }, [yText, provider.awareness]);

  const handleMount = (editor) => {
    editorRef.current = editor;
    new MonacoBinding(
      yText,
      editorRef.current.getModel(),
      new Set([editorRef.current]),
      // provider.awareness, // Create a MonacoBinding instance to bind the Y.Text type to the Monaco Editor
    );
  };

  const handleJoin = (e) => {
    e.preventDefault();
    setUsername(e.target.username.value); // Update the username state with the value entered in the input field when the user submits the form to join the collaborative editing session.
    window.history.pushState({}, "", "?username=" + e.target.username.value);
  };
  //yjs,socketio,monaco connection perform kr rha ho
  useEffect(() => {
    if (username) {
      const provider = new SocketIOProvider( //IMPORTTANT Create a Socket.IO provider
        //  instance and connect to the server ,any changes made to the editor will be synchronized with other clients connected to the same server and room.
        "/",
        "my-monaco",
        ydoc,
        {
          autoConnect: true,
          // Automatically connect to the server when the provider is created.
          //  params: { token: "your-auth-token" }, // Optional parameters to send to the server when connecting, such as authentication tokens or room information.
          //  onConnect: () => { console.log("Connected to the server"); }, // Callback function that is called when the provider successfully connects to the server.
          //  onDisconnect: () => { console.log("Disconnected from the server"); }, // Callback function that is called when the provider disconnects from the server.
          //  onError: (error) => { console.error("Connection error:", error); }, // Callback function that is called when there is an error connecting to the server.
        },
      );
      provider.awareness.setLocalStateField("user", { username: username }); // Set the local state field "user" in the provider's awareness to an object containing the username. This allows other clients to be aware of the user's presence and identity in the collaborative editing session.
      const states = Array.from(provider.awareness.getStates().values());
      setUsers(
        states
          .filter((user) => user && user.username)
          .map((state) => state.user),
      ); // Initialize the users state with the list of users currently connected to the collaborative editing session when the component mounts. This ensures that the UI reflects the current list of active users when a new user joins the session.
      provider.awareness.on("change", () => {
        const states = Array.from(provider.awareness.getStates().values());
        setUsers(
          states
            .filter((state) => state.user && state.user.username)
            .map((state) => state.user),
        ); // Update the users state with the list of users currently connected to the collaborative editing session whenever there is a change in the provider's awareness. This allows the UI to reflect the current list of active users in real-time.
      });
      function handleBeforeUnload() {
        provider.awareness.setLocalStateField("user", null); // Disconnect the provider from the server when the component unmounts or when the user leaves the collaborative editing session, ensuring that resources are cleaned up and the user's presence is removed from the session.
      }
      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        //  monacoBinding.destroy(); // Clean up the MonacoBinding instance when the component unmounts to prevent memory leaks and ensure that the binding is properly disposed of.
        provider.disconnect(); // Disconnect the provider from the server when the component unmounts to ensure that resources are cleaned up and the user's presence is removed from the collaborative editing session.
        window.removeEventListener("beforeunload", handleBeforeUnload); // Remove the event listener for beforeunload when the component unmounts to prevent memory leaks and ensure that the event listener is properly cleaned up.
      };
    }
  }, [username]);

  if (!username) {
    return (
      <main className="flex items-center justify-center h-screen">
        <form onSubmit={handleJoin} className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Enter Your Username</h2>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            className="border border-gray-300 p-2 w-full mb-4"
            placeholder="Username"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Join
          </button>
        </form>
      </main>
    );
  }

  return (
    <>
      <main className="flex gap-4 h-screen bg-blend-darken">
        <aside className="w-1/4 h-full bg-gray-200 p-4">
          <h2 className="text-xl font-bold mb-4">Users</h2>
          <ul className="p-4">
            {users.map((user, index) => (
              <li key={index} className="mb-2 bg-gray-800 text-white rounded  ">
                {user.username}
              </li>
            ))}
          </ul>
        </aside>
        <section className="w-3/4 h-full bg-gray-100 p-4">
          <h1 className="text-2xl font-bold mb-4">Main Content</h1>
          <p>This is the main content area.</p>
          <Editor
            height="400px"
            defaultLanguage="javascript"
            defaultValue="// Write your code here"
            onMount={handleMount}
          />
        </section>
      </main>
    </>
  );
}

export default App;
