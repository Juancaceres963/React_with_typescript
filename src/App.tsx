import {useState} from 'react';
import './App.css';

function App() {
  const [subs, setSubs] = useState ([
    {
      nick: 'dapelu',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=dapelu',
      descrption: 'Dapelu hace moderador a veces'
    },
    {
      nick: 'sergio_serrano',
      subMonths: 7,
      avatar: 'https://i.pravatar.cc/150?u=sergio_serrano'
    }
  ])

  return (
    <div className="App">
      <h1>Hola Juan</h1>
      <ul>
        {
          subs.map(sub => {
            return (
              <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avatar for ${sub.nick}`}/>
                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                <p>{sub.descrption?.substring(0, 100)}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
