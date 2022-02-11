import { useRef } from "react";
import { Video, CloudinaryContext, Transformation } from "cloudinary-react";
const VideoPlayer = ({ publicId, className }) => {
  const videoRef = useRef();
  return (
    <CloudinaryContext cloud_name="dzpixmyzn">
      <div className={className}>
        <Video
          publicId={publicId}
          width="100%"
          autoPlay={true}
          muted={true}
          resourceType="video"
        />
        <Transformation width="539" crop="scale" quality="auto:eco" />
      </div>
    </CloudinaryContext>
  );
};
export default VideoPlayer;
