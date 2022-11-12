import React from 'react'

function Alert(props) {
    return (

        <div style={{height:'60px'}}>

            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-2`} role="alert">

                <strong>{(props.alert.type).toString().charAt(0).toUpperCase() + (props.alert.type).slice(1)}</strong> : {(props.alert.msg)}

            </div>}

        </div>


    );
}

export default Alert;