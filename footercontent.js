import React from 'react';
import 'antd/dist/antd.css';
import  FooterCss from'./footercontent.module.css'
import { Row, Col } from 'antd';
import { AiOutlineInstagram,AiOutlineFacebook,AiOutlineTwitter,AiOutlineYoutube} from "react-icons/ai";

const link=
{
  color:"white",
  padding:"0px 15px"
}

function FooterContent()
{
    return(
        <div className={FooterCss.BackgroundDesign}> 
        <div className={FooterCss.children}>
          <Row className="App">
    <Col xs={22}  sm={12} md={8}>
      <a href="www.sakhyaa.com" > 
        <img  class={FooterCss.footerimage} src={'https://www.sakhyaa.com/wp-content/uploads/2021/01/logo-1.png'} alt="Sakhya"/>
      </a>
    </Col>
  </Row>
  <Row className="App">
    <Col xs={22}  sm={12} md={8}>
        <h2>  Welcome to Sakhyaa</h2>
    </Col>
  </Row>

  <Row className="App">
    <Col xs={22}  sm={12} md={8}>
      <ul className={FooterCss.Icons}>  
        <li   ><a href="/#"><AiOutlineFacebook size={32} color="black" /></a>
        </li>
        <li  ><a href="/#"><AiOutlineTwitter size={32} color="black"/></a>
        </li>
        <li  ><a href="/#"><AiOutlineYoutube size={32} color="black"/></a>
        </li>
        <li ><a href="/#"><AiOutlineInstagram size={32} color="black"/></a>
        </li>
      </ul>
    </Col>
  </Row>

  <div className={FooterCss.footeremail}>
  <form >
  <label>
    <input type="text" name="name"  style={{height:"40px",width:"280px"}} placeholder="Add your mail"/>
  </label>
  <button type="submit"  className={FooterCss.btn} >Subscribe</button>
</form>
  </div>

  <div className="App "><h4>Copyright © 2021 Sakhyaa</h4></div> 
  

<ul className={FooterCss.Icons} >
  <li > 
      <a href="/#" style={link} > About</a>
  </li>
  <li  >
    <a href="/#" style={link} >How its works</a>
  </li>
  
  <li  >
  <a href="/#" style={link} >Privacy Policy</a>
  </li>


  <li  >
  <a href="/#" style={link} > Terms and Conditions</a>
  </li>
  
  <li >
  <a href="/#" style={link} >Cancellation/Refund Policy</a>
  </li>
  
  <li  >
  <a href="'/#" style={link} >Fees</a>
  </li>
  
  <li>
  <a href="/#" style={link} >  Contact us</a>
  </li>

    
  <li  >
  <a href="/#" style={link} >  Code of conduct   </a>
  </li>
 
 
</ul>

    </div>
    </div>
    )

}

export default FooterContent;