import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>

      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://rr3---sn-gwpa-qxak.googlevideo.com/videoplayback?expire=1674993058&ei=QgnWY6DVM42-mLAPvY2puAg&ip=196.0.119.102&id=o-AKtbGQdv3qO3gfouzc97tNfcvheCiRHYbFmWeVdzJsit&itag=18&source=youtube&requiressl=yes&spc=H3gIhiKk9cPvLT9ggP9Ex8NK5wzKc6U&vprv=1&mime=video%2Fmp4&ns=xw32oNXTLA1ET56X1RKUDi4L&cnr=14&ratebypass=yes&dur=30.836&lmt=1658291507171937&fexp=24007246&c=WEB&txp=6310224&n=cnjJ3ISBLdQb8A&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAPv4bUJ9tUOdS9_ENBZsUiv5dZ4XMfknmXQnJ2LjkWJkAiEApLLT5PgQAhgEthxLy3GdozM9gXvAjRuMIAskt2YDxw4%3D&rm=sn-0ua-xcce7l,sn-hc5k7s&req_id=59a74c16fa2a3ee&cmsv=e&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=93&mip=2405:201:4035:bcd0:7a8b:441e:ff2e:d505&mm=29&mn=sn-gwpa-qxak&ms=rdu&mt=1674984321&mv=m&mvi=3&pcm2cms=yes&pl=46&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRQIgctLWVD83YsVErzD0UCfYV61pIpvlM4fqhIQmnJKLv0ICIQCwRAw-Lf5X6IxuZ9EVBUA-IiBQQr7Mo_GbQ78znFoGOg%3D%3D"
      ></video>
    </div>
  );
}
