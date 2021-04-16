import React,{useState,useEffect} from "react";
import PeronsDetails from './person-details'

const Persons = () => {

  const [allPerson,setAllPerons]=useState([])
useEffect(()=>{

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(data=>setAllPerons(data))

},[])


  return (
    <>
     <div class="row">
     {allPerson.map(person=>
<>
<br />

<PeronsDetails 
id={person.id} 
name={person.name} 
email={person.email}
companyName={person.company.name}/>
</>
     )}
     </div>
    </>
  );
};

export default Persons;
