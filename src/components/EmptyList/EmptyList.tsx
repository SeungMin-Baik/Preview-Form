import React from 'react'
import { utils } from '../../assets/utils'
import './EmptyList.scss'


interface EmptyListProps {
    msg: string
}

const EmptyList: React.FC<EmptyListProps> = ({ msg }) => {
    return (
        <div className='empty-list'>
            <img src={utils.empty} alt='empty-icon'/>
            <span className='message'>{msg}</span>
        </div>
    )
}

export default EmptyList