import React from 'react';
import user from '../../common/dash/img/user.png';


class Members extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="jd-members">

        <div className="jd-add-member">
          <button className="add">NEW MEMBER</button>
        </div>

        <div className="jd-members-container">
          <div className="jd-member">
            <div className="jd-member-avatar">
                <img src={user} alt="user" />
            </div>
            <div className="jd-member-details">
                <h3>Achola Achola</h3>
                <p>0720637837</p>
            </div>
          </div>

          <div className="jd-member">
            <div className="jd-member-avatar">
                <img src={user} alt="user" />
            </div>
            <div className="jd-member-details">
                <h3>Achola Achola</h3>
                <p>0720637837</p>
            </div>
          </div>

          <div className="jd-member">
            <div className="jd-member-avatar">
                <img src={user} alt="user" />
            </div>
            <div className="jd-member-details">
                <h3>Achola Achola</h3>
                <p>0720637837</p>
            </div>
          </div>

          <div className="jd-member">
            <div className="jd-member-avatar">
                <img src={user} alt="user" />
            </div>
            <div className="jd-member-details">
                <h3>Achola Achola</h3>
                <p>0720637837</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Members;