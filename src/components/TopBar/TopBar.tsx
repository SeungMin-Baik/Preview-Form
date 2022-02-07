import React from 'react'
import { ArrowLeft, Menu } from 'react-feather'
import useWindowResize from '../../hooks/window/useWindowResize'
import Nav from '../Nav'
import Logo from '../Logo'
import { useHistory, useLocation } from 'react-router-dom'
import './TopBar.scss'


interface TopBarProps {
    onPresentMobileMenu: () => void
}

const TopBar: React.FC<TopBarProps> = ({ onPresentMobileMenu }) => {
    
    const location = useLocation()
    const history = useHistory()
    
    const { width } = useWindowResize()
    
    const renderLogo = () => {
        if (width > 768) return <Logo />
        
        let title

        if (location.pathname.includes('/main')) {
            title = 'Main'
        } else {
            return <Logo/>
        }
        
        return (
            <div className="path-wrapper" onClick={() => history.goBack()}>
                <ArrowLeft className="symbol" size={24}/>
                <span>{title}</span>
            </div>
        )
    }
    
    return (
        <div className="top-bar-wrapper">
            <div className="top-bar">
                <div className="logo-wrapper" onClick={() => history.replace('/')}>
                    {renderLogo()}
                </div>
                                
                <Nav/>
                                
                <div className="menu-wrapper">
                    <Menu size={24} onClick={onPresentMobileMenu}/>
                </div>
            </div>
        </div>
    )
}

export default TopBar