import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='reader_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/alexanderkarsakov/article_reader", "_blank")
          }
          className='black_btn'
        >
          GitHub Repo
        </button>
      </nav>

      <h1 className='head_text'>
        Simplify Research using <br className='max-md:hidden' />
        <span className='orange_gradient '>Artificial Intelligence</span>
      </h1>
      <h2 className='desc'>
        Streamline your reading experience using ReadArt, an open-source article research AI tool designed to summarise long academic and financial articles 
      </h2>
    </header>
  );
};

export default Hero;