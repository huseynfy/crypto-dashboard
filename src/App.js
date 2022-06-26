import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, HomePage, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css'

export default function App() {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar/>
        </div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Switch>
                        <Route exact path='/'>
                            <HomePage />
                        </Route>
                        <Route exact path='/cryptocurrencies'>
                            <Cryptocurrencies />
                        </Route>
                        <Route exact path='/crypto/:coinId'>
                            <CryptoDetails />
                        </Route>
                        <Route exact path='/news'>
                            <News />
                        </Route>
                    </Switch>
                </div>
            </Layout>
        <div className='footer'>
            <Typography.Title level={5} style={{color:'#fff',textAlign:'center'}}>
                Crypto App <br />
                All Rights Reserved <br />
                Developed by Huseyn Yusifov
            </Typography.Title>
            <Space>
                <Link to='/'>Home</Link>
                <Link to='/cryptocurrencies'>Cryptos</Link>
                <Link to='/news'>News</Link>
            </Space>
        </div>
    </div>
    </div>
  )
}
