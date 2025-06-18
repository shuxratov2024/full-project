import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import "../styles/Navbar.css";
import "../styles/CreatePost.css";
import SvgClose from './../public/SvgClose';
import axios from 'axios';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [refreshTrigger, setRefreshTrigger] = useState(0); // Trigger uchun state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      console.error("Title or content cannot be empty");
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/notes/create", {
        title,
        content,
      });
      console.log("Note Created");
      setTitle("");
      setContent("");
      setOpen(false);
      setRefreshTrigger(prev => prev + 1); // Trigger ni o'zgartirish
      navigate("/"); // Sahifaga qaytish
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Navbar">
      <div className="Navbar-content">
        <Link className="Navbar-title">7MESSAGE</Link>
        <button className="Create-Post" onClick={() => setOpen(true)}>
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
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Write your name or username"
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your text "
              />
              <button className="btn-submit" type="submit">
                Create Note
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;