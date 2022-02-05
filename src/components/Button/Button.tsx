import React from 'react'
import './Button.scss'

interface ButtonProps {
    text: string
    type?: 'default' | 'white' | 'disabled'
    round?: 'round' /* default 8px */ | 'rectangle'/*0px*/ | 'smooth'/*4px*/ | 'curved' /*16px;*/
    dimmed?: boolean
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ text, type = 'default', dimmed, round = 'smooth', onClick}) => {
    
    const clickButton = () => {
        if (type === 'disabled' || dimmed) return
        onClick()
    }
    
    const classNames = () => {
        return `boilerplate-button ${type} ${dimmed ? 'dimmed' : ''} ${round}`
    }
    
    return (
        <div className={classNames()} onClick={clickButton}>
            <span>{text}</span>
        </div>
    )
}

export default Button