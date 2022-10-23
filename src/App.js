import logo from './logo.svg';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

import RoutesFolder from './Rautes';

function App() {
  return (
    <div className="App">
      <Header/>
          <RoutesFolder/>
           <Footer/>
    </div>
  );
}

export default App;
