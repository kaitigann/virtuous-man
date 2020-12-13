import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Avatar} from 'antd'

const navLinks = [
    {
        title: 'Home',
        path: '/'
    }, 
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

export default function Navigation ({user}){

    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="site-navigation">
            <span className="menu-title">Virtuous Man Blog Title</span>
            <div className={`menu-content-container ${isMenuOpen && 'active'}`}>
                <ul>
                    { navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                        )
                    )}
                </ul>
                <span className="menu-avatar-container">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/0DTLcjxAfvqbxHnVXCYX.png" size={38} />
                    <span className="menu-avatar-name">{user.firstName} {user.lastName}</span>
                </span>   
               
            </div>
            <i className="ionicons icon ion-ios-menu" onClick={() => setMenuOpen(!isMenuOpen)}/>    
        </nav>
    )
}