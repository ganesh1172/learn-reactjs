import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";
import Video from "./components/Video";
import videoDB from "./data/data";
import { useState } from "react";

function App() {
  const [videos, setVideos] = useState(videoDB);

  return (
    <>
      <h1>YouTube Videos</h1>
      <div>
        <button
          onClick={() =>
            setVideos([
              ...videos,
              {
                id: videos.length + 1,
                title: "Angular JS tutorial",
                views: "99K",
                time: "1 Month ago",
                channel: "BGB",
                verified: "true",
              },
            ])
          }
        >
          Add Videos
        </button>
      </div>
      {videos.map((video) => (
        <Video key={video.id} title={video.title} views={video.views} time={video.time} channel={video.channel} verified={video.verified} id={video.id}>
          <PlayButton onPlay={() => console.log("Playing..", video.title)} onPause={() => console.log("Paused..", video.title)}></PlayButton>
        </Video>
      ))}
      <div style={{ clear: "both" }}></div>
      <Counter></Counter>
    </>
  );
}

export default App;
