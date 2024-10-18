import React from 'react';

// import icons
import {
  ImLinkedin,
  ImGithub
} from 'react-icons/im';

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href="https://www.linkedin.com/in/ryanxyong/">
          <ImLinkedin />
        </a>
      </li>

      <li>
        <a href="https://github.com/ryanxyong">
          <ImGithub />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
