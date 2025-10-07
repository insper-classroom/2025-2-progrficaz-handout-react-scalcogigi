import axios from "axios";
import "./index.css";

export default function Note(props) {
  const { id, title, children, loadNotes } = props;

  const deleteNote = () => {
    axios
      .delete(`http://localhost:8000/api/notes/${id}/`)
      .then(() => {
        loadNotes();
      })
      .catch((error) => console.error("Erro ao deletar nota:", error));
  };

  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-content">{children}</div>

      <button className="btn-delete" onClick={deleteNote}>
        🗑️ Deletar
      </button>
    </div>
  );
}
