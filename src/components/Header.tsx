import PropTypes from 'prop-types'

const Header = props => {
  return (
    <div className='
      h-12 my-5 fixed min-w-full
      flex flex-row justify-around
      '>
      <div className=''>LOGO</div>
      <ul className='flex flex-row gap-2 uppercase'>
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
