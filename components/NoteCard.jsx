function NoteCard({ note, setNotes }) {
    const handleDelete = async (e, id) => {
        e.preventDefault();
        e.stopPropagation(); // bu ham muhim: linkga o'tishni to'xtatadi

        if (!window.confirm("Are you want to delete this note?")) return;
        try {
            await api.delete(`/notes/${id}`);
            setNotes((prev) => prev.filter(note => note._id !== id));
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };

    return (
        <div className="card-body" onClick={() => window.location.href = `/note/${note._id}`}>
            <h3 className="card-title">{note.title}</h3>
            <p className="card-content">{note.content}</p>
            <div className="card-action">
                <span>{note.createAd}</span>
                <div className="sistems">
                    <FaPen color="white" />
                    <button
                        className="trash-icon"
                        onClick={(e) => handleDelete(e, note._id)}
                    >
                        <CiTrash color="white" size={17} />
                    </button>
                </div>
            </div>
        </div>
    );
}
