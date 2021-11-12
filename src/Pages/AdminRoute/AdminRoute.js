import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({children,...rest}) => {
    const {user, administrator, isLoading} = useAuth()
    if (isLoading) {
        return <h1 className="text-center">Please Wait...</h1>
    }
    return (
        <Route 
            {...rest} 
            render = {({location})=> user.email && administrator ? 
            children : 
            <Redirect 
                to={{
                    pathname:'/',
                    state:{from:location}
                    }}
            ></Redirect>}>

        </Route>
    );
};

export default AdminRoute;