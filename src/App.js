import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateConcept from './component/statesConcept'
import HooksConcept from './component/hooksConcept'
import data from './data/data.json'
import profile from './person.svg'
import profile1 from './man.svg'
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from './Resume';




function App() {
  console.log(data);
  return (
    <div>
      <header className="header">resumes</header>
      <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route  exact path="/resume" component={Resume} />
      </BrowserRouter>
    </div>
    )
  }

  let Home=()=>{
    return(
      <section className="parent">
      {data.profiles.map((value,index)=>(
        
        <article className="child">
          <h2> {value.basics.name} </h2>
          <h4><em>{value.basics.role}</em></h4><hr />
          <a href={"mailto:"+value.basics.emial}>{value.basics.email}</a><br /><hr />
          <a href={"tel:"+value.basics.phone}>{value.basics.phone}</a><br /><hr/>
          <p>{value.basics.address}</p>
          <Link className="btn" to={{pathname:"/resume",info:{id:index}}}>  View profile </Link>
        </article>
      
      ))}
     </section> 
      
    )
  }
   
export default App;
