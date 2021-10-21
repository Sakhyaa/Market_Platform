import React from 'react';
import {Row,Col} from 'antd';
import { Card } from 'antd';
import './cardscss.css';

function Cardscomp({title,imageurl}) {
  return (
    
  
        <Card  id="card">
          <img  id="img" src={imageurl}></img>
          <h2>{title}</h2>
            <a  href="#">Click To View</a>
          </Card>  
      
  );
}

export default Cardscomp;