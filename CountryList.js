import React from 'react';
import Country from '../components/Country';
// import './countrylist.css';
const CountryList = ({stats}) =>{
    return(
        <div className='countrylist'>
            {
             stats.map(country =><Country key={country.Country} stats={country}/>)
            }
        </div>
    )
}
export default CountryList;