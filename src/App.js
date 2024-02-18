import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Head />
      <Body />




      {
        /**
         * Head
         * Body
         *    sidebar
         *       Menu
         *    MainContainer
         *       ButtonList
         *       VideoContainer
         *          videoCard
         * 
         */
      }
    </div>
    </Provider>

  
  );
}

export default App;
