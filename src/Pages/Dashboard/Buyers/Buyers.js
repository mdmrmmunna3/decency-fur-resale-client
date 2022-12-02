import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Buyers = () => {
    const {userRoleInfo} = useContext(AuthContext)
    return (
        <div>
            <h2>this is buyer</h2>
        </div>
    );
};

export default Buyers;