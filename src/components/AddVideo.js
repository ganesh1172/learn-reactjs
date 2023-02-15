import { useEffect, useState } from "react";
import "./AddVideo.css";

const initialValue = {
  time: "1 Month ago",
  channel: "BGB",
  verified: "true",
  title: "",
  views: "",
};
const AddVideo = ({ addVideos, editableVideo, updateVideo }) => {
  const [video, setVideo] = useState(initialValue);

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      updateVideo(video);
    } else {
      addVideos(video);
    }
    setVideo(initialValue);
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);
  return (
    <>
      <form>
        <input type="text" onChange={handleChange} name="title" value={video.title} />
        <input type="text" onChange={handleChange} name="views" value={video.views} />
        <button onClick={handleSubmit}>{editableVideo ? "Edit" : "Add"} Video</button>
      </form>
      {/* <button
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
        </button> */}
    </>
  );
};

export default AddVideo;
