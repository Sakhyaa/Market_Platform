import React, { Component } from 'react'
import { Menu } from 'antd';
import { BsBell } from "react-icons/bs";
import logo from "../assets/logo.png"
import './TopMenu.css'

export class TopMenu extends Component {
    render() {
        return (
            <div class="top-menu">
                <div className="logo">
                <img src={logo} />
                </div>
                <div className="menu">
                    <Menu mode="horizontal">
                    <Menu.Item key="1">
                        POST A SERVICE
                    </Menu.Item>
                    <Menu.Item key="2">
                        HOW IT WORKS
                    </Menu.Item>
                    <Menu.Item key="3">
                        CONSULTATION
                    </Menu.Item>
                    </Menu>
                </div>
                <div className="icon">
                    <BsBell />
                </div>
                <div className="profile">
                    <img src="https://www.sakhyaa.com/wp-content/uploads/2021/02/Richie_1-50x50.png" />
                        <strong>Username</strong>
                </div>
            </div>
        )
    }
}

export default TopMenu
