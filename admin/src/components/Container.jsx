import React, { Fragment} from 'react';
import {Route,Switch} from 'react-router-dom';
const Container = (props) => {
  return(
      <Fragment>
      <Switch>
        {
        props.router.map((item,index)=>{
                      return (<Route path={item.path} 
                                    match={props.match} 
                                    location={props.location} 
                                    history={props.history}
                                    render={() => {
                                        if(item.children){
                                            return <Container 
                                                    match={props.match}
                                                    location={props.location}
                                                    history={props.history}
                                                    router={item.children}
                                                    />
                                        }else{
                                           return <item.component/>
                                        }
                                        } 
                                    }
                                    key={index}
                              ></Route>)
        })
        }
      </Switch>
      </Fragment>
    )
}
export default Container