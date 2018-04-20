export default theme => ({
  button: {
    borderRadius: 5,
    width: `27em`,
    lineHeight: `2.5em`,
    border: "none",
    margin: "0 auto"
  },
  cancelButton: {
    
    background: "linear-gradient(to right, #fdde33, #7bc556)",
    color: "white",
    fontSize: "1rem",
    fontFamily:"'Abel', sans-serif",
    "&:hover": {
      backgroundColor: "#f9f9f9"
    }
  },
  textFieldInput: {
    borderRadius: 4,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    color: "#FFF",
    fontFamily: "'Abel', sans-serif",
    "&:focus": {
      borderColor: "#fdde33",
      boxShadow: "0"
    },
    "&:placeholder": {
      color: "#FFF"
    }
  },
  userInfoRoot: {
    marginBottom: "1rem",
    width: `27em`,
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  contactRoot: {
    marginLeft: 20,
    marginBottom: "1rem",
    width: `27em`,
    height: `13rem`,
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  }
});
