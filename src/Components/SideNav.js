import React, { Component } from 'react'
import { Layout, Menu, Button } from 'antd';
import {FaBuffer,FaRegEnvelope,FaTv,FaAnchor,FaRegHeart,FaBars} from "react-icons/fa";
import { VscSettingsGear } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";
import { MdLogout } from "react-icons/md";
import { AiOutlineCreditCard,AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiSupport,BiCarousel } from "react-icons/bi";
import { Tooltip } from 'antd';
import "./SideNav.css"

const { Sider,Header } = Layout;
const { SubMenu } = Menu;

export class SideNav extends Component {
    state={
        collapsed: true,
    };

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className="sideNav">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="sideNavBtn">
                        {(this.state.collapsed)?
                        (<Tooltip placement="right" title="expand navbar">
                            <Button className="sideNavBtnUnFold" onClick={this.toggle}>
                                <FaBars />
                            </Button>
                        </Tooltip>):
                        (<Tooltip placement="right" title="hide navbar">
                            <Button className="sideNavBtnFold" onClick={this.toggle}>
                                <FaBars />
                        </Button>
                        </Tooltip>)}
                    </div>
                    <div className="sideNavMenu">
                        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<FaBuffer />}>
                                Dashboard
                            </Menu.Item>
                            <Menu.Item key="2" icon={<FaRegEnvelope />}>
                                Inbox
                            </Menu.Item>
                            <Menu.Item key="3" icon={<FaTv />}>
                                View my profile
                            </Menu.Item>
                            <Menu.Item key="4" icon={<VscSettingsGear />}>
                                Edit my profile
                            </Menu.Item>
                            <SubMenu key="5" title="Manage portfolios" icon={<FiEdit />}>
                                <Menu.Item key="5.1">
                                Add portfolios
                                </Menu.Item>
                                <Menu.Item key="5.2">
                                Portfolio listings
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="6" icon={<FaAnchor />}>
                                Account settings
                            </Menu.Item>
                            <Menu.Item key="7" icon={<AiOutlineCreditCard />}>
                                Payout settings
                            </Menu.Item>
                            <SubMenu key="8" title="Manage projects" icon={<AiOutlineFundProjectionScreen />}>
                                <Menu.Item key="8.1">
                                    Proposals
                                </Menu.Item>
                                <Menu.Item key="8.2">
                                    Ongoing projects
                                </Menu.Item>
                                <Menu.Item key="8.3">
                                    Completed projects
                                </Menu.Item>
                                <Menu.Item key="8.4">
                                    Cancelled projects
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="9" title="Manage services" icon={<FiEdit />}>
                                <Menu.Item key="9.1">
                                    Post a service
                                </Menu.Item>
                                <Menu.Item key="9.2">
                                    Posted services
                                </Menu.Item>
                                <Menu.Item key="9.3">
                                    Addons services
                                </Menu.Item>
                                <Menu.Item key="9.4">
                                    Ongoing services
                                </Menu.Item>
                                <Menu.Item key="9.5">
                                    Completed services
                                </Menu.Item>
                                <Menu.Item key="9.6">
                                    Cancelled services
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="10" icon={<FaRegHeart />}>
                                Saved
                            </Menu.Item>
                            <Menu.Item key="11" icon={<GrDocument />}>
                                Invoices
                            </Menu.Item>
                            <Menu.Item key="12" icon={<BiCarousel />}>
                                Disputes
                            </Menu.Item>
                            <Menu.Item key="13" icon={<BiSupport />}>
                                Help and support
                            </Menu.Item>
                            <Menu.Item key="14" icon={<MdLogout />}>
                                Logout
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sider>
            </div>
        )
    }
}

export default SideNav
