import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter(
  //array of paths
  [
    {
      path: "/",
      element: <Body/>,
      children:[
        {
           path:"/",
           element: <MainContainer/>
        },
        {
           path:"/watch",
           element: <WatchPage/>
        },
    ]
    }
  ]
    
  
)

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Head />
      {/* When we give Routerprovider instead of just component it will behave acc to appRouter */}
      <RouterProvider router={appRouter}/>
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
