import React from 'react';
import youtubeCss from './youtubevideo.module.css'

function DemoVideo() {
    return (
      <div className={youtubeCss.iframeContainer}>
        <iframe   src="https://www.youtube.com/embed/X3x96L8VcVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    );
  }

export default DemoVideo;