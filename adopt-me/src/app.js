import React from "react";
import { render } from "react-dom"; //importing just render from react dom
import Pet from "./Pet";
import SearchParams from "./SearchParams";

//section 1
//your code is going to go here FOR NOW
// const App = () => { //function
// 	//we created a component called app, and everytime it returns it does create element
// 	//stamp:we created our own stamp called app: stamp by itself isn't useful. we just created the stamp. it allows you to stamp it as much time as we want.
// 	//create element will stamp div, {} and react create element.
// 	//it returns the mark up.
// 	return React.createElement( //three arguments
// 		"div", //what kind of element is it?
// 		{}, //attributes I want to give to dom element, here div. such as {id:"something"}

// 		React.createElement("h1", {}, "Adopt me")//children I want to pass into the element.
// 		//so it becomes like
// 		//<div id="Something"><h1>Adopt me</h1> </div>
// 		//taking a component and render
// 		)
// 	// it can be like
// 	// return React.createElement("div", {id:"something-important"}, [
// 	// 	React.createElement("h1", {}, "Adopt Me"),
// 	// 	React.createElement("h1", {}, "Adopt Me")]);
// };

/////////////////////////////////////////////////////
//section2
// const App = () => {
//   return React.createElement(
//     "div",
//     { id: "something-important" },

//     [
//       React.createElement("h1", {}, "Adopt Me"),
//       // //I stamp the rubber stamp three times
//       // React.createElement(Pet, {}, []),  //optional to put empty
//       // React.createElement(Pet),
//       //I want to make it more flexible, new name, new breed...so we pass information into pet component
//       React.createElement(Pet, {
//         name: "luna",
//         animal: "dog",
//         breed: "havana",
//       }),
//       React.createElement(Pet, {
//         name: "pepper",
//         animal: "bird",
//         breed: "cocktail",
//       }),
//       React.createElement(Pet, { name: "brad", animal: "cat", breed: "mixed" }),

//       //components are inheriently useful. I stamp the pet three times
//     ]
//   );
// };

// //we render this stamp.
// // ReactDOM.render
// render(
//   //overwrites not rendered
//   React.createElement(App), //composite element // what we render, this will stamp our app
//   document.getElementById("root")
// ); //where we render

//Understanding tools going along with react
//npm init -y: this will create a new project for us
//this will create package.json:
//it shows dependencies

//npm install -D prettier  : for local environment, for standarize format. everybody uses that format
//now prettier is in depnedencies
//npm run test: runs test script in package.json
//npm run format to check what files are using

//prettier:space? return here? mechanical, how is it formated, but it doesn't care what code does as long as it parses
//eslint code: does this var exist? are we using the right method here? it's concerned with style, accessible friendly?

//package lock json: the versions you will use in production.
//parcel->point to index.html and it figures out for you

//because we are using parcel we can use this library called jsx

//section 3 using jsx
const App = () => {
  return (
    <div>
      <h1 id="something-important">adopt me</h1>
      <Pet name="Luna" animal="dog" breed="havanese" />
      <Pet name="pepper" animal="bird" breed="cock" />
      <Pet name="llol" animal="cat" breed="mixed" />
      <SearchParams />
    </div>
  );
};

render(
  <App />,
  //overwrites not rendered
  //React.createElement(App), //composite element // what we render, this will stamp our app
  document.getElementById("root")
);

//what is hooks?
