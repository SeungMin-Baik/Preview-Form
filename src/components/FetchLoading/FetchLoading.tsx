import React from 'react'
import './FetchLoading.scss'
import { utils } from '../../assets/utils'


const FetchLoading: React.FC = () => {
    return (
        <div className='fetch-loading'>
            <img src={utils.loading} alt='loading'/>
        </div>
    )
}

export default FetchLoading