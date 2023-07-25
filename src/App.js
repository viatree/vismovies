
import './App.css';
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'
import Trending from './components/Trending'
import Superhero from './components/Superhero';
import './style/landingpage.css'
function App() {
  return (
   <div>
    {/* Intro section */ }
    <div className='myBG'>
    <NavigationBar></NavigationBar>
    <Intro></Intro>
    </div>
    {/* End Intro section */ }

    <div className='trending'>
<Trending/>
</div>
  <div className='superhero'>
  <Superhero/>
   </div></div>
  )
}
export default App;
