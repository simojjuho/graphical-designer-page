import PropTypes from 'prop-types'

const Header = props => {
  return (
    <div className='
      h-12 my-5 absolute min-w-full
      flex flex-row justify-around
      '>
      <div className=''>LOGO</div>
      <ul className='flex flex-row gap-2 uppercase'>
        <li>home</li>
        <li>info</li>
        <li>services</li>
        <li>contact</li>
      </ul>
    </div>
  )
}

Header.propTypes = {

}

export default Header
