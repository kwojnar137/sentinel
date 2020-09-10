import React from 'react'
import Header from './Header'
import Content from './Content'
import Foobar from './Foobar'

import './layout.scss'



function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <Content children={children}>
      </Content>
      <Foobar />
    </div>
  )
}


export default Layout
