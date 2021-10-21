import React from 'react';
import {Row,Col} from 'antd';
import { Card } from 'antd';
import './cardscss.css';
import {Divider} from 'antd';

function Card3({profile,name,job,rating,start,queue}) {
  return (
    
  
        <Card  id="card2">

           <div className="ant-row">
           <div className="ant-col-4">
               <img id="img1" src={profile}></img>
           </div>
           <div className="ant-col-16">
               <h1> <img id="img3" src="https://cdn-icons.flaticon.com/png/128/2482/premium/2482295.png?token=exp=1634820075~hmac=97030f21d9af8090b9630b87ea805225"></img>        {name}</h1>
               <h2>{job}</h2>
               <h2>Starting From <strong id="rp">₹{start}</strong></h2>
           </div>
           <div className="ant-col-4">
               <img id="img1" src="https://t4.ftcdn.net/jpg/01/25/83/03/240_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg"></img>
           </div>
           </div>
         
          <hr></hr>
           <div className="ant-row">
           <div className="ant-col-10">
               <h2 id="h22"> <img id="img2" src="https://t3.ftcdn.net/jpg/03/20/41/38/240_F_320413848_4qcaWZ3w8U1s6zIGEaJ6Dr8p1BwSpa2j.jpg"></img>{rating}/5.0</h2>
           </div>
           <div className="ant-col-4">
           <img  id="img1" src="https://t3.ftcdn.net/jpg/03/63/34/70/240_F_363347020_YzZc2x3LI8fTfVXvGVPTXTrkOAJ1MR4l.jpg"></img>
           </div>
           <div className="ant-col-10">
               <h2 id="h22"><img id="img2" src="https://cdn-icons.flaticon.com/png/128/3298/premium/3298958.png?token=exp=1634820533~hmac=e92f8fbbc752f8ef7a942a94742862bc"></img>    {queue} in Queue</h2>
           </div>
               </div>
          </Card>  
      
  );
}

export default Card3;