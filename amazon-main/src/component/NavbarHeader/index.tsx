import "../styles/main.css"
import { Col, Row } from 'antd'
import NavModal from './NavModal'
import Link from 'next/link'

export default function NavbarHeader() {
  return (
    <div className='text-color-DDD  bg-slate-800 py-2'>
      <div className='container mx-auto'>
      <Row className='items-center' gutter={20}>
      <Col><NavModal/></Col>
      <Col><Link href={"/"}>Today's Deals</Link></Col>
      <Col><Link href={"/"}>Customer Service</Link></Col>
      <Col><Link href={"/"}>Registry</Link></Col>
      <Col><Link href={"/"}>Sell</Link></Col>
    </Row>
    </div>
    </div>
  )
}
