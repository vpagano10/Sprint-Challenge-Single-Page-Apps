import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rick-api.herokuapp.com/api/')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log('Data not found', error)
      });
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      <div>
        {data.map(dat => {
          return (
            <div key={data.id}>

            </div>
          )
        })}
      </div>
    </section>
  );
}
