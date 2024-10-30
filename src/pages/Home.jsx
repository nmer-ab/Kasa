// Importations
import homeBanner from '../assets/home-banner.jpg'  // Importe l'image de la bannière
import Banner from '../components/Banner'           // Importe le composant Banner
import Gallery from '../components/Gallery'         // Importe le composant Gallery
import Loader from '../components/Loader'           // Importe le composant Loader
import accommodationsData from '../data/logements.json' // Importe les données des logements
import { useFetchData } from '../hooks/useFetchData'   // Importe le hook personnalisé
import './Home.scss'                               // Importe les styles SCSS

/**
 * Composant Home - Page d'accueil
 * Ce composant représente la page d'accueil d'une application de location de logements,
 *  avec une mise en page responsive et une gestion appropriée des états de chargement.
 */
export default function Home() {
    // Utilise le hook useFetchData pour gérer le chargement des données
    const { isLoading, data } = useFetchData(accommodationsData)

    return (
        // Conteneur principal avec classes pour le style
        <main className="content container">
            {/* Composant Banner avec titre et image */}
            <Banner 
                title="Chez vous, partout et ailleurs" 
                image={homeBanner} 
            />

            {/* Section des logements */}
            <section className="logements">
                {/* Titre invisible pour l'accessibilité */}
                <h2 className="sr-only">Liste de logements</h2>

                {/* Gestion conditionnelle de l'affichage */}
                {isLoading ? (
                    // Affiche le loader pendant le chargement
                    <Loader />
                ) : !data ? (
                    // Message si pas de données
                    <div>Pas de données disponibles</div>
                ) : (
                    // Affiche la galerie avec les données
                    <Gallery accommodations={data} />
                )}
            </section>
        </main>
    )
}
