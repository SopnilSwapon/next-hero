import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <h2 className='bg-green-500 p-3 rounded'>DashBoard LayOut</h2>
            {children}
            <footer>Dashboard Foooter</footer>
        </div>
    );
};

export default layout;