import Counter from "./components/Counter";
import videoDB from "./data/data";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videoDB);
  const [editableVideo, setEditableVideo] = useState(null);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
    console.log("delete", id);
  }

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  function updateVideo(video) {
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideo = [...videos];
    newVideo.splice(index, 1, video);
    setVideos(newVideo);
  }
  return (
    <>
      <h1>YouTube Videos</h1>
      <div>
        <AddVideo addVideos={addVideos} editableVideo={editableVideo} updateVideo={updateVideo}></AddVideo>
        <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>
      </div>

      <div style={{ clear: "both" }}></div>
      <Counter></Counter>
    </>
  );
}

export default App;
