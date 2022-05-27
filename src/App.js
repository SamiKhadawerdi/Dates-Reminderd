import './index.css';
import { Per } from "./Data"
import DateCount from "./Componant/DateCount";
import DateList from "./Componant/DateList";
import Action from './Componant/Action';
import { Container } from 'react-bootstrap';
import React,{ useState } from 'react';
function App() {
  const [presondata, setpersondata] = useState(Per)
  const onDelet=()=>{
    setpersondata([])
  }
  const Show=()=>{
    setpersondata(Per)
  }
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DateCount Person={presondata} />
        <DateList Person={presondata}/>
        <Action Delet={onDelet} Show={Show}></Action>
      </Container>
    </div>
  );
}

export default App;
