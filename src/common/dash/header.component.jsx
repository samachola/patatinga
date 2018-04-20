import React from 'react';
import setAuthorizationToken from '../../utils/setAuthorizationToken';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  logout = () => {
    localStorage.removeItem('token');
    setAuthorizationToken();
    console.log(this.props);
  }

  render(){
    return(
      <div className="jd-header">
        <div className="jd-nav">
          <div className="jd-title">Dashboard</div>
          <div className="jd-menu">
            <a href="#">profile</a>
            <a href="#" onClick={this.logout}>logout</a>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;