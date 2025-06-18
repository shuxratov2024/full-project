import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/PostCard.css";
import NoteCard from './NoteCard';

function PostCard({ refreshTrigger }) {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/notes/get");
                console.log(res.data);
                setNotes(res.data);
            } catch (error) {
                console.log("Error fetching notes");
            }
        };
        fetchNotes();
    }, [refreshTrigger]); // refreshTrigger o'zgarganda qayta so'rov qilish

    return (
        <>
            <div className="PostCard">
                    <div className="PostCard-Notes">
                <div className="PostCard-content">
                        {notes.map(note => (
                            <div  className="PostCard-Get">
                                <NoteCard key={note._id} note={note} setNotes={setNotes}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostCard;