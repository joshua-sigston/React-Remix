import { Link, useLoaderData } from "@remix-run/react"

import detailStyles from '../styles/noteDetails.css';

import { getStoredNotes} from '../data/notes'
import { json } from "@remix-run/node";

export function links() {
  return [{rel: 'stylesheet', href: detailStyles}]
}

export default function NoteDetails() {
    const note = useLoaderData();

    return(
        <main id="note-details">
            <header>
                <nav>
                    <Link to='/notes'>Back to all Notes</Link>
                </nav>
                <h1>{note.title}</h1>
            </header>
            <p id="note-details-content">{note.content}</p>
        </main>
    )
}

export async function loader({ params }) {
    const notes = await getStoredNotes();
    const noteID = params.noteID;
    const selectedNote = notes.find(note => note.id === noteID)

    if(!selectedNote) {
        throw json({message: 'could not find note for id' + noteID})
    }
    return selectedNote
}