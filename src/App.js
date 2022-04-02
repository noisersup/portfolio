import './App.css';
import Title from './sections/Title/Title.js';
import About from './sections/About/About.js';
import Projects from './sections/Projects/Projects.js';
import Contact from './sections/Contact/Contact.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		  <Title />
		  <About />
		  <Projects />
		  <Contact />
      </header>
    </div>
  );
}

export default App;
