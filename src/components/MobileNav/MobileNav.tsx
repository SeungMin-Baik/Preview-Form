import React, { useEffect, useState } from 'react'
import { X } from 'react-feather'
import { NavLink, useLocation } from 'react-router-dom'

import './MobileNav.scss'


interface MobileNav {
    visible: boolean
    onDismiss: () => void
}

const MobileNav: React.FC<MobileNav> = ({ visible, onDismiss }) => {
    
    const [path, setPath] = useState('')
    const location = useLocation()
    
    useEffect(() => {
        if (path !== location.pathname) {
            setPath(location.pathname)
            if (visible) {
                onDismiss()
            }
        }
    }, [location.pathname, visible, onDismiss, setPath, path])
    
    const header = () => {
        return (
            <div className="nav-item divide">
                <div className="wrapper">
                    <span className="title">Menu</span>
                </div>
                
                <X className="symbol" size={24} onClick={onDismiss}/>
            </div>
        )
    }

    
    if (visible) {
        return (
            <div className="mobile-nav">
                {header()}
                
                <NavLink className="nav-item clickable" activeClassName="active" to="/contacts" onClick={onDismiss}> Contacts </NavLink>
            </div>
        )
    }
    
    return null
}

export default MobileNav