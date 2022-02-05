import React from 'react'
import { logos } from '../../assets/logos'
import './Logo.scss'
import { useHistory } from 'react-router-dom'

const Logo: React.FC = () => {
    const history = useHistory()
    
    return (
        <div className='app-logo' onClick={() => history.replace('/')}>
            <img className='logo' src={null} alt='logo-symbol'/>
        </div>
    )
}

export default Logo