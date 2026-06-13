import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footerTop">

        <div className="footerBrand">
          <h2>Nex<span>Meet</span></h2>
          <p>
            Secure HD video conferencing platform powered by
            WebRTC and Socket.io.
          </p>
        </div>

        <div className="footerLinks">
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Meetings</p>
          <p>History</p>
        </div>

        <div className="footerFeatures">
          <h4>Features</h4>
          <p>HD Video Calls</p>
          <p>Real-time Chat</p>
          <p>Screen Sharing</p>
        </div>

        <div className="footerFeatures">
          <h4>Support</h4>
          <p>Contact Us</p>
          <p>Accessibility</p>
          <p>Support Center</p>
        </div>

        

         

      </div>

      <div className="footerBottom">
        © 2025 NexMeet. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;