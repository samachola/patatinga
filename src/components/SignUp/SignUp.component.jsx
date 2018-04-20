import React from "react";
import TextField from "material-ui/TextField";
import axios from 'axios';
import styles from "../../assets/styles";
import { withStyles } from "material-ui";
import { Button } from "material-ui";
import Header from "../../common/header/header.component";

class SignUp extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      data: {
        name: '',
        national_id:'',
        phone_number:'',
        password:'',
        cpassword: ''
      },
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  onChange = (e) => this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
  });

  handleSignup = () => {
   
    let data = this.state.data;

    if(data.password !== data.cpassword){
      this.setState({ errors: { password: "PIN NUMBER SHOULD MATCH"}});
    }

    return axios.post("https://john-deere-api.herokuapp.com/api/auth/register", this.state.data)
      .then(response => {
        console.log(response); })
      .catch(err => {
        console.log(err.response);
    });

  }

  render() {
    const { classes } = this.props;
    const data = this.state.data;
    return (
      <div className="sign-in-container">
        <Header />
        <div className="sign-in-modal">
          <div className="input">
            <h2>REGISTER</h2>
            <TextField
              placeholder={"NAME"}
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: classes.userInfoRoot,
                  input: classes.textFieldInput
                },
                name: "name"
              }}
              value={data.name}
              onChange={this.onChange}
            />
            <TextField
              placeholder={"MOBILE"}
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: classes.userInfoRoot,
                  input: classes.textFieldInput
                },
                name: "phone_number",
              }}
              value={data.phone_number}
              onChange={this.onChange}
            />
            <TextField
              placeholder={"ID NUMBER"}
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: classes.userInfoRoot,
                  input: classes.textFieldInput
                },
                name: "national_id"
              }}
              value={data.national_id}
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
              value={data.password}
              onChange={this.onChange}
            />
            <TextField
              placeholder={"CONFIRM PIN"}
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: classes.userInfoRoot,
                  input: classes.textFieldInput
                },
                name: "cpassword"
              }}
              type="password"
              value={data.cpassword}
              onChange={this.onChange}
            />
            <Button
              variant="raised"
              className={`${classes.button} ${classes.cancelButton}`}
              onClick={this.handleSignup}
            >
              REGISTER
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SignUp);
