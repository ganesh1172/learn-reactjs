import { useEffect, useRef, useState } from "react";
import useVideoReducer from "../hooks/VideoReducerHooks";
import "./AddVideo.css";

const initialValue = {
  time: "1 Month ago",
  channel: "BGB",
  verified: "true",
  title: "",
  views: "",
};
const AddVideo = ({ editableVideo }) => {
  const [video, setVideo] = useState(initialValue);
  const dispatch = useVideoReducer();
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
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

    // inputRef.current.focus();
    inputRef.current.placeholder = "";
    "type here".split("").forEach((char, i) => {
      setTimeout(() => {
        inputRef.current.placeholder = inputRef.current.placeholder + char;
      }, 200 * i);
    });
  }, [editableVideo]);
  return (
    <>
      <form>
        <input ref={inputRef} type="text" onChange={handleChange} name="title" value={video.title} placeholder="title" />
        <input type="text" onChange={handleChange} name="views" value={video.views} placeholder="views" />
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
