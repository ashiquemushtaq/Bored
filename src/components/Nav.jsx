import './style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const Nav = ()=> {
    return(
        <nav>
            <h1 className='logo'>Bored?</h1>
            <a
            href="https://github.com/ashiquemushtaq"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#52FFA8" />
          </a>
        </nav>
    )
}
export default Nav;