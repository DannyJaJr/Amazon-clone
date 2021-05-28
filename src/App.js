
import './App.css';
import Profile from './components/Profile'

function App() {
   const otherProfile = {
     name: "Alex",
     email: "rogo@gmam"
   }




  return (
    <div className="App">
      <h1>Amazon</h1>
      <Profile  other={otherProfile} />
    
    </div>
  );
}

export default App;
