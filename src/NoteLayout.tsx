import { Note } from "./App";
import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";

type NoteLayoutProps = {
  notes: Note[];
};

const NoteLayout = ({ notes }: NoteLayoutProps) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);
  if (note == null) return <Navigate to="/" replace />;
  // Pass the note object to outlet to be used on any child route elements
  return <Outlet context={note} />;
};

export function useNote() {
  return useOutletContext<Note>();
}

export default NoteLayout;
