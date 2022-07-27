import React from 'react';
import { Button } from 'react-bootstrap';

export const Hulu = () => {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12 py-2 justify-content-center'>
      <div className='card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100'>
        <img
          className='card-img-top image-fluid mx-auto p-3'
          src='/img/Hulu.png'
          alt='food'
        />
        <br></br>
        <h3 className='card-title text-decoration-none fat'>Hulu Clone</h3>
        <h5 className='card-text p-2'>
          Application creating golf pools from PGA tour golfers to compete
          against friends and family. This app is easy to use for all ages to
          participate and contains a back-end storing all user data. Create
          teams of golfers and groups to see how you stack up!
        </h5>
        <p className='card-text'>
          <b>Tech Stack:</b> Tailwind-CSS, React, Typescript, nextJS, ESLint,
          Vercel
        </p>
        <Button
          variant='secondary'
          size='lg'
          href='hulu-clone-nine-sigma.vercel.app'
          target='_blank'
        >
          Demo App
        </Button>
        <Button
          variant='secondary'
          size='lg'
          href='https://github.com/kadowning1/huluClone'
          target='_blank'
        >
          Github Repo{' '}
        </Button>
      </div>
    </div>
  );
};
