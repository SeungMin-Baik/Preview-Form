import React, { useEffect, useState } from 'react'

import Modal from '../../components/Modal'

const Main: React.FC = () => {

    const [openModal, setOpenModal] = useState(false)
        
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onPresentationModal = (isOpen: boolean) => {
        setOpenModal(isOpen)
    }
    
    return (
        <div className="main">
            
            <button onClick={() => onPresentationModal(true)}> modal </button>
            {// modal test
                openModal && <Modal title='title' contents='contents' size='large' onDismiss={() => onPresentationModal(false)} />
            }
        </div>
    )
}

export default Main