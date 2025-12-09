import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AnalyticsPage from './pages/AnalyticsPage';

function App() {
    return (
        <Router>
            <div className="App overflow-x-hidden w-full">
                <Header />
                <main className="overflow-x-hidden w-full">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/analytics" element={<AnalyticsPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

