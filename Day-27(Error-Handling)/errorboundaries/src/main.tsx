import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
//this is global error handler
window.onerror = function (message, source, error) {
  console.log("Global Error Caught:");
  console.log("Message:", message);
  console.log("Message:", source);
  console.log("Message:", error);
};
const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container missing in index.html");
}
const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
//global error in console page
setTimeout(() => {
  throw new Error("Global Error: Something went wrong!");
}, 1000);

