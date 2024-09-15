import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Accounts from './pages/Accounts';
import Settings from './pages/Settings';
import Subscriptions from './pages/Subscriptions';
import Layout from './layout/Layout';
import MovieListPage from './components/MovieBoxPicked';
import SplitItPage from './pages/SplitItPage';

function App() {
  return (
    <div className='font-bold text-white w-full bg-black bg-opacity-90 overflow-x-hidden'>
      <BrowserRouter>
        <Routes>
          {/* Use Layout to wrap all the pages that should include the header and footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/settings" element={<Settings />} />
            <Route path='/clickedmoviebox' element={<MovieListPage/>}/>
            <Route path='/splitnpay' element={<SplitItPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
