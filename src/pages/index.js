import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';

const Index = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/blogs');
                const data = await response.json();
                if (data?.status === 'success') {
                    setBlogData(data?.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='flex flex-col gap-10'>
            <Link href='/blog/create-blog' className='text-pink-400'>
                Create blog
            </Link>

            <div className='flex flex-col gap-5'>
                {blogData?.length ? (
                    blogData?.map((blog) => {
                        return (
                            <Link
                                className='shadow-sm'
                                href={{
                                    pathname: `/blog/view-blog`,
                                    query: { blogId: blog?._id },
                                }}
                                key={blog?._id}>
                                <h1 className=''>{blog?.title}</h1>
                                <div className='flex gap-4'>
                                    <p>
                                        {moment(
                                            new Date(
                                                parseInt(blog?.createdAt, 10)
                                            )
                                        ).format('DD.MM.YY')}
                                    </p>
                                    <p>{blog?.createdBy}</p>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <h1>No blogs, start write a one!</h1>
                )}
            </div>
        </div>
    );
};

export default Index;
