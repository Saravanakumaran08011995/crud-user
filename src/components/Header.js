import Logo from '../assets/user.png'

export const Header = () => {
  return (
    <header className='logo'>
         <div className="logo">
            <img src={Logo} alt="TaskApp Logo" />
            <span>Crud - User </span>
        </div>
    </header>
  )
}
