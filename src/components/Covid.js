import React, { useEffect, useState } from 'react'
import CovidDisplayTable from './CovidDisplayTable';


export default function Covid() {

    const[covidData, setCovidData] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() =>{
        fetch('https://data.covid19india.org/data.json')
        .then((res) =>{
            if(!res.ok)
            {
                throw new Error('There is issue in the api');
            }
            return res.json();
        })
        .then((data) =>{
            console.log(data);
            setCovidData(data.statewise);
            setIsLoading(false);
        })
        .catch((error) =>{
            console.log(error);
        })
    },[])
  return (
    <>
        <h1 style={{textAlign:"center"}}>Covid-19 App</h1>

        {isLoading ? 
        
        <p>Loading..</p> : 
        
        <CovidDisplayTable data={covidData}/>

        }

       
    </>
  )
}
