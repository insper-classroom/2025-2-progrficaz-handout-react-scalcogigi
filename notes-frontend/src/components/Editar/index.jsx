import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import AppBar from "../AppBar";
import { useState } from "react";

export async function loader({ params }) {
    const note = await axios
                        .get(`http://localhost:8000/api/notes/${params.noteId}/`)
                        .then((response) => response.data)
    return { note };
}

export default function Editar() {
    const navigate = useNavigate();
    const { note } = useLoaderData();
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    return (
        <>
        <AppBar />
        <main className="container">
            <form className="form-card">
                <input
                    className="form-card-title"
                    type="text"
                    name="titulo"
                    value={title}
                />
                <textarea
                    className="autoresize"
                    name="detalhes"
                    value={content}
                ></textarea>
                <button className="btn" type="submit">Criar</button>
            </form>
        </main>
        </>
    );
}