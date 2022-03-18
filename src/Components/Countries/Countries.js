import React, { useEffect, useState } from 'react';
import Country from '../Country/Country.js';

const Countries = () => {

const [countries , setCountries] = useState([])

useEffect(()=>{
     
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))

},[])

    return (
        <div style ={{display:'grid',gridTemplateColumns: ' 500px 500px 500px'}}>
            
         
            
            {console.log(countries) }
            
            {
                countries.map(country => <Country all={country}  ></Country>)
            }



        </div>
    );
};

export default Countries;