import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import med from '../images/logo3.png';

const Logo = () => {
    return (
      <div>
        <Link href="/" className="logo flex items-center justify-center mt-2">
          <Image
            src={med}
            alt="logo"
            className="w-16 h-16 absolute bg-dark text-light flex items-center justify-center
          rounded-full text-xl font-bold cursor-pointer border border-solid border-transparent dark:border-light
          "
          />
        </Link>
      </div>
    );
  };
  
  export default Logo;