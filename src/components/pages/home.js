import Header from "../header";
import MintCover from '../mint'
import Cover from '../cover'
import Footer from '../footer';
import FaqSection from '../faq';
import TeamSection from '../team';
import Gallery from '../gallery';
import AboutUs from '../about_us';
import Artist from '../artist';
import RoadMap from '../roadmap';

function App() {
    return (
        <>
            <Header />
            <Cover />
            <AboutUs />
            <Artist />
            <RoadMap />
            <Gallery />
            <TeamSection />
            <FaqSection />
            <Footer />
        </>
    )
}
export default App;