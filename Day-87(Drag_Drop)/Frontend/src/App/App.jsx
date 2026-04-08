import "./App.css";
import { Editor } from "@monaco-editor/react";
function App() {
  return (
    <>
      <main className="flex gap-4 h-screen bg-blend-darken">
        <aside className="w-1/4 h-full bg-gray-200 p-4">
          <h2 className="text-xl font-bold mb-4">Sidebar</h2>
          <ul>
            <li className="mb-2">User 1</li>
            <li className="mb-2">User 2</li>
            <li className="mb-2">User 3</li>
          </ul>
        </aside>
        <section className="w-3/4 h-full bg-gray-100 p-4">
          <h1 className="text-2xl font-bold mb-4">Main Content</h1>
          <p>This is the main content area.</p>
          <Editor
            height="400px"
            defaultLanguage="javascript"
            defaultValue="// Write your code here"
          />
        </section>
      </main>
    </>
  );
}

export default App;
