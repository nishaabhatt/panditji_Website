import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 50 }}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
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
          Login As SuperAdmin
        </div>

        <TextField
          sx={{ maxWidth: 500, minWidth: 250 }}
          fullWidth
          id="outlined-basic"
          label="Admin ID"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
            props.onFormSwitch("register");
          }}
        >
          {"Don't Have Account? Register Here"}
        </Button>
      </Box>
    </div>
  );
};

export default Login;
