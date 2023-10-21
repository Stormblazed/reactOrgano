import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';

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
    </div>
  );
}

export default App;
