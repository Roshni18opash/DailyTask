import { useEffect, useRef } from "react";
import Vapi from "@vapi-ai/web";

export default function VoiceAssistant() {
  const vapiRef = useRef(null);

  useEffect(() => {
    vapiRef.current = new Vapi(import.meta.env.VITE_VAPI_PUBLIC_KEY);

    vapiRef.current.on("message", (msg) => {
      console.log("Assistant:", msg);
    });

    return () => {
      vapiRef.current?.stop();
    };
  }, []);

  const startCall = () => {
    vapiRef.current.start(import.meta.env.VITE_ASSISTANT_ID);
  };

  return (
    <div>
      <button onClick={startCall}> Talk to Beauty Assistant</button>
    </div>
  );
}
