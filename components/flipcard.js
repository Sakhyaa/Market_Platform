import React from 'react';
import {Row,Col} from 'antd';
import { Card } from 'antd';
import './cardscss.css';

function Flipcard({title,imageurl}) {
  return (
    
    

    <div class="thecard">

      <div class="thefront">
          <img src={imageurl} id="img"></img>
          <h2>{title}</h2>
      </div>

      <div class="theback">
          <a href="#" ><h3 className="cen">Explore More </h3></a>
      </div>

    </div>
  
       
    
  );
}

export default Flipcard;