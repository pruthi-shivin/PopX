import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("/account");
  };

  return (
    <Layout>
      <section className="login">

        <h1 className="login-title">
          Signin to your <br />
          PopX account
        </h1>

        <p className="login-description">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <div className="login-form">

          <Input
            label="Email Address"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

            <Button
                variant="primary"
                onClick={handleLogin}
                >
                    Login
            </Button>

        </div>

      </section>
    </Layout>
  );
}

export default Login;