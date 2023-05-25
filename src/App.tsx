import {useEffect, useState} from 'react';
import List from './components/List';
import Form from './components/Form';
import {Sub} from './components/types';
import './App.css';

const INITIAL_STATE = [
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
]

interface AppState {
  subs: Sub[]
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  return (
    <div className="App">
      <h1>Hola Juan</h1>
      <List subs={subs}/>
      <Form onNewSub={setSubs}/>
    </div>
  );
}

export default App;
