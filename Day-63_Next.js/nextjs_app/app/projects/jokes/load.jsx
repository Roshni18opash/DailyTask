import { Suspense } from "react";
import JokeGenerator from "./JokeGenerator";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading joke...</p>}>
      <JokeGenerator />
    </Suspense>
  );
}
