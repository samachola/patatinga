import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import ebr from "../../assets/allan.jpg";
import TextField from "material-ui/TextField";
import styles from "../../assets/styles";
import { withStyles } from "material-ui";
import mul from "../../assets/bmulobi1.jpg";
class LandingPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <div className="header">
          <div className="header-top-content">
            <div className="header-top-content-login">
              <h2>
                <Link to="/signin" style={{ textDecoration: "none" }}>
                  LOGIN
                </Link>
              </h2>
            </div>
            <h2>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                REGISTER
              </Link>
            </h2>
          </div>
          <div className="header-center-content">
            <p>
              A BETTER WAY TO GO ABOUT YOUR FARMING ACTIVITIES. <br />OWN A
              TRACTOR INDIVIDUALLY OR AS A GROUP
            </p>
            <div className="header-button">GET STARTED</div>
          </div>
        </div>
        <div className="app-description">
          <h2>HOW IT WORKS</h2>
          <i class="fas fa-user" />
        </div>
        <div className="team">
          <h2>THE TEAM</h2>
          <div className="team-three">
            <div className="member-info">
              <div className="member">
                <img src={mul} alt="Felistas" />
              </div>
              <p>
                Software developer at <br />Andela Kenya
              </p>
            </div>
            <div className="member-info">
              <div className="member">
                <img src={ebr} alt="Felistas" />
              </div>
              <p>
                Software developer at <br />Andela Kenya
              </p>
            </div>
            <div className="member-info">
              <div className="member">
                <img src={ebr} alt="Felistas" />
              </div>
              <p>
                Software developer at <br />Andela Kenya
              </p>
            </div>
            <div className="member-info">
              <div className="member">
                <img src={ebr} alt="Felistas" />
              </div>
              <p>
                Software developer at <br />Andela Kenya
              </p>
            </div>
            <div className="member-info">
              <div className="member">
                <img src={ebr} alt="Felistas" />
              </div>
              <p>
                Software developer at <br />Andela Kenya
              </p>
            </div>
          </div>
        </div>
        <div className="contact-us">
          <h2>CONTACT US</h2>
          <div className="contact-content">
            <div className="names">
              <TextField
                placeholder={"FIRST NAME"}
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.userInfoRoot,
                    input: classes.textFieldInput
                  }
                }}
              />
              <TextField
                placeholder={"LAST NAME"}
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.userInfoRoot,
                    input: classes.textFieldInput
                  }
                }}
              />
            </div>

            <TextField
              placeholder={"MESSAGE"}
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: classes.contactRoot,
                  input: classes.textFieldInput
                }
              }}
            />
            <div className="submit">
              <h3>SUBMIT</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
