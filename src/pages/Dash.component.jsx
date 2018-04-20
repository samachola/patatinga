import React from 'react';
import Statements from './statements/Statements.component';
import Members from './members/Members.component';
import Header from '../common/dash/header.component';
import Aside from '../common/dash/aside.component';

class Dash extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div className="jd-container">
        {/* App Header */}
        <Header />
        <div className="clearfix"></div>
        <div className="jd-dash">
        {/* App Aside Menu */}
        <Aside />
          
        <div className="jd-main">
          <div className="jd">
            <div className="jd-main-container">
            {/* Group or Member statements */}
            <Statements />

            {/* List of Group Members */}
            <Members />
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }

}

export default Dash;