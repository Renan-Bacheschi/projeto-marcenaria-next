import Link from 'next/link';


const Header = () => {


  return (
    <header className='hidden md:flex justify-between items-center py-4 px-8 bg-red-400 shadow-md border-2'>
      <div className='logo'>
        <link href='/' className='text-2xl font-bold  text-amber-300'>
        </link>
      </div>

      <nav>
        <ul className='flex items-center space-x-8 border-2'>
          <li>Projetos</li>
          <li>Contato</li>
          <li>Sobre Nós</li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;