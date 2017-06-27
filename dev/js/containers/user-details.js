import React,{Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{

    render(){
        if(!this.props.ActiveUser){
            return <h4>Select a user</h4>
        }
        return(
            <div>
            
              <h2>Hi I am {this.props.ActiveUser.first},
              Age:{this.props.ActiveUser.age}
              {this.props.ActiveUser.description}</h2>
            </div>
        )
    }
}

function mapStateToProps(state){
   return {
       ActiveUser:state.ActiveUser
   };
}

export default connect(mapStateToProps)(UserDetail);