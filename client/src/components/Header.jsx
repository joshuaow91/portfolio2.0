import React, { useState, useEffect } from 'react';

function Header() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrollingUp(currentScrollTop < lastScrollTop);
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <header
      style={{ transform: isScrollingUp ? 'translateY(0)' : 'translateY(calc(-100% - 16px))' }}
      className={`fixed top-4 left-52 w-3/4 rounded-full bg-background  py-3 px-16 flex items-center justify-between transition-all duration-300`}
    >
        <h1 className='font-bold text-2xl  text-zinc-400'>joshuaow<span className='text-rose-600 text-4xl'>.</span></h1>
      <nav>
        {/* Replace with your navigation */}
        <ul className="flex space-x-4 text-zinc-500 ">
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;