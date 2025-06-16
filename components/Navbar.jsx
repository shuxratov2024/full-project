import React, { useState } from 'react';
import { Link } from 'react-router';
import "../styles/Navbar.css"
import "../styles/CreatePost.css"
import SvgClose from './../public/SvgClose';

function Navbar() {
  const [open, setOpen] = useState(false); 

  return (
    <div className="Navbar">
      <div className="Navbar-content">
        <Link className="Navbar-title">7MESSAGE</Link>
        <button type="submit" className="Create-Post" onClick={() => setOpen(true)}>
          Create Post
        </button>
      </div>
      {open && (
        <div className={`Create ${open ? "open" : ""}`}>
          <div className="Create-Content">
            <div className="sistem">
              <h1 className="Create-Title">7Message</h1>
              <button onClick={() => setOpen(false)}>
                <SvgClose />
              </button>
            </div>
            <form className="form">
              <input type="text" placeholder="Write your name or username" />
              <input type="text" placeholder="Write your text " />
            </form>
            <button className="btn-submit" type="submit">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;