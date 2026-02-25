export default function PostComponent({
  author,
  timestamp,
  content,
  likes,
  image,
}) {
  
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  
  return (
    <>
      <div
        style={{
          border: "1px solid grey",
          borderRadius: 10,
          width: 300,
          height: 280,
          padding: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 15,
          }}
        >
          <img
            style={{ width: 75, height: 75, borderRadius: 50 }}
            src={image}
            alt="Ghibli"
          />
          <h5 style={{ fontSize: 18 }}>{author}</h5>
        </div>
        <div>
          <h4>
            {content}
          </h4>
        </div>
        <div>
          <h4>{likes}</h4>
          <p>
            {timestamp}
          </p>
        </div>
      </div>
    </>
  );
}
