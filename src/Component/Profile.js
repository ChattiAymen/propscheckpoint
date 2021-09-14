import React from 'react'

export const Profile = (props) => {
    return (
        <div>
            <h1>fullName : {props.fullName}</h1>
            <h1>Bio : {props.Bio}</h1>
            <h1>profession : {props.profession}</h1>
            {props.children}
            <button onClick={()=>props.handleClick(props.Bio)}>Click On This</button>
        </div>

    )
}
