import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Container } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useState } from "react";

function Lecturer_signIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const toSignUp = () => {
    navigate("/register");
  };

  const login = () => {
  // Here is for login details
    let login = { email, password };

    console.log(email);
    console.log(password);

    console.log(login);
  };

  return (
    <>
      <Container className="card p-5 w-50 shadow rounded m-auto mt-5">
        <form noValidate autoComplete="off">
          <h3 className="text-center text-primary mb-3">Sign In</h3>
          <div className="form-group w-100 mb-2 d-flex">
            <span style={{ margin: "20px 5px 0 0" }}>
              <MailOutlineIcon color='primary' />
            </span>
            <TextField
              type="text"
              fullWidth
              required
              color="primary"
              label="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group w-100 mb-2 d-flex">
            <span style={{ margin: "20px 5px 0 0" }}>
              <LockOutlinedIcon color='primary' />
            </span>
            <TextField
              type="password"
              fullWidth
              required
              color="primary"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className=" mt-4 text-end">
            <span className="me-2">
              Did not have an account?{" "}
              <span className="text-primary" onClick={toSignUp}>
                Register here
              </span>
            </span>
            <Button variant="contained" color="primary" onClick={login}>
              Login
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Lecturer_signIn;
