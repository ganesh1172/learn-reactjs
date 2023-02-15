import { useContext } from "react";
import VideosDispatchContext from "../context/VideosDispatchContext";

function useVideoReducer() {
  return useContext(VideosDispatchContext);
}

export default useVideoReducer;
