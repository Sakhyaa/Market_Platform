import React, { Component } from 'react';
import './App.css';
import TopMenu from './Components/TopMenu';
import { Layout } from 'antd';
import SideNav from './Components/SideNav';
const { Header,Content } = Layout;

export class App extends Component {
  render() {
    return ( 
        <div className="app">
          <Layout>
              <SideNav />
            <Layout>
              <Header>
                <TopMenu />
              </Header>
              <div className="appBody">
                <Content>
                  {/*<Home />*/}
                </Content>
              </div>
            </Layout>
          </Layout>
        </div>
    )
  }
}

export default App

