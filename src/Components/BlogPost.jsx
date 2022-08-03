import React from 'react';
import person from '../blogpost.json';

export default function BlogPost() {
  console.log(person);
  console.log(person[0].headline);
  return (
    <div className='container'>
      <div className='row p-3'>
        <div className='clearfix'>
          {person.map((person, index) => (
            <div className='col-md-4 my-3' key={index}>
              <div className='card position-relative top-50 start-50 translate-middle bg-secondary p-3'>
                <div className='card-body text-white'>
                  <img
                    src='/img/Markdown.png'
                    className='rounded mx-auto d-block img-fluid img-thumbnail p-2'
                    alt='...'
                  />
                  <h5 className='card-title text-white pt-2'>{person.headline}</h5>
                  <p className='card-text'>{person.p2}</p>
                  <p className='card-text'>{person.p3}</p>
                  <a href={person.link} className='btn btn-primary'>
                    Read More
                  </a>
                </div>
                <div className='card-footer'>
                  <small className='text-center'>
                    Week of August 23 to August 29, 2021
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
//           <div className='card position-relative top-50 start-50 translate-middle bg-secondary p-3'>
//             <div className='card-body text-white'>
//               <h5 className='card-title text-white'>Week 1 Onboarding</h5>
//               <p className='card-text'>
//                 Creating my first blog post during the onboarding stages of the
//                 Web Dev bootcamp. I have been learning up to this point to
//                 seamlessly enter the bootcamp as prepared as possible while also
//                 leaving myself opportunities to see how others can teach me
//                 certain aspects. I'm trying to combine many avenues (SoloLearn,
//                 FreeCodeCamp, Eloquent <i>Javascript</i> and Prework) to be in a
//                 position to approach the camp full steam ahead.
//               </p>

//               <p>
//                 The first week has given me all the emotions that I've expected.
//                 Excitement, nervousness, anxiousness, and a sense of purpose
//                 knowing I'm on the right track. I've enjoyed all of the
//                 headaches and processes of the first week especially with{' '}
//                 <i>Git</i> and <i>GitHub</i>. I know it is not going to be easy,
//                 but I can't wait to build on skills each day. I'm looking
//                 forward to grasping <i>JavaScript</i> as well as continuing
//                 building on my introductory <i>Git</i> skills. Additionally in
//                 talking to mentors in the field, I'm eager to learn more on the{' '}
//                 <i>SQL</i> and Backend side of the entire stack. Let the fun
//                 begin!
//               </p>

//               <p>
//                 {' '}
//                 I will continue to add to this page frequently so be on the
//                 lookout for more content ahead!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
