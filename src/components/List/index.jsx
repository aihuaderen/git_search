import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    const {users} = this.props;
    return (
      <div className="row">
        {users.map((userObj, index) => {
          return (
            <div className="card" key={index}>
              <a href={userObj.html_url} rel='noreferrer' target="_blank">
                <img src={userObj.avatar_url} alt='pic' style={{ width: "100px" }} />
              </a>
              <p className="card-text">{userObj.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
}