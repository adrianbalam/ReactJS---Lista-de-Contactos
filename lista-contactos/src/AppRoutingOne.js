import {BrowserRouter as Router,Route,Routes, Link, Navigate} from 'react-router-dom';
/**Importacion de las vistas */
import HomePage from './Pages/home/homePage';
import PageNotFound from './Pages/404/PageNotFound';
import AboutPage from './Pages/About/FAQs/AboutPage';
import DetallesContacto from './Pages/details/detallesContacto';
import Fetch from './Components/Pure/fetch';
import Axios from './Components/Pure/axios';
import Chuck from './Components/Pure/Chuck';

function AppRoutingOne() {

  const logged = false;
  const contacts = [
    {
      id: 1,
      name: "Persona 1",
      desc: "Descripción"
    },
    {
      id: 2,
      name: "Persona 2",
      desc: "Descripción"
    }
  ]

  return (
    <Router>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/faqs"}>FAQs</Link>
        <Link to={"/fetch"}>Fetch</Link>
        <Link to={"/axios"}>Axios</Link>
        <Link to={"/chuck"}>Chuck</Link>
        <Link to={"/aaa"}>404</Link>
        <Link to={"/contacts/1"} state={contacts[0]}>Contacto 1</Link>
      </div>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path="/about" element={
          logged?(<AboutPage/>):(<Navigate replace to={"/"} />)
        } />
        <Route path='/contacts/:id' Component={DetallesContacto}/>
        <Route path='/faqs' Component={AboutPage} />
        <Route path='/fetch' Component={Fetch}/>
        <Route path='/axios' Component={Axios}/>
        <Route path='/chuck' Component={Chuck}/>
        <Route path='*' Component={PageNotFound}/>
      </Routes>
    </Router>
  );
}

export default AppRoutingOne;
