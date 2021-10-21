import React from 'react';
import {Row,Col} from 'antd';
import { Card } from 'antd';
import './cardscss.css';

function Card4({image,title,count}) {
  return (
    
  
        <Card  id="card">
            <div className="ant-row">
           <div className="ant-col-8">
               <img  id="img4" src={image}></img>
           </div>
          
           <div className="ant-col-16">
               <h1>{count}</h1>
               <h2>{title}</h2>
           </div>
               </div>
          </Card>  
      
  );
}

export default Card4;