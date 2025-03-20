import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Topics from './components/Topics';
import LanguageDetails from './components/LanguageDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Topics />
        <LanguageDetails />
      </main>
      <Footer />
    </div>
  );
}

export default App;