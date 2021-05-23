import React from 'react'

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
}

// Using the defualt prop when we do pass the the prop, 
// rather than using {props.mesage} || "Loading" , defualtProps can be used
Spinner.defaultProps = {
    message: 'Loading'
};

export default Spinner;