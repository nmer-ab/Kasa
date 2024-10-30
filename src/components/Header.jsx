import links from '../data/mainNav.json'
import PropTypes from 'prop-types'/*la bibliothèque prop-types, qui est utilisée
 pour définir des types de propriétés pour les composants React. Cela permet de valider les
 props passées aux composants et d'assurer qu'elles sont du bon type.*/
import { NavLink } from 'react-router-dom'
import './Header.scss'
import Logo from './Logo'//appelé Logo
import Nav from './Nav'

/**
 * composant représente l'en-tête de l'application et décrit les paramètres 
 * qu'il prend ainsi que ce qu'il retourne.
 *
 * @param {Object[]} links - The links to display in the header.
 * @returns {JSX.Element} The header component.
 */
export default function Header() {
    return (
        <header className="header container">
            <NavLink
                className="header__logo"
                to="/"
                aria-label="Revenir à l'accueil"
            >
                <Logo label="Logo Kasa" />
            </NavLink>
            <Nav links={links} />
        </header>
    )
}

// PropTypes definition
Header.propTypes = {
    links: PropTypes.objectOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            ariaLabel: PropTypes.string.isRequired,
        })
    ),
}
