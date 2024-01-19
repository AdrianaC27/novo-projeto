import Logo from '../../Imagens/logo.png'
import css from '../../Imagens/css.png'
import html from '../../Imagens/html.png'
import js from '../../Imagens/js.png'
import node from '../../Imagens/node.png'
import sql from '../../Imagens/sql.png'
import react from '../../Imagens/react.png'
import './Habilidades.css';

function Habilidades() {
    return(
        <header className='header-menu'>
            <h1>Habilidades</h1>
            <img src={Logo} className='img-logo'/> 
            <img src={react} className='img-react'/>
            <img src={css} className='img-css'/> 
            <img src={html} className='img-html'/> 
            <img src={js} className='img-js'/>
            <img src={node} className='img-node'/>
            <img src={sql} className='img-sql'/>
            
        </header>
    )
    
}
export default Habilidades;