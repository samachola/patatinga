import React from 'react';

class Aside extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div className="jd-aside">
        <div className="jd-meta"></div>
        <div className="jd-menu">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">SAVINGS</a></li>
            <li><a href="#">PRODUCTS</a></li>
            <li><a href="#">LOAN CALCULATOR</a></li>
            <li><a href="#">MY TRACTOR</a></li>
            <li><a href="#">RENT</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Aside;