import React from 'react';
import {Row,Col} from 'antd';
import { Card } from 'antd';
import './cardscss.css';

function Cardscomp1({title,imageurl}) {
  return (
    
   
        
     
       <Card title={title} bordered={false} id="card1">
          <h2>No Earnings has been made yet</h2>
          <img id="img" src={imageurl}></img>
        </Card>
 

       
      
      
  );
}

export default Cardscomp1;