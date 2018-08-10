import React from 'react';
import Index from '@/layout/index.layout';
import Login from '@/layout/login.layout';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
const RouterConfig = ()=>{
    return (
        <Router>
            <Switch>
                <Route path='/' exact render={()=>{
                    let isLogin = typeof window.localStorage.getItem('user') === 'object';
                    return (isLogin?<Login/>:<Index/>)
                }} />
                <Route path='/login' component={Login} />
            </Switch>
        </Router>
    )
}
export default RouterConfig