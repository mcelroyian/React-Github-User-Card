import React from 'react'

const User = props => {

    if (Object.keys(props.user).length === 0) {
        return (
            <div className='user'>
                <div className='card'>
                    <h2>No User Found</h2>
                </div>
            </div>
        )
    }

    return (
        <div className='user'>
            <div className='card'>
                <h2>{props.user.name}</h2>
                <h4>{props.user.bio}</h4>
                <h4>{props.user.location}</h4>
                <p>Followers: {props.user.followers}</p>
                <p>Following: {props.user.following}</p>
            </div>
        </div>
    )
}
export default User