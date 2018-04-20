import React from 'react';

class Statements extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className="jd-statements">
        <h2>Member/Group Statements</h2>
        <div className="jd-statements-header">
            <span>ID</span>
            <span>NAME</span>
            <span>TYPE</span>
            <span>TRANSACTION</span>
            <span>DATE</span>
        </div>
        <div className="jd-statements-body">
            <div className="jd-statement">
                <span>1</span>
                <span>Felistas Wanyonyi</span>
                <span>Deposit</span>
                <span>MDH4vasq</span>
                <span>12.04.2018</span>
            </div>

            <div className="jd-statement">
                <span>2</span>
                <span>Felistas Wanyonyi</span>
                <span>Deposit</span>
                <span>MDH4vasq</span>
                <span>12.04.2018</span>
            </div>

            <div className="jd-statement">
                <span>3</span>
                <span>Felistas Wanyonyi</span>
                <span>Deposit</span>
                <span>MDH4vasq</span>
                <span>12.04.2018</span>
            </div>

            <div className="jd-statement">
                <span>4</span>
                <span>Felistas Wanyonyi</span>
                <span>Deposit</span>
                <span>MDH4vasq</span>
                <span>12.04.2018</span>
            </div>

            <div className="jd-statement">
                <span>5</span>
                <span>Felistas Wanyonyi</span>
                <span>Deposit</span>
                <span>MDH4vasq</span>
                <span>12.04.2018</span>
            </div>
        </div>
      </div>
    );
  }
}

export default Statements;