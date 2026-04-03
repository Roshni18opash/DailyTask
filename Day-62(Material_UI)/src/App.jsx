import { Container } from "@mui/material";
import Header from "./components/Header";
import { createTheme } from "@mui/material/styles";
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#ff5252",
      },
    },
  });

  return (
    <>
      <Container>
        <Header />
      </Container>
    </>
  );
}

export default App;
