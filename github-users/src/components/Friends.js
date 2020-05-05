import React from 'react'
import Follower from './Follower'

const Friends = props => {

    return (
        <div className='friends'>
        {props.followers.map(follower => <Follower follower={follower} key={follower.id} />)}
        </div>
    )
}

export default Friends