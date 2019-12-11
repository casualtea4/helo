import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {logout} from '../../redux/reducer'
import axios from 'axios';

const Nav = (props) => {
    console.log(props)

    // const home = () => {
    //     props.history.push('/dashboard')
    // }
    // const newPost = () => {
    //     props.history.push('/post')
    // }
    // const logout = () => {
    //     axios.post('/api/logout').then(res=>{
    //         props.logout()
    //         props.history.push('/')
    //     })
    //     .catch(err => console.log(err))
    // }
    return(
        <div>
            Nav
            <Link to='/dashboard'>Home</Link>
            <Link to='/post'>New Post</Link>
            <Link to='/'>Logout</Link>
            {/* <button onClick={home}>Home</button>
            <button onClick={newPost}>New Post</button> */}
            {/* <button onClick={logout}>Logout</button> */}
            {props.user.username}
            {props.user.profile_pic}
        </div>
    )
}

const mapToStateProps = (reduxState) => {
    return reduxState
}

export default connect(mapToStateProps,{logout})(Nav);