import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Register = (props) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 50 }}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, justifyContent: "center" },
          padding: "30px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          Register As SuperAdmin
        </div>

        <TextField
          sx={{ maxWidth: 500, minWidth: 250 }}
          fullWidth
          style={{ display: "block" }}
          id="outlined-basic"
          label="Admin ID"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
        />

        <TextField
          type="email"
          sx={{ maxWidth: 500, minWidth: 250 }}
          fullWidth
          id="outlined-basic"
          label="Email Address"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          variant="outlined"
        />

        <TextField
          type="password"
          sx={{ maxWidth: 500, minWidth: 250 }}
          fullWidth
          id="outlined-basic"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button variant="outlined" color="primary">
            Login{" "}
          </Button>
        </div>

        <Button
          style={{
            display: "block",
          }}
          onClick={() => {
            props.onFormSwitch("login");
          }}
        >
          {" "}
          Already have an account? Sign In
        </Button>
      </Box>
    </div>
  );
};

export default Register;
