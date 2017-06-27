import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index.js';
class UserList extends Component{
   
    createItemList(){
        return this.props.users.map((user)=>{
            return(
                <li 
                key={user.id}
                onClick={()=>this.props.selectUser(user)}>{user.first} {user.last}</li>
            );
        });
    }
   render(){
       return(
          <ul>
              {this.createItemList()}
          </ul>
       );
   }
}
function mapStateToProps(state){
   return {
       users:state.users
   };
}
function matchDispatchToProps(disptach){
   return bindActionCreators({selectUser:selectUser},disptach);
}

export default connect(mapStateToProps,matchDispatchToProps)(UserList);