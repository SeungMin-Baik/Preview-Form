import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Main from './views/Main/Main'

const App: React.FC = () => {
    
    return (
        <Router>
            <Switch>
                <Route path='/' component={null} exact/>
                <Route path='/main' component={Main}/>
                <Route path='*'>
                    <Redirect to='/'/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
