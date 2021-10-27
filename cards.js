import React from "react";


const style=
{
height:"300px",
border:"2px solid wheat"
}

const style2=
{
display:"flex",
justifyContent:"center",
alignItems:"flex-end",
height:"50%",
width:"100%",
}
const siteLayoutContent =
{
    padding: "0 14%"
  }

  
const  items= 
[
    {
      link:'https://www.sakhyaa.com/wp-content/uploads/2021/02/Writing.png',
      title:'Writing&Translation'
    },
    {
       link:'https://www.sakhyaa.com/wp-content/uploads/2021/02/Video_Animation.png',
       title:'Video&Animation'
    },
    {
        link:'https://www.sakhyaa.com/wp-content/uploads/2021/02/Programming.png',
        title:'Programming&Tech'
    },
    {
        link:'https://www.sakhyaa.com/wp-content/uploads/2021/02/Lifestyle.png',
        title:'Lifestyle'
    },
    {
        link:'https://www.sakhyaa.com/wp-content/uploads/2021/02/Digital_Marketing.png',
        title:'Digital Marketing'
    },
    {
        link:'https://www.sakhyaa.com/wp-content/uploads/2021/02/Graphics_Designing.png',
        title: 'Graphics Designing'
    },
    {
        link:'https://www.sakhyaa.com/wp-content/uploads/2021/02/Music_Audio.png',
        title:'Music & Audio'
    }

]


function Cards()
{
  
    return(
        <div   style={siteLayoutContent} >
             <h1 className="App">Top Categories</h1>
            <div className="ant-row"  >
                {
                   
                    items.map(items=>
                        {
                            return(
                                <div className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-6"  style={style} >
                                <div  style={style2} > 
                                <img alt="abc" src={items.link} style={{height:"60px" ,width:"60px",display:"block",textAlign:"center"}}/>    
                                </div>
                                <a href="/#" style={{display:"block" ,textAlign:"center",paddingTop:"16px",color:"black"}} >{items.title}</a>  
                              </div>
                              
                            );
                        })
                }


        </div>

    </div>
    )
}
export default Cards;