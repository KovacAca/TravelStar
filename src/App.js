import { React, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Detalji from './pages/Detalji ';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Putovanja from './pages/Putovanja';


const App = () => {

  const [location, setLocation] = useState('/');
  const [putovanja, setPutovanja] = useState([
    {
      destinacija: 'Dominikana',
      naslov: 'Predivno mesto za odmor sa umirujucim vibracijama...',
      opis: 'Dominikana je ostrvo u Pacifiku poznato po svojim plazama, mestima za odmor i cigarama...',
      img: 'dominikana.jpg',
      datumPolaska: '2023-10-05',
      cena: 2500,
      ocena: 5
    },
    {
      destinacija: 'Engleska',
      naslov: 'Predivan spoj istorije i kulture',
      opis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima provident assumenda dolorum molestiae.',
      img: 'engleska.jpg',
      datumPolaska: '2023-05-25',
      cena: 750,
      ocena: 4
    },
    {
      destinacija: 'Indonezija',
      naslov: 'Predivno mesto za odmor sa umirujucim vibracijama...',
      opis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, accusantium.',
      img: 'indonezija.jpg',
      datumPolaska: '2023-09-25',
      cena: 1800,
      ocena: 5
    },
    {
      destinacija: 'Italija',
      naslov: 'Predivno mesto za odmor sa umirujucim vibracijama...',
      opis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dignissimos numquam dolorem.',
      img: 'italija.jpg',
      datumPolaska: '2023-03-18',
      cena: 450,
      ocena: 4
    },
    {
      destinacija: 'Maldivi',
      naslov: 'Predivno mesto za odmor sa umirujucim vibracijama...',
      opis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ex fuga amet.',
      img: 'maldivi.jpg',
      datumPolaska: '2023-07-05',
      cena: 2000,
      ocena: 5
    },
    {
      destinacija: 'Dubai',
      naslov: 'Predivno mesto za odmor sa umirujucim vibracijama...',
      opis: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, facere ad!',
      img: 'uae.jpg',
      datumPolaska: '2023-11-16',
      cena: 2500,
      ocena: 3
    }
  ])

  return (
    <BrowserRouter>
      <div className="App">
          <Navbar location={location} />
        <Routes>
          <Route path='/' element={<Home setLocation={setLocation} />} />
          <Route path='/putovanja' element={<Putovanja setLocation={setLocation} putovanja={putovanja} />} />
          <Route path='/detalji' element={<Detalji setLocation={setLocation} putovanja={putovanja} setPutovanja={setPutovanja}/>} >
            <Route path=':singleId' element={<Detalji />} />
          </Route>
          <Route path='/dashboard' element={<Dashboard setLocation={setLocation} putovanja={putovanja} setPutovanja={setPutovanja}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
