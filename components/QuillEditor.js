import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const QuillEditor = ({ onChangeContent, className }) => {
    const quillRef = useRef(null);
    const quillInstance = useRef(null);

    useEffect(() => {
        const loadQuill = async () => {
            const Quill = (await import('quill')).default;

            if (!quillInstance.current && quillRef.current) {
                quillInstance.current = new Quill(quillRef.current, {
                    theme: 'snow',
                    placeholder: 'Start typing...',
                });

                quillInstance.current.on('text-change', () => {
                    const html =
                        quillRef.current.querySelector('.ql-editor').innerHTML;
                    if (onChangeContent) {
                        onChangeContent(html);
                    }
                });
            }
        };

        loadQuill();
    }, []);

    return (
        <div>
            <div ref={quillRef} className={className} />
        </div>
    );
};

export default dynamic(() => Promise.resolve(QuillEditor), {
    ssr: false,
});
