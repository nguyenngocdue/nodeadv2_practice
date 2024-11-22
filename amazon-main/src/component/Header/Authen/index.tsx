import { CaretDownOutlined } from '@ant-design/icons'
import { Button, Dropdown, MenuProps } from 'antd'
import React from 'react'
import AuthenDesc from './AuthenDesc'

export default function Authentication() {
    const items: MenuProps['items'] = [
         {key:2,
            label:(
                <AuthenDesc/>
            )
         }
    ] 
  return (
    <Dropdown menu={{ items }} placement="bottom">
        <Button>
            <p className='flex flex-col items-start'>
            <span className='leading-3 text-xs'>Hello, sign in</span>
            <span className='font-bold leading-3 text-xs'>Account & Lists</span>
            </p>
            <CaretDownOutlined />
        </Button>
      </Dropdown>
  )
}
