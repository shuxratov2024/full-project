import React from 'react'
import { Link } from 'react-router'

function NoteCard({note}) {
    return (
        <>
            <Link to={`/note/${note._id}`}>NoteCard</Link>
<div className="card-body">
    <h3 className="card-title">{note.title}</h3>
    <p className='card-content'>{note.content}</p>
    <div className="card-action">
        <span>
            {note.createAd}
        </span>
    </div>
</div>
        </>
    )
}

export default NoteCard