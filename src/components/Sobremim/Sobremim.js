import Logo from '../../Imagens/logo.png'
import './Sobremim.css'

function Sobremim() {
    return(
        <header className='header-menu'>
            <img src={Logo} className='img-logo'/> 
            <h1>SOBRE MIM</h1>
            <h3>Estudante Tecnico do curso do Senac, "Técnico de informática para Internet",
                 curso que iniciou em Abril de 2023 com termino previsto para julho de 2024 </h3>
        </header>
    )
    
}
export default Sobremim;