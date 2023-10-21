import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Time from './componentes/Time';

function App() {
  const [collaborators, setCollaborator] = useState([])

  const onNewCollaborator = (collaborator) => {
    setCollaborator([...collaborators, collaborator])
    console.table(collaborators)
  }
  return (
    <div className="App">
      <Banner />
      <Form onCollaborators={item => onNewCollaborator(item)} />
      <Time NameTime="Programação"/>
      <Time NameTime="Front-End"/> 
      <Time NameTime="Data Science"/> 
      <Time NameTime="Devops"/> 
    </div>
  );
}

export default App;

