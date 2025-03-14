import icon from '../assets/react-16-svgrepo-com.svg'

function Header() {
  return (
    <header className='app-header'>
      <img src={icon} alt='React logo' />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
