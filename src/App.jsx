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
// import React, { useState } from "react";

// const App = () => {
//   const [list, setList] = useState([]);
//   const [item, setItem] = useState("");
//   const addToList = () => {
//     if (item.trim !== "") {
//       setList([...list, item]);
//       setItem("");
//     }
//   };
//   const RemoveItem = () => {};
//   return (
//     <div>
//       <table>
//         <tbody>
//           {item.length !== 0 ? (
//             list.map((element, i) => (
//               <tr key={i}>
//                 <td>{element}</td>
//                 <td>
//                   <button>Remove</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={2}> no items found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       <input
//         onChange={(e) => setItem(e.target.value)}
//         type="text"
//         placeholder="Item"
//       />
//       <button onClick={addToList}>Add</button>
//     </div>
//   );
// };

// export default App;
// import React, { useState } from "react";

// const App = () => {
//   let [FormObj, setFormObj] = useState({
//     fName: "",
//     lName: "",
//     city: "",
//     gender: "Male",
//   });
//   const changeHandler = (property, value) => {
//     setFormObj((preObj) => ({
//       ...preObj,
//       [property]: value,
//     }));
//   };
//   const formSubmit = (e) => {
//     e.preventDefault();
//     alert(JSON.stringify(FormObj));
//   };
//   return (
//     <div className="container">
//       <form onSubmit={formSubmit}>
//         <input
//           onChange={(e) => {
//             changeHandler("fName", e.target.value);
//           }}
//           value={FormObj.fName}
//           type="text"
//           placeholder="First name"
//         />
//         <br /> <br />
//         <input
//           onChange={(e) => {
//             changeHandler("lName", e.target.value);
//           }}
//           value={FormObj.lName}
//           type="text"
//           placeholder="last name"
//         />
//         <br /> <br />
//         <select
//           onChange={(e) => {
//             changeHandler("city", e.target.value);
//           }}
//           value={FormObj.city}
//         >
//           <option value="">Choose City</option>
//           <option value="Dhaka">Dhaka</option>
//           <option value="Rangpur">Rangpur</option>
//         </select>
//         <br /> <br />
//         <input
//           onChange={() => {
//             changeHandler("gender", "Male");
//           }}
//           checked={FormObj.gender === "Male"}
//           type="radio"
//           name="gender"
//         />
//         Male
//         <input
//           onChange={() => {
//             changeHandler("gender", "Female");
//           }}
//           checked={FormObj.gender === "Female"}
//           type="radio"
//           name="gender"
//         />
//         Female
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;
// import React, { useEffect } from "react";

// const App = () => {
//   useEffect(() => {
//     console.log("hello");
//   }, []);
//   return <div></div>;
// };

// export default App;
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [data, setData] = useState();
//   useEffect(() => {
//     fetch("https://dummyjson.com/products/1")
//       .then((res) => res.json())
//       .then((json) => setData(json));
//   }, []);

//   return <div>{JSON.stringify(data)}</div>;
// };

// export default App;
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [data, setData] = useState();
//   useEffect(() => {
//     (async () => {
//       let response = await fetch("https://dummyjson.com/products/1");
//       let json = await response.json();
//       setData(json);
//     })();
//   });
//   return <div>{JSON.stringify(data)}</div>;
// };

// export default App;
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import Profilepage from "./pages/Profilepage";
import Notfoundpage from "./pages/Notfoundpage";
import LogOutPage from "./pages/LogOutPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Product" element={<Productpage />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/logut" element={<LogOutPage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
