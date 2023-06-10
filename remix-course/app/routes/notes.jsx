import { json, redirect } from "@remix-run/node";

import NewNote, { links as newNoteLinks } from "../components/NewNote"
import NoteList, { links as noteListLinks } from "../components/NoteList";

import { getStoredNotes, storeNotes } from '../data/notes'
import { useLoaderData, Link, useCatch } from "@remix-run/react";

export function links() {
    return [...newNoteLinks(), ...noteListLinks()]
}  

export function meta() {
    return {
        title: 'All Notes',
        description: 'Manage your notes app.'
    }
}

export default function NotesPage () {
    const notes = useLoaderData();
    return(
        <main>
            <NewNote />
            <NoteList notes={notes}/>
        </main>
    )
} 

export async function loader() {
    const notes = await getStoredNotes();
    if(!notes || notes.length === 0) {
        throw json({message: 'Could not find nay notes.'}, {
            status: 404,
            statusText: 'Not found.'
        }
    );
    }
    return notes;
}

export async function action({ request }) {
    const formData = await request.formData();
    const noteData = {
        title: formData.get('title'),
        content: formData.get('content')
    };

    if (noteData.title.trim().length < 5) {
        return {message: 'Invalid title - must be at least 5 characters long!'}
    }

    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData)
    await storeNotes(updatedNotes)
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
    return redirect('/notes')
}

export function CatchBoundary() {
    const caughtResponse = useCatch();
    const message = caughtResponse.data?.message || 'data not found'
    return (
        <main>
            <NewNote />
            <p className="info-message">{message}</p>
        </main>
    )
}

export function ErrorBoundary({ error }) {
    return (
      <main className="error">
        <h1>An error related to your notes occurred!</h1>
        <p>{error.message}</p>
        <p>
          Back to <Link to="/">safety</Link>!
        </p>
      </main>
    );
  }