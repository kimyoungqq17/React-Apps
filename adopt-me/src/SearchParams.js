import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
//we didnt install this pet but parsel can say hey that's in npm library, parsel does this for you.
//you can see in packages.json:it's been installed.

const SearchParams = () => {
  //   const location = "Seattle, WA";
  const [location, setLocation] = useState("Seattle, WA"); //seattle is the default state
  //it renders searchparams constantly so shouldnt be extreeme.
  //this is called the hook: useState creates the hook. when you get back hook you get the array. first one current location
  //and second one is the function that updates the first thing.
  //all hooks begtin with use. such as useState, useEffect

  //hooks never go into if or for loop because they'll mess up the order
  //always use "use" when naming hook

  const [animal, setAnimal] = useState("Dog");
  const [breed, setBreed] = useState("");
  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)} //event handler: takes an event, and use setLocation ...but I'm not sure where setLocationFunction is
          />
        </label>
        <label htmlFor="animal">
          animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((animal) => (
              <option value={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          breed
          <select
            id="breed"
            value={breed}
            onChnge={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          ></select>
        </label>

        <button>submit</button>
      </form>
    </div>
  );
};
//with arrow functions we can do implicit return, i have no curly braces then implicit return

//renders searchparams, location is the current state. and set location is the update of the state. everytime user inputs, on change occurs
//event represents the input and setLocation will be run with the input. and then update the state.
//now when rendered location is updated
export default SearchParams;

//class is reserved in javascript so can't say <div class="Search"> so we use className instead. same for words like for if...
//everytime something changes, it renders searchParam.
//
