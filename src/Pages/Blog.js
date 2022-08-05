import React from 'react'
import BlogPost from '../Components/BlogPost'
import { Container, Row } from 'react-bootstrap'

export const Blog = () => {
    return (
        <>
            <Container className='container'>
                <Row className="row">
                    <h1 className='text-center'>Blog Posts</h1>
                    <BlogPost />
                </Row>
            </Container>
        </>
    )
}

export default Blog;
