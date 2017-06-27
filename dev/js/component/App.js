import React from 'react';
//require('../../scss/style.scss');
import UserList from '../containers/user-list';
import ActiveUser from '../containers/user-details';

const App = ()=>{
  return( <div>
       <h2>Username List </h2>
        <UserList />
        <hr/>
       <h2>User Details</h2>
       <ActiveUser />
   </div>
  );
};


export default App;