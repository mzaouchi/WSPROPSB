import './App.css';
import Italia from './Components/Italia';

function App() {
  var name = "Tarek"
  var num = 99
  var pays = ["Spain","Turkey","Greece","Coratia","Tunisia"]
  var user = {
    userName : "Fedi",
     age : 80,
     track : "FullStack JS",
     city : {
      town : "Laouina",
      cp : 7777
     }
  }

  const handleHello=()=> alert('Bonjour')
  const handleHi=(a)=> alert(`Hi ${a}`)

  const show = false
  return (
    <div>
        <h1>Workshop PROPS</h1>
       
        <Italia name={name} num={num} pays={pays} user={user} handleHello={handleHello} handleHi={handleHi} show={show}>
            <div>
              <h1>Contenu HTML</h1>
              <img src='logo192.png' alt='Not Found'/>
              <h3>Test passage Elements HTML par PROPS</h3>
            </div>          
        </Italia>  

    </div>
        
  );
}

export default App;
