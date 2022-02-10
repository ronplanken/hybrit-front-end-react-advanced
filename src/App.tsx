import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FunctioneleComponentenPage } from './pages/FunctioneleComponenten';
import { HomePage } from './pages/Home';
import { HooksPage } from './pages/Hooks';
import { PerformancePage } from './pages/Performance';
import logo from './logo512.png';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className='layout'>
      <Header>
        <img
          style={{
            float: 'left',
            height: '64px',
            marginRight: "16px"
          }}
          src={logo}
        />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['home']}>
          <Menu.Item key={'home'}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key={'func'}>
            <Link to='/functionele-componenten'>01 Functionele Componenten</Link>
          </Menu.Item>
          <Menu.Item key={'hooks'}>
            <Link to='/hooks'>02 Hooks</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '32px' }}>
        <div className='site-layout-content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/functionele-componenten' element={<FunctioneleComponentenPage />} />
            <Route path='/hooks' element={<HooksPage />} />
            <Route path='/performance' element={<PerformancePage />} />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>HybrIT ©2022</Footer>
    </Layout>
  );
}

export default App;
