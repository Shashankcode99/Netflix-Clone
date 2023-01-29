import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://twitter.com/i/status/1462058191106232322";
  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 + 65 }}
    >
      <img
        src="https://images-cdn.ubuy.co.in/63576bdb2ba1513cd45cf732-peaky-blinders-poster-season-1-key-art.jpg"
        alt=""
      />

      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>

            <div className="itemInfoTop">
              <span>1 hour 14 minutes</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>

            <div className="desc">
              Peaky Blinders is a crime drama centred on a family of mixed Irish
              Traveller and Romani origins based in Birmingham, England,
              starting in 1919, several months after the end of the First World
              War. It centres on the Peaky Blinders street gang and their
              ambitious, cunning crime boss Tommy Shelby (Murphy).
            </div>

            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
