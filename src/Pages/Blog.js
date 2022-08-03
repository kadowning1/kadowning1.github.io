import React from 'react'
import Week1 from '../Components/BlogPosts/Week1'
import BlogPost from '../Components/BlogPost'
// import { event_click } from '../lib/ga/Analytics'
// import { useLocation } from 'react-router-dom'
// import useRouter from 'next/router'

export const Blog = () => {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <h1 className='text-center'>Blog Posts</h1>
                    <BlogPost />
                    <Week1 />
                    {/* <Week2 />
                    <Week3 />
                    <Week4 />
                    <Week5 />
                    <Week6 />
                    <Week7 />
                    <Week8 />
                    <Week9 />
                    <Week10 />
                    <Week11 /> */}
                </div>
            </div>
        </>
    )
}

export default Blog;
