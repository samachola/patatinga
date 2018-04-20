import React from "react";
import "./SignIn.css";
import TextField from "material-ui/TextField";
import styles from "../../assets/styles";
import { withStyles } from "material-ui";
import { Button } from "material-ui";
import Header from "../../common/header/header.component";
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import axios from "axios";

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        phone_number: '',
        password: ''
      }
    }

    this.handleSignIn = this.handleSignIn.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
  });

  handleSignIn = () => {
    return axios.post("https://john-deere-api.herokuapp.com/api/auth/login", this.state.data)
      .then(response => {
        console.log(response);
        localStorage.token = response.data.data.token;
        setAuthorizationToken(response.data.data.token);
        this.props.history.push('dashboard');
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="sign-in-container">
        <Header />
        <div className="sign-in-modal">
          <div className="input">
            <h2>LOGIN</h2>

            <TextField
              placeholder={"MOBILE NUMBER"}
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: classes.userInfoRoot,
                  input: classes.textFieldInput
                },
                name: "phone_number"
              }}
              value={this.state.phone_number}
              onChange={this.onChange}
            />
        
            <TextField
              placeholder={"PIN"}
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: classes.userInfoRoot,
                  input: classes.textFieldInput
                },
                name: "password"
              }}
              type="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <Button
              onClick={this.handleSignIn}
              variant="raised"
              className={`${classes.button} ${classes.cancelButton}`}
            >
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SignIn);
