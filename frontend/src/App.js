import {BrowserRouter as Router,Routes,element,Route, Navigate} from 'react-router-dom'

//components

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container'

//page
import Home from './components/page/Home'
import List from './components/page/List'





function App() {
  return (
    <Router>

     <Navbar/>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/list" element={<List/>}/>
            <Route path="/" element={<Navigate to="/list" />} />
          </Routes>
          </Container>
        <Footer/>
        
      </Router>
    
  );
}

export default App;
