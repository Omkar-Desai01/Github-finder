import React from "react";

const Navbar = (props) => {
  console.log(props);
  const clickHandler = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      props.setUserName(e.target.value);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            Github Finder
          </a>
          <input
            placeholder="Search for a username"
            onKeyPress={clickHandler}
          ></input>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
