import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';
import Problem from '../components/sections/Problem';
import Solution from '../components/sections/Solution';
import Features from '../components/sections/Features';
import Traction from '../components/sections/Traction';
import WhoWeProtect from '../components/sections/WhoWeProtect';
import Roadmap from '../components/sections/Roadmap';
import Testimonials from '../components/sections/Testimonials';
import Partners from '../components/sections/Partners';
import DualCTA from '../components/sections/DualCTA';

const Home = () => {
    return (
        <>
            <Hero />
            <Testimonials />
            <TrustBar />
            {/* <Problem /> */}
            <Solution />
            <Features />
            <Traction />
            {/* <WhoWeProtect /> */}
            {/* <Roadmap /> */}
            <Partners />
            <DualCTA />
        </>
    );
};

export default Home;

