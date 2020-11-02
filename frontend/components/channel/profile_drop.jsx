import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="dropdown">
        <div className="dropdown-header">
          <h3 className="dropdown-username">
            {this.props.currentUser.username}
          </h3>
        </div>
        <ul>
          <li className="pro-drop">Update your status...</li>
          <li className="pro-drop">Edit Profile</li>
          <li className="pro-drop">Preferences</li>
          <li className="pro-drop">
            Set yourself to <b>away</b>
          </li>
          <hr />
          <div className="dropdown-header2">
            <span>
              <h3 className="dropdown-username">Roc-a-Fella</h3>
              <p>roc-a-fella.6lack.com</p>
            </span>
          </div>

          <hr />
          <li className="pro-drop">Customize 6lack</li>
          <li className="dropdown-signout" onClick={this.props.logout}>
            Sign out of <b>Roc-a-Fella</b>
          </li>
          <hr />
          <li className="pro-drop">Sign in to another workspace...</li>
        </ul>
      </div>
    );
  }
}

export default Dropdown;
