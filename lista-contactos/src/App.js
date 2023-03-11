import './App.css';
import ContactsList from './Components/Containers/contacts-list';
import Square from './Components/Pure/Square';
import RegisterFormik from './Components/Pure/RegisterFormik';

function App() {
  return (
    <div className="App m-5">
      <ContactsList></ContactsList>
      {/*<Square></Square>*/}
      {/*<RegisterFormik></RegisterFormik>*/}
    </div>
  );
}

export default App;
