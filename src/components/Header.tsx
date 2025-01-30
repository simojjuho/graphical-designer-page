const Header = () => {
  return (
    <div className='
      h-12 my-5 fixed min-w-full
      flex flex-row justify-around items-center
      '>
      <div className='font-bold text-xl flex flex-row items-center gap-5'>
        <img className="size-14" src="./src/assets/icons8-logo.svg"/>
        <h1>LOGO</h1>
      </div>
      <ul className='flex flex-row gap-2 uppercase text-sm'>
        <li><a href="#home">home</a></li>
        <li><a href="#info">info</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
      </ul>
    </div>
  )
}

Header.propTypes = {

}

export default Header
