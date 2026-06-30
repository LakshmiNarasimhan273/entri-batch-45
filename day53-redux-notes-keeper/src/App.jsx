import React from 'react'
import NotesForm from './components/NotesForm'
import NotesList from './components/NotesList'

function App() {
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl text-center font-semibold mb-8 text-gray-700'>Redux NotesKeeper</h1>

        <NotesForm />
        <NotesList />
      </div>
    </div>
  )
}

export default App