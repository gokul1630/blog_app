import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import HtmlRenderer from '../../../components/htmlRenderer';
import { useRouter } from 'next/router';
import moment from 'moment';

const ViewBlog = () => {
    const route = useRouter();
    const [blogData, setBlogData] = useState({});

    const fetchData = async () => {
        try {
            const response = await fetch('/api/blog/' + route?.query?.blogId);
            const data = await response.json();
            if (data?.status === 'success') {
                setBlogData(data?.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [route?.query]);

    return (
        <div>
            {blogData ? (
                <div className='flex flex-col gap-5' key={blogData?._id}>
                    <h1 className='text-5xl font-bold'>{blogData?.title}</h1>
                    <div className='flex gap-10'>
                        <p>Author: {blogData?.createdBy}</p>
                        <p>
                            Created:{' '}
                            {moment(
                                new Date(parseInt(blogData?.createdAt, 10))
                            ).format('DD.MM.YY')}
                        </p>
                    </div>
                    <HtmlRenderer html={blogData?.body} />
                </div>
            ) : (
                <h1>No blogs, start write a one!</h1>
            )}
        </div>
    );
};

export default ViewBlog;
