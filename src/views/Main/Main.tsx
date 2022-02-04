import React, { useEffect } from 'react'

const Main: React.FC = () => {
        
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    
    return (
        <div className="main">
            Main
        </div>
    )
}

export default Main