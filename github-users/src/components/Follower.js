import React from 'react'

const Follower = props => {

    return (
        <div className='follower'>
            <h2>{props.follower.login}</h2>
            <img src={props.follower.avatar_url} />
            <button value={props.follower.url}>See Profile</button>
        </div>
    )
}

export default Follower