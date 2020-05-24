import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Heroes from '../Heroes/Heroes';

 function Router() {
    return (
        <div>
           <Switch>
               <Route exact path="/" component={Heroes}/>
           </Switch> 
        </div>
    )
}

export default Router;
