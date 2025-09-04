import Link from 'next/link';


const Header = () => {


  return (
    <header className='hidden md:flex justify-between items-center py-4 px-8 bg-red-400 shadow-md'>
      <div className='logo'>
        <link href='/' className='text-2xl font-bold text-amber-300'>
        </link>
      </div>

      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;