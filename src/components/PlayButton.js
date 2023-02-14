import { useState } from "react";
import "./PlayButton.css";

function PlayButton({ children, onPlay, onPause }) {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick() {
    if (isPlaying) onPause();
    else onPlay();
    setIsPlaying(!isPlaying);
  }
  return (
    <>
      <button onClick={handleClick} style={{ fontSize: "1rem" }}>
        {children} {isPlaying ? "⏸️" : "▶️"}{" "}
      </button>
    </>
  );
}

export default PlayButton;
