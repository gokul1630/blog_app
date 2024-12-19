import React, { useState } from 'react';
import QuillEditor from '../../../components/QuillEditor';
import { useRouter } from 'next/router';

const initialState = {
    body: '',
    title: '',
    createdBy: '',
};

const CreateBlog = () => {
    const navigate = useRouter();
    const [state, setState] = useState(initialState);

    const createBlogPost = async () => {
        try {
            await fetch('/api/blog', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...state,
                    createdAt: Date.now(),
                }),
            });

            navigate.back();
        } catch (error) {
            console.log(error);
        }
    };

    const updateState = (key, value) =>
        setState((prevState) => ({ ...prevState, [key]: value }));

    return (
        <div className='flex flex-col'>
            <input
                value={state.title}
                placeholder='Blog Title'
                onChange={(event) => updateState('title', event.target.value)}
            />
            <input
                value={state.createdBy}
                placeholder='Author'
                onChange={(event) =>
                    updateState('createdBy', event.target.value)
                }
            />

            <QuillEditor
                value={state.body}
                onChangeContent={(event) => updateState('body', event)}
            />
            <button onClick={createBlogPost}>Publish</button>
        </div>
    );
};

export default CreateBlog;
