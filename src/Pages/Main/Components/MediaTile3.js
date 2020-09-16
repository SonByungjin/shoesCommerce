import React from "react";
import "./MediaTile3.scss";

class MediaTile3 extends React.Component {
  render() {
    return (
      <section className="mediaTile3">
        <video
          playsinline="playsinline"
          preload="auto"
          tabindex="-1"
          role="application"
          loop
          muted="muted"
          autoplay=""
          data-module-lazymedia="https://image.converse.co.kr/structured-content/18035/[SHANA]Converse_CX_master_1920x1080.mp4"
          src="https://image.converse.co.kr/structured-content/18035/[SHANA]Converse_CX_master_1920x1080.mp4"
        ></video>
      </section>
    );
  }
}

export default MediaTile3;
