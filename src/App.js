// import Counter from "./components/Counter";
import videoDB from "./data/data";
import { useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
// import ThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext";
import VideosDispatchContext from "./context/VideosDispatchContext";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideo = [...videos];
        newVideo.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideo;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    // <ThemeContext.Provider value="">
    <VideosContext.Provider value={videos}>
      <VideosDispatchContext.Provider value={dispatch}>
        <div>
          <h1>YouTube Videos</h1>
          <div>
            <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
            <VideoList dispatch={dispatch} editVideo={editVideo}></VideoList>
          </div>

          {/* <div style={{ clear: "both" }}></div>
        <Counter></Counter> */}
        </div>
      </VideosDispatchContext.Provider>
    </VideosContext.Provider>
    // </ThemeContext.Provider>
  );
}

export default App;
