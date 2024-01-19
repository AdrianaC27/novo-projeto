import Logo from '../../Imagens/logo.png'
import './Home.css';

function Home() {
    return(
        <header className='header-menu'>
            <img src={Logo} className='img-logo'/> 
            <h1>Oi, me Chamo Adriana!</h1>
            <h2>Sou desenvolvedora</h2>
        </header>
    )
    
}
export default Home;