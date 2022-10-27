import Header from "./app-components/Header.js";
import Main from "./app-components/Main.js";
import Footer from "./app-components/Footer.js";

import './styles/App.scss';

const App = () => {
  return (
    <div className="App">
      <div className='outer-container'>
        <div className='inner-container'>
          <div className="inner-content">
            <Header />
            <Main />
            <Footer />
          </div>
        </div>
        <div className="upper-triangle"></div>
        <div className="lower-triangle"></div>
      </div>
    </div>
  );
}

export default App;
