import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/PostCard.css"
function PostCard() {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/notes/get")
                console.log(res.data)
                setNotes(res.data)
            } catch (error) {
                console.log("Error fetching notes");

            }
        }
        fetchNotes();
    }, [])
    return (
        <>
            <div className="PostCard">
                <div className="PostCard-content">
                    <div className="PostCard-Notes">
                        {notes.map(note => (
                            <div>

                                <h2>{note.title}</h2>
                                <p>{note.content}</p>

                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostCard;