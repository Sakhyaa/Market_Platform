import React from 'react'
import {Row,Col,Button} from 'antd';
import   '../Styles/FilterStyles.css';
import {CaretDownOutlined } from '@ant-design/icons';
import FilterBox from './FilterBox';


function Filter() {
    return (
        <div className="container">
            <Row>
                <Col className="filter" xs={24} sm={24} md={10} lg={9} >
                    <FilterBox/>
                </Col>
                <Col className="content" xs={24} sm={24} md={14} lg={15}>
                    <span><Button className="sortButton">Sort By A-Z</Button></span>
                    <span><Button className="sortButton"><span><CaretDownOutlined /></span>Sort By Rating ASC</Button></span>
                    <div className="contentBox">
                    </div>
                </Col>
            </Row>  
        </div>
    )
}

export default Filter
