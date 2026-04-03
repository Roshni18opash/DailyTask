import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Stack,
} from "@mui/material";

const App = () => {
  const socket = useMemo(
    () => io("http://localhost:3000", { withCredentials: true }),
    [],
  );

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [socketId, setSocketId] = useState("");
  const [roomName, setRoomName] = useState("");

  // console.log(messages);
  useEffect(() => {
    fetch("http://localhost:3000/login", {
      credentials: "include",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", { message, room });
    setMessage("");
    // setRoom("");
  };

  const joinRoomHandler = (e) => {
    e.preventDefault();
    socket.emit("join-room", roomName);
    setRoom(roomName);
    setRoomName("");
  };
  //console.log(socket);
  useEffect(() => {
    socket.on("connect", () => {
      setSocketId(socket.id);
      console.log("connected to server", socket.id);
    });

    socket.on("Received-message", (data) => {
      //console.log("message received:", data);
      setMessages((prev) => [...prev, data]);
    });
    socket.on("connect_error", (err) => {
      console.log("Connection error:", err.message);
    });
    // socket.on("welcome", (message) => {
    //   console.log("message received:", message);
    // });
    return () => {
      socket.disconnect();
      console.log("disconnected from server");
    };
  }, [socket]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ height: 200 }} />
      <Typography variant="h6">{socketId}</Typography>
      <form onSubmit={joinRoomHandler}>
        <Typography>Join Room</Typography>

        <TextField
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          label="Room name"
          fullWidth
        />

        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Join
        </Button>
      </form>

      <br />
      <hr />
      <br />

      <form onSubmit={handleSubmit}>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          label="Message"
          fullWidth
        />

        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Send
        </Button>
      </form>
      <Stack mt={3}>
        {messages.map((m, i) => (
          <Typography key={i}>
            {m.message} (Room: {m.room})
          </Typography>
        ))}
      </Stack>
    </Container>
  );
};

export default App;
