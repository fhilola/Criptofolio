import './App.scss';
import RouteController from './routes/routes'
import Navbar from './layout/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RouteController/>
    </div>
  );
}

export default App;
