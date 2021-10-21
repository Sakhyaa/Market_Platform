import React from 'react';
import {Row,Col} from 'antd';
import { Card } from 'antd';
import './cardscss.css';

function Card2({title,imageurl}) {
  return (
    
  
        <Card  id="card">
          <img  id="img" src={imageurl}></img>
          <h2>{title}</h2>
            
          </Card>  
      
  );
}

export default Card2;