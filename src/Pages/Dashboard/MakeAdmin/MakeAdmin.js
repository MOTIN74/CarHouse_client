import { TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState(' ');
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }


     const handleAdminSubmit = e => {
        const user = { email };
         fetch('https://shrouded-wildwood-42642.herokuapp.com/users/', {
             method: 'PUT',
            headers: {
                'content-type': 'application/json'
             },
            body: JSON.stringify(user)
        })
             .then(res => res.json())
             .then(data => {
                 if (data.modifiedCount) {
                    console.log(data);
                 setEmail('')
                   setSuccess(true);
                }
             })

         e.preventDefault()
     }
    return (
        <div>
            <h2>Make an Administrator</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField id="standard-basic" label="Email" type="email" 
            onBlur={handleOnBlur} variant="standard" />
            <Button type="submit" variant= "contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;