import Counter from "./components/Counter";
import videoDB from "./data/data";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videoDB);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  return (
    <>
      <h1>YouTube Videos</h1>
      <div>
        <AddVideo addVideos={addVideos}></AddVideo>
        <VideoList videos={videos}></VideoList>
      </div>

      <div style={{ clear: "both" }}></div>
      <Counter></Counter>
    </>
  );
}

export default App;
