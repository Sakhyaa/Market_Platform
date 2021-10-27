import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu} from 'antd';
const { Header } = Layout;

function AppHeader()
{
    return(
        <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%'  }}>
          <div className="logo" src="https://www.sakhyaa.com/wp-content/uploads/2021/01/cropped-logo-med-2.png" />
      
          <Menu  mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item style={{float:'right'}} key="1">nav 1</Menu.Item>
            <Menu.Item  key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        </Layout>
    )

}

export default AppHeader;