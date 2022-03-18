// import React from 'react';

const Country = (props) => {

    const {name,capital,population, flags } = props.all
  
    return (
        <div>
            
            <h1>Name:{name.common}</h1>
            <p>Capital:{capital}</p>
            <p>Population:{population}</p>
             <img src={flags.png} alt="" />
  
        </div>
    );
  };
  
  export default Country;