import React from 'react';

//Styles
import './Error404.css'

function Error404(){
    return(
        <div className="error-container">
            <div className="error-box">
                <h1>error 404</h1>
                <h2>This page does not exist</h2>
            </div>
        </div>
    )
}

export default Error404;