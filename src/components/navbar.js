import React from "react";
import "./navbar.css"



export default class componentName extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <h1 className="brand">SimPort App</h1>
          <ul>
            <li>
              <a href="home.js">Home</a>
            </li>
            <li>
              <a href="about.js">About</a>
            </li>
            <li>
              <a href="blog.js">Portfolio</a>
            </li>
            <li>
              <a href="contact.js">Contact</a>
            </li>
          </ul>
        </div>


      </div>
    );
  }
}
