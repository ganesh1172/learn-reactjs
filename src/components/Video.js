import "./Video.css";

function Video({ title, id, channel = "GB", views, time, verified, children, deleteVideo, editVideo }) {
  return (
    <>
      <div className="container">
        <div>
          <button className="delete" onClick={() => deleteVideo(id)}>
            🗑️
          </button>
          <button className="edit" onClick={() => editVideo(id)}>
            🖊️
          </button>
        </div>
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
        </div>
        <p className="title">{title}</p>
        <p className="channel">
          {channel} {verified ? "✅" : null}
        </p>
        <p className="views">
          {views} Views <span>.</span> {time}
        </p>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
