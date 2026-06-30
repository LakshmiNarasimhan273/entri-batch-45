import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNote } from '../redux/notesSlice';

function NotesList() {
  // parameter.slicename.propertyName
  const notes = useSelector(data => data.noteskeeper.notes);

  const dispatch = useDispatch();

  if(notes.length === 0){
    return(
      <div className='text-center text-gray-500 mt-10'>
        No Notes Yet. Start Adding your First Note
      </div>
    )
  } 

  return (
    <div className='mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        notes.map(data => (
          <div key={data.id} className='bg-white shadow-md rounded-xl p-5'>
            <h1 className='text-lg font-semibold text-gray-800'>{data.title}</h1>
            <p className='text-gray-600 text-sm'>{data.description}</p>
            <p className='inline-block mt-3 text-xs bg-indigo-700 text-white font-semibold px-2 py-1 rounded-full'>{data.category}</p>
            <button className='mt-4 w-full bg-red-100 text-red-700 py-1 rounded-lg text-sm' onClick={() => dispatch(deleteNote(data.id))}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default NotesList