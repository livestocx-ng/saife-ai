import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import TrustBar from './components/sections/TrustBar';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import Features from './components/sections/Features';
import Traction from './components/sections/Traction';
import WhoWeProtect from './components/sections/WhoWeProtect';
import Roadmap from './components/sections/Roadmap';
import Testimonials from './components/sections/Testimonials';
import Partners from './components/sections/Partners';
import DualCTA from './components/sections/DualCTA';

function App() {
    return (
        <div className="App overflow-x-hidden w-full">
            <Header />
            <main className="overflow-x-hidden w-full">
                <Hero />
                <TrustBar />
                <Problem />
                <Solution />
                <Features />
                <Traction />
                <WhoWeProtect />
                <Roadmap />
                <Testimonials />
                <Partners />
                <DualCTA />
            </main>
            <Footer />
        </div>
    );
}

export default App;

