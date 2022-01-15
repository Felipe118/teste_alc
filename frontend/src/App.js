import {BrowserRouter as Router,Routes,element,Route} from 'react-router-dom'

//components

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container'

//page
import Home from './components/page/Home'
import List from './components/page/List'

/* Context */

import {CalcProvider} from './context/CalcContext'

function App() {
  return (
    <Router>
      <CalcProvider>
     <Navbar/>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/list" element={<List/>}/>
          </Routes>
          </Container>
        <Footer/>
        </CalcProvider>
      </Router>
    
  );
}

export default App;
