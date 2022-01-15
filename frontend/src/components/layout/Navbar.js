import { Link } from "react-router-dom"

//css
import styles from "./Navbar.module.css"

import Logo from "../../assets/img/alc-logo-p.png"

function Navbar() {
    return (
        
            <nav className={styles.navbar}>
                <div>
                    <img className={styles.logo} src={Logo} alt="ALC"></img>
                </div>
               <ul>
                   <li>
                       <Link to='/'>Home</Link>
                    </li>
                   <li>
                       <Link to='/list'>Listar</Link>
                   </li>
               </ul>

            </nav>
        
    )
}

export default Navbar