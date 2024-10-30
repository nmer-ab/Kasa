import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

/**
 * The main layout component for the app.
 * Import de Outlet depuis react-router-dom (permet d'afficher les composants enfants des routes).
 * <>...</> : Fragment React (un conteneur invisible).
 * <Outlet /> : Emplacement où seront rendus les composants enfants des routes.
 * C'est un modèle de layout classique où Header et Footer restent constants tandis que
 *  le contenu principal change en fonction de la route active.
 * 
 *
 * @returns {JSX.Element} The JSX element for the layout.
 */
export default function App() {
    return (
        <>
            <Header />
            <Outlet /> 
            <Footer />
        </>
    )
}
