import axios from "axios";
import { useEffect, useState } from "react";
import { TfiBackLeft } from "react-icons/tfi";
import { useNavigate, useParams } from "react-router";

const NoteDetail = () => {
    const [note, setNote] = useState(null)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        const fetchNote = async () => {
            try {
                const res = await axios.get(`/notes/${id}`);
                setNote(res.data)
            } catch (error) {
                console.error("error fetching note:", error);
            }
            finally {
                setLoading(false)
            }
        }
    }, [id])
    console.log({ note })


    return (
        <>
<div className="Note-Detail">
    <div className="Detail-content">
        <div className="Detail-Back">
            <Link to="/" className="btn-back">
            <TfiBackLeft/>
            </Link>
        </div>
        <button onClick={handleDelete} className="btn-delete"></button>

    </div>
</div>
        </>
    )
}

export default NoteDetail;