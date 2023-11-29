import React from 'react';
import {useAuth } from "./auth";
import {useHistory} from "react-router-dom";


function Profile(props) {
    const auth = useAuth();
    const history = useHistory();

    const handleLogout = () => {

        auth.logout();
        history.push('/');
    }

    return (
        <div>
            <h2> Welcome to {auth.user} Profile</h2>
            <button onClick={handleLogout}> Logout </button>
        </div>
    );
}

export default Profile;