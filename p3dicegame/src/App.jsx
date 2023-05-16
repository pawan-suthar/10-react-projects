import { useState } from "react";
import Home from "./components/Home";
import Gamestart from "./components/Gamestart";

function App() {
  const [isgamestart, setisgamestart] = useState(false);

  const tglgameplay = () => {
    setisgamestart((prev) => !prev);
  };

  return <>{isgamestart ? <Gamestart /> : <Home toggle={tglgameplay} />}</>;
}

export default App;
