import Video from "./components/Video";
import videos from "./data/data";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      {videos.map((video) => (
        <Video key={video.id} id={video.id} title={video.title} views={video.views} time={video.time} channel={video.channel} verified={video.verified}></Video>
      ))}
    </>
  );
}

export default App;
