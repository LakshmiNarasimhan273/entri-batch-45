import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notesSlice';

function NotesForm() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: ""
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.title || !formData.description || !formData.category) return;

        dispatch(addNote({
            id: Date.now(),
            ...formData
        }));

        setFormData({
            title: "",
            description: "",
            category: ""
        })
    }

    
    return (
        <div className='bg-white shadow-xl rounded-xl p-6 w-full max-w-xl mx-auto'>
            <h2 className='text-xl font-semibold mb-4 text-gray-700'>Create Note</h2>

            <form onSubmit={handleSubmit} className='space-y-4'>
                <input
                    value={formData.title}
                    className='w-full p-2 border rounded-lg outline-none'
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    type="text" placeholder='Notes title' />

                <textarea
                    value={formData.description}
                    className='w-full p-2 border rounded-lg outline-none'
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder='Notes Description'></textarea>

                <input type="text"
                    value={formData.category}
                    className='w-full p-2 border rounded-lg outline-none'
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder='Notes Category' />

                <button className='w-full bg-indigo-700 text-white py-2 rounded-lg font-medium cursor-pointer'>Add Note</button>
            </form>
        </div>
    )
}

export default NotesForm