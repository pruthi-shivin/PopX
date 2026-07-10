import Layout from "../components/Layout";
import "./Account.css";

import profile from "../assets/profile.jpg";

import { FaCamera } from "react-icons/fa";

function Account() {
  return (
    <Layout>
      <section className="account">

        <header className="account-header">
          <h2>Account Settings</h2>
        </header>

        <div className="account-profile">

          <div className="profile-image">

            <img
              src={profile}
              alt="Profile"
            />

            <div className="camera-icon">
              <FaCamera />
            </div>

          </div>

          <div className="profile-info">

            <h3>Marry Doe</h3>

            <p>Marry@Gmail.Com</p>

          </div>

        </div>

        <p className="account-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>

      </section>
    </Layout>
  );
}

export default Account;