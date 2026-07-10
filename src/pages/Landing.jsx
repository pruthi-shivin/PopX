import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import Button from "../components/Button";

import "./Landing.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="landing">

        <div className="landing-content">

          <div>
            <h1 className="landing-title">
              Welcome to PopX
            </h1>

            <p className="landing-description">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit,
            </p>
          </div>

          <div className="landing-buttons">
            <Button
              variant="primary"
              onClick={() => navigate("/register")}
            >
              Create Account
            </Button>

            <Button
              variant="secondary"
              onClick={() => navigate("/login")}
            >
              Already Registered? Login
            </Button>
          </div>

        </div>
      </section>
    </Layout>
  );
}

export default Landing;