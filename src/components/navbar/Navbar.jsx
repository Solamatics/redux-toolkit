import React from 'react';
import './navbar.css'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const name = useSelector(state => state.user.name)
  return (
    <div className='navbar'>
        <div className='logo'>
            Lama Dev
        </div>
        <nav className='nav-titles'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
        </nav>
        <div className='search'>
            <input type="text" placeholder='search for something...' />
        </div>
        <div className='navbar-left'>
            <div className='image-container'>
                <img src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            </div>
            
            <p>{name}</p>
            <ArrowDropDownOutlinedIcon />
        </div>
    </div>
  )
}

export default Navbar