import React from 'react';
import Index from '@/layout/index.layout';
import Login from '@/layout/login.layout';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import router from './router.config';
const RouterConfig = ()=>{
    return (
        <Router>
            <Switch>
                <Route path='/login' exact component={Login} />
                <Route path='/'  render={({...route})=>{
                    let isLogin = typeof window.localStorage.getItem('user') === 'object';
                    return (isLogin?<Login/>:<Index {...route} router={router} />)
                }} />
            </Switch>
        </Router>
    )
}
export default RouterConfig