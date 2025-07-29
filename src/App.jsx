// import { useRef } from "react";

// const App = () => {
//   const ApiData = useRef(null);
//   const myPtag = useRef();
//   const fetchApi = async () => {
//     const response = await fetch("https://dummyjson.com/products");
//     ApiData.current = await response.json();
//   };
//   const showData = () => {
//     myPtag.current.innerText = JSON.stringify(ApiData.current);
//   };
//   return (
//     <div>
//       <p ref={myPtag}></p>
//       <button onClick={fetchApi}>FetchApi</button>
//       <button onClick={showData}>ShowData</button>
//     </div>
//   );
// };

// export default App;
//use State Practice:1(number increase and decrease)
// import React, { useState } from "react";

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const increaseNumber = () => {
//     setNumber(number + 1);
//   };
//   const decreaseNumber = () => {
//     setNumber(number - 1);
//   };
//   const initialNumber = () => {
//     setNumber(0);
//   };
//   return (
//     <div>
//       <h1>Number:{number}</h1>
//       <button onClick={increaseNumber}>increase</button>
//       <button onClick={decreaseNumber}>decrease</button>
//       <button onClick={initialNumber}>initial</button>
//     </div>
//   );
// };

// export default App;
//use State Practice:2(value change)
// import React, { useState } from "react";

// const App = () => {
//   const [myObj, setmyObj] = useState({
//     name: "Hima",
//     roll: 23,
//     city: "Dhaka",
//   });
//   const change = () => {
//     setmyObj((preObj) => ({
//       preObj,
//       name: "my name is Hima",
//     }));
//   };
//   return (
//     <div>
//       <h1>{myObj.name}</h1>
//       <button onClick={change}>click</button>
//     </div>
//   );
// };

// export default App;
//use State Practice:3(to do list)
