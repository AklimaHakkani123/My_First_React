import React from "react";
import Menu from "../component/Menu";
import { useParams } from "react-router-dom";

const Productpage = () => {
  let { id, name } = useParams();
  return (
    <div>
      <Menu />
      <p>Id={id}</p>
      <p>Name={name}</p>
      <h1>This is Product Page</h1>
    </div>
  );
};

export default Productpage;
