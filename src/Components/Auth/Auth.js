import React, {Component} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducer';

class Auth extends Component{
    constructor(){
        super();
        this.state={
                username: '',
                password: ''
            }
    }

    handleInput = (event) => {
        // console.log('handleinput function firing')
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleRegister = () => {
        // console.log('register button pushed')
        const {username,password} = this.state;
        axios.post('/api/register', {username,password}).then(res=>{
            // console.log(res)
            this.props.getUser(res.data)
            this.props.history.push('/dashboard')
            // console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    handleLogin = () => {
        // console.log('login button clicked')
        const {username,password} = this.state;
        // console.log(password)
        axios.post('/api/login', {username, password}).then(res=>{
            this.props.getUser(res.data)
            this.setState({username:'',passsword:''})
            this.props.history.push('/dashboard')
            console.log('did this work?')
            console.log(res.data)
        })
        .catch(err=>console.log(err))
    }

    render(){
        return(
            <div>
                Auth
                <input placeholder='username' name='username' maxLength='100'
                onChange={(event)=> this.handleInput(event)}/>
                <input placeholder='password' type='password' maxLength='20' name='password'
                onChange={(event)=> this.handleInput(event)}/>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleRegister}>Register</button>
                {/* {this.state.username}
                {this.state.password} */}
            </div>
        )
    }
}

export default connect(null,{getUser})(Auth)