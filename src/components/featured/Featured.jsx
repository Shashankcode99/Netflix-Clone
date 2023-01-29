import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./featured.scss";
export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Web Series"}</span>
          <select name="genre" id="genre">
            <option >Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fatasy">Fantasy</option>
            <option value="historical">historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2022/01/14172326/netflix-1536x864.jpg"
        alt="featured_img"
      />

      <div className="info">
        <img
          src="https://gumlet.assettype.com/dtnext%2F2022-12%2F6c0e20f8-38e7-40d5-9486-0a2561baecdf%2FUntitled_21_.jpg?rect=1%2C0%2C999%2C562&auto=format%2Ccompress&fit=max&format=webp&w=768&dpr=1.3"
          alt=""
        />
        <span className="desc">
          Smart, sarcastic and a little dead inside, Wednesday Addams
          investigates a murder spree while making new friends — and foes — at
          Nevermore Academy.
          <br />
          <br />
          Starring:Jenna Ortega,Gwendoline Christie,Riki Lindhome
          Creators:Alfred Gough,Miles Millar
        </span>

        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
