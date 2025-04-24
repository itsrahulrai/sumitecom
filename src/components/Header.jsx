import { HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'

const Header = () => {

    const items = [
        {
            label:"Home",
            key:"home"
        },
        {
            label:"Men",
            key:"men"
        },
        {
            label:"Women",
            key:"women"
        },
        {
            label:"Kids",
            key:"kids"
        },
        {
            label:"Products",
            key:"products"
        },
        {
            icon:<UserOutlined style={{fontSize:"21px", Color:"#E55480"}}/>,
            key:"useroutlined"
        },
        {
            icon:<HeartOutlined style={{fontSize:"21px", Color:"#E55480"}}/>,
            key:"heartoutlined"
        },
        {
            icon:<ShoppingCartOutlined style={{fontSize:"21px", Color:"#E55480"}}/>,
            Key:"shoppingcartoutlined"
        }
    ]

  return (
    <>
      <nav className='bg-white p-4 py-3 shadow-lg flex justify-between'>
        <div className='w-4/12'>
            <img src="images/logo/logo.png" className='w-[200px]'/>
        </div>
        <div className='w-[580px]'>
            <Menu
                mode='horizontal'
                items={items}
                className='uppercase font-semibold text-2xl'
            />
        </div>
      </nav>
    </>
  )
}

export default Header
