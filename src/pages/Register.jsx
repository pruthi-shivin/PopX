import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";

import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    navigate("/account");
  };

  return (
    <Layout>
      <section className="register">

        <h1 className="register-title">
          Create your
          <br />
          PopX account
        </h1>

        <div className="register-form">

          <Input
            label="Full Name"
            required
            name="fullName"
            placeholder="Marry Doe"
            value={form.fullName}
            onChange={handleChange}
          />

          <Input
            label="Phone number"
            required
            name="phone"
            placeholder="Marry Doe"
            value={form.phone}
            onChange={handleChange}
          />

          <Input
            label="Email address"
            required
            name="email"
            placeholder="Marry Doe"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Password"
            required
            type="password"
            name="password"
            placeholder="Marry Doe"
            value={form.password}
            onChange={handleChange}
          />

          <Input
            label="Company name"
            name="company"
            placeholder="Marry Doe"
            value={form.company}
            onChange={handleChange}
          />

          <div className="agency">

            <p className="agency-title">
              Are you an Agency?<span>*</span>
            </p>

            <div className="agency-options">

              <label>

                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={form.agency === "Yes"}
                  onChange={handleChange}
                />

                Yes

              </label>

              <label>

                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={form.agency === "No"}
                  onChange={handleChange}
                />

                No

              </label>

            </div>

          </div>

        </div>

        <Button
          variant="primary"
          onClick={handleSubmit}
        >
          Create Account
        </Button>

      </section>
    </Layout>
  );
}

export default Register;