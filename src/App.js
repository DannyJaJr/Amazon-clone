import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './App.css';
import Profile from './components/Profile';
import WishList from './components/WishList'

function App() {
   const otherProfile = {
     name: "Alex",
     email: "rogo@gmam"
   }

   const wichList = ['90 in TV', 'Spiderman Comick Book', 'Lucky charms']


  return (
    <Router>
       <div className="App">
      <h1>Amazon</h1>
      <Profile  other={otherProfile} />
      <Route path="/profile" render={(props) => <Profile {...props} other={otherProfile} />  } />
      <Route path="/wishlist" render={(props) => <WishList {...props} list={wishList} /> } />
      </div>
  
    </Router>

   
  
  );
} 

export default App;
