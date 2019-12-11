import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
// import Checkbox from 'styled-components';
const Checkbox = props => (
    <input type="checkbox" {...props}/>
)

class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            search:'',
            posts:[],
            check: true
        }
    }

    // componentDidMount(){
    //     axios.get('api/posts')
    // }

    handleCheck = (e) => {
        this.setState({
            check:!this.state.check
        })
        console.log('handleCheck function fired')
        console.log(this.state.check)
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        console.log(this.props)
     return(
            <div>
              Dashboard
              <input placeholder='search by title'          name='search' maxLength='100'
               onChange={(e)=> this.handleInput(e)}/>

               <label>
               <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheck}/>
                <span>My Post</span>
                </label>
                
               <button>Search</button>
               <button>Reset</button>
               {/* display username and profile pic */}
              {/* <button>Logout</button> */}
               {/* send to auth page */}
               {/* {this.state.search} */}
               {this.state.check}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) =>{
    return reduxState
}

export default connect(mapStateToProps)(Dashboard);