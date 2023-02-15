import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideo from "../hooks/VideoHooks";

const VideoList = ({ editVideo }) => {
  const videos = useVideo();
  return (
    <>
      {videos.map((video) => (
        <Video key={video.id} title={video.title} views={video.views} time={video.time} channel={video.channel} verified={video.verified} id={video.id} editVideo={editVideo}>
          <PlayButton onPlay={() => console.log("Playing..", video.title)} onPause={() => console.log("Paused..", video.title)}></PlayButton>
        </Video>
      ))}
    </>
  );
};

export default VideoList;
