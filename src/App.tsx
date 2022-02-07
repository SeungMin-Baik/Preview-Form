import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import TopBar from './components/TopBar'
import MobileMenu from './components/MobileNav'
import Main from './views/Main/Main'

const App: React.FC = () => {

    const [mobileMenu, setMobileMenu] = useState(false)

    const handleToggleMobileMenu = useCallback((visible) => {
        scollFixed(visible)
        setMobileMenu(visible)
    }, [setMobileMenu])

    const scollFixed = (fix: boolean) => {
        if (fix) {
            document.body.classList.add('fixed')
        } else {
            document.body.classList.remove('fixed')
        }
    }
    
    return (
        <div className='container'>
            <Router>
                <TopBar
                    onPresentMobileMenu={() => handleToggleMobileMenu(!mobileMenu)}
                />
                <MobileMenu
                    visible={mobileMenu}
                    onDismiss={() => {
                        handleToggleMobileMenu(false)
                    }}
                />
            
                <Switch>
                    <Route path='/' component={Main} exact/>
                    <Route path='/main' component={Main}/>
                    <Route path='*'>
                        <Redirect to='/'/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
