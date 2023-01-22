import './App.css'
import Sidebar from './components/sidebar/Sidebar';
import MainDash from './components/mainDash/MainDash';
import RightSide from './components/rightSide/RightSide';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <Sidebar/>
          <MainDash/>
          <RightSide/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;

