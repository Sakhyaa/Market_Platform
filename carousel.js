import React from 'react';
import { Form,  Button, Select,Slider,Carousel } from 'antd';
import CarouselCss from './carousel.module.css'

const areas = [
  { value: 'Hyderabad' },
  { value: 'Mumbai' },
];

const ServiceProviders = [
    { value: 'Jobs' },
    {  value: 'Employer' },
    { value: 'Services' },
  ];
  

  const Courses = [
    {  value: 'Datascientist' },
    {  value: 'MachineLearning' },
    {  value: 'Web developer' },
    {  value: 'Web developer1' },
  ];

  const Image= {
    marginLeft: "auto",
    marginRight: "auto",
    display:"block",
    width:"90%",
    height: "500px"

  }
  


  function CarouselComponent ()
  {
const [form] = Form.useForm();

const onFinish = values => {
console.log('Received values of form:', values);
  };

  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };

  return (

    
          <div className={CarouselCss.parent}>
      <Carousel autoplay  style={{marginTop:"20px"}} >
        <div  >
          <h3 ><img style={Image} src="https://wallpapercave.com/wp/wp2903091.jpg"  alt="description "/></h3>
        </div>
        <div>
          <h3 ><img style={Image} src="https://wallpapercave.com/wp/wp3458025.jpg"  alt="description "/></h3>
        </div>
        <div>
          <h3 ><img style={Image} src="https://wallpapercave.com/wp/wp3458186.jpg" alt="des"/></h3>
        </div>
        <div>
          <h3 ><img style={Image}  src="https://wallpapercave.com/wp/wp3672144.jpg"  alt="description "/></h3>
        </div>
      </Carousel>

      
      <div className={CarouselCss.child}>
            <div className="ant-row" >
                
    <div className="ant-col ant-col-xs-0 ant-col-sm-0 ant-col-md-5"></div>
    <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-7" style={{background:"white",display: "flex",justifyContent:"center",padding:"30px", borderRadius:"10px"}}>
 
    <Form form={form}  onFinish={onFinish} style={{width:"100%"}} autoComplete="off">
      <Form.Item name="Location"  rules={[{ required: true }]}>
        <Select options={areas} onChange={handleChange} placeholder="Select Location" />
      </Form.Item>

      <Form.Item name="ServiceProviders"  rules={[{ required: true }]}>
        <Select options={ServiceProviders} onChange={handleChange} placeholder="Select Service Providers" />
      </Form.Item>

      <Form.Item name="Courses"  rules={[{ required: true }]}>
        <Select options={Courses} onChange={handleChange} placeholder="Im looking for.." />
      </Form.Item>
      <Form.Item name="slider" label="Price Range">
        <Slider 
          marks={{
            0: 'A',
            20: 'B',
            40: 'C',
            60: 'D',
            80: 'E',
            100: 'F',
          }}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search Now
        </Button>
      </Form.Item>
    </Form>
    </div>
    <div className="ant-col ant-col-xs-0 ant-col-sm-0 ant-col-md-8 App">
    <h2>Creating Talent Economy</h2>
    <h1>Sakhyaa</h1>
    </div>
    
    <div className="ant-col ant-col-xs-0 ant-col-sm-0 ant-col-md-4"></div>
  </div>

    </div>
      </div>
        )
     }
    

  
  export default CarouselComponent