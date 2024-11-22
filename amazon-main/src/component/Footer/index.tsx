import "../styles/main.css"
import React from 'react'
import BackToTop from './BackToTop'

import Contact from './Contact'
import FooterEnd from './FooterEnd'
import ChatBox from './ChatBox'

export default function Footer() {
  return (
    <div>
      <ChatBox/>
      <BackToTop/>
      <Contact/>
      <FooterEnd/>
    </div>
  )
}
