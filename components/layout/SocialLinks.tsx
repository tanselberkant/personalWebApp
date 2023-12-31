import React from 'react';

const SocialLinks = () => {
  return (
    <>
      <div className="my-10 w-[95%] border-t-2 border-light-secondary dark:border-dark-secondary"></div>
      <div className="flex-row space-y-8 text-light-textDescription dark:text-dark-textDescription">
        <a
          href="https://github.com/tanselberkant"
          target="_blank"
          rel="noreferrer me"
          className="flex items-center gap-3 hover:text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10,0.3c-5.4,0-9.8,4.4-9.8,9.8c0,4.6,3.2,8.5,7.5,9.5c0-0.1-0.1-0.3-0.1-0.5v-1.7c-0.4,0-1.1,0-1.2,0c-0.7,0-1.3-0.3-1.6-0.8c-0.3-0.6-0.4-1.5-1.2-2.1c-0.2-0.2-0.1-0.4,0.2-0.4c0.5,0.1,0.9,0.5,1.3,1c0.4,0.5,0.6,0.6,1.3,0.6c0.4,0,0.9,0,1.4-0.1c0.3-0.7,0.7-1.3,1.3-1.6c-3.3-0.3-4.8-2-4.8-4.2c0-1,0.4-1.9,1.1-2.7C5.1,6.6,4.8,5,5.4,4.4c1.5,0,2.4,1,2.6,1.2c0.7-0.3,1.5-0.4,2.4-0.4c0.9,0,1.7,0.1,2.4,0.4c0.2-0.3,1.1-1.2,2.6-1.2C16,5,15.7,6.6,15.5,7.4c0.7,0.8,1.1,1.7,1.1,2.6c0,2.2-1.6,3.8-4.8,4.2c0.9,0.5,1.6,1.8,1.6,2.8v2.2c0,0.1,0,0.1,0,0.2c3.8-1.3,6.6-5,6.6-9.3C19.8,4.7,15.4,0.3,10,0.3z"
            ></path>
          </svg>
          GitHub
        </a>
        {/* LINKEDIN */}
        <a
          href="https://linkedin.com/in/tanselberkantoflaz"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 hover:text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.4,1H2.6C1.7,1,1,1.7,1,2.6v14.7C1,18.3,1.7,19,2.6,19h14.7c0.9,0,1.6-0.7,1.6-1.6V2.6C19,1.7,18.3,1,17.4,1z M6.7,15.7H4.3V8h2.4V15.7z M5.5,6.9c-0.8,0-1.4-0.6-1.4-1.4S4.7,4,5.5,4c0.8,0,1.4,0.6,1.4,1.4C6.9,6.2,6.2,6.9,5.5,6.9z M15.7,15.7h-2.4V12c0-0.9,0-2.1-1.3-2.1c-1.3,0-1.4,1-1.4,2v3.8H8.2V8h2.3V9h0c0.3-0.6,1.1-1.3,2.3-1.3c2.4,0,2.9,1.6,2.9,3.7C15.7,11.5,15.7,15.7,15.7,15.7z"
            ></path>
          </svg>
          LinkedIn
        </a>
        {/* EMAIL */}
        <a
          href="mailto:tanselberkant@gmail.com"
          target="_blank"
          rel="noreferrer "
          className="flex items-center gap-3 hover:text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M1.9,2.6c-0.8,0-1.5,0.7-1.5,1.5v11.8c0,0.8,0.7,1.5,1.5,1.5h16.2c0.8,0,1.5-0.7,1.5-1.5V4.1c0-0.8-0.7-1.5-1.5-1.5H19zM3.9,4.1h12.2L10,8.6L3.9,4.1z M2.6,5.9l7.4,5.4l7.4-5.4v10H2.6V5.9z"
            ></path>
          </svg>
          Email
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
