import React from 'react'
import Week1 from '../Components/BlogPosts/Week1'
import Week2 from '../Components/BlogPosts/Week2'
import Week3 from '../Components/BlogPosts/Week3'
import Week4 from '../Components/BlogPosts/Week4'

export default function Blog() {
    return (
        <>
            <div className='container'>
                <div className="row">
                    {/* <Week1 /> */}
                    <Week2 />
                    <Week3 />
                    <Week4 />
                </div>
            </div>
        </>
    )
}
