import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./featured.scss";
export default function Featured({ type }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        //POV : endpoint should be dynmaic /movies/random?type=${type} 
        const res = await axios.get(`/movies/random?type=series`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGE4NGRmNTY5NmJhYzQ4MGQ1YThiYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTgyODc4MywiZXhwIjoxNjgwNDMzNTgzfQ.mtuDJFEiAJLrRtSt__Kk_QF3Kwt5eokItQXgMVYAOFo",
          },
        });
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);
  console.log(content);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Web Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
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
      <img src={content.img} alt="featured_img" />

      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>

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
