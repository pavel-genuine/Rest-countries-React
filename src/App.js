import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Countries from './Components/Countries/Countries.js';

// import React, { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

      <Business title='Ecommerce' owner='Mr.X' detail='xyz'></Business>
      <Business title='App Building' owner='Mr.Y' detail='xyz'></Business>
      <Countries></Countries>
      
    </div>
  );
}


function Business(props){

  const [profit, setProfit ] = useState(0)


  function boostProfit(){

    const newProfit = profit+5 

    setProfit(newProfit)


  }

  // const design ={
  //   backgroundColor:'gray',
  //   border: '4px solid black',
  //   padding : '4px',
  //   margin : '100px'
  // }

  return (
    <div style={{
      backgroundColor:'gray',
      border: '4px solid red',
      padding : '4px',
      margin : '100px'
    }}>
      <h1>{props.title}</h1>
      <p>{props.owner}</p>
      <p>{props.detail}</p>
      <p>Profitability: {profit} </p>
      <button onClick={boostProfit}>Boost Profit</button>
    </div>
  )

}



// import Country from '../Country/Country';

// const Countries = () => {

// const [countries , setCountries] = useState([])

// useEffect(()=>{
     
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountries(data))

// },[])



//     return (
//         <div style ={{display:'grid',gridTemplateColumns: ' 500px 500px 500px'}}>
            
            
            
//             {console.log(countries) }
            
//             {
//                 countries.map(country => <Country all={country}  ></Country>)
//             }
//             {/* {
//                 countries.map(country => <Country name={country.name.common} capital={country.capital} population={country.population} flags={country.flags.png}  ></Country>)
//             } */}



//         </div>
//     );
// };

// // import React from 'react';

// const Country = (props) => {

//   const {name,capital,population, flags } = props.all

//   return (
//       <div>
          
//           <h1>Name:{name.common}</h1>
//           <p>Capital:{capital}</p>
//           <p>Population:{population}</p>
//            <img src={flags.png} alt="" />

//       </div>
//   );
// };

// // export default Country;

export default App;
