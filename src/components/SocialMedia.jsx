import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        {/* <div>
          <a href='https://x.com/?lang=en'><BsTwitter /></a>
        </div> */}
        <div>
            <a href='https://www.facebook.com/lampathakis.nikos'><FaFacebookF /></a>
        </div>
        <div>
            <a href='https://www.instagram.com/nikos_lampathakis/'><BsInstagram /></a>
        </div>
    </div>
  )
}

export default SocialMedia