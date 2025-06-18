import React from 'react'
import { Link } from 'react-router'
import { PenSquareIcon, Trash2Icon } from "lucide-react"
import api from './../lib/axios';
import "../styles/PostCard.css"
function NoteCard({ note }) {
    const handleDelete = async (e, id) => {
        e.preventDefault()
        if(!window.confirm("Are you want to delete this note?")) return
        try {
            await api.delete(`/notes/${id}`)
        } catch (error) {
            
        }
    }
    return (

        <Link to={`/note/${note._id}`}>

            <div className="card-body">

                <h3 className="card-title">{note.title}</h3>
                <p className='card-content'>{note.content}</p>
                <div className="card-action">
                    <span>
                        {note.createAd}
                    </span>
                    <div className='sistems'>
                        <PenSquareIcon size={4} />
                        <button className='trash-icon' onClick={(e) => handleDelete(e, note._id)}>
                            <Trash2Icon size={4} />
                        </button>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default NoteCard