import React from "react";
// const Pet = () => {
// 	return React.createElement("div", {}, [
// 			React.createElement("h1", {}, "norange"),
// 			React.createElement("h2", {}, "Dog"),
// 			React.createElement("h2", {}, "Akita"),
// 		]);
// };
//making it more flexible
//I pass in parameter, props
// const Pet = (props) => {
// 	return React.createElement("div", {}, [
// 			React.createElement("h1", {}, "props.name"),
// 			React.createElement("h2", {}, "props.animal"),
// 			React.createElement("h2", {}, "props.breed"),
// 		]);
// };
//I can do it destructure way too.
export default function Pet({ name, animal, breed }) {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h2", {}, animal),
  //     React.createElement("h2", {}, breed),
  //   ]);

  //we are writing javascript to make a makrup. we have to think about html and we want and need to translate to js.
  //jsx removes this translation part
  //the below code is translated the code above

  //{} means its a javascript expression, expression is anything that's in the right side
  //statement is a whole idea, one line. but the right side itself is an expression.
  //so I can do {name.toUpperCase()} but can't do things like if, for
  return (
    <div>
      <h1>{name.toUpperCase()}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
