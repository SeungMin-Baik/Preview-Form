import React from 'react'
import Button from '../Button'
import './Modal.scss'

interface ModalProps {
    title: string
    contents: string
    size: 'large' | 'small'
    onDismiss: () => void
}

const Modal: React.FC<ModalProps> = ({ title, contents, size, onDismiss }) => {
    
    const classNames = () => {
        return `boilerplate-modal ${size}`
    }

    return (
        <div className={classNames()}>
            <div className='background'/>
            <div className='modal'>
                <div className='title'>
                    <span>{title}</span>
                </div>
                <div className='contents'>
                    <span>{contents}</span>
                </div>

                <div className='foot'>
                    <Button text='close' onClick={onDismiss} />
                </div>
            </div>
        </div>
    )
}

export default Modal