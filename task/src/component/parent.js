import React, { useState } from "react";
import Eachform from "./child";

const FormUI = () => {
  const [data, setData] = useState({
    name: "",
  });
  const [arr, setArr] = useState([]);
  const[count,setCount]=useState(0)

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setArr([...arr, data]);

    setData({ name: "" });
    setCount(count+1)
  };
  return (
    <div className="main">
          <h1>FORM IN REACT JS</h1>
        <div className="flex">
      <form
        className="form"
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
      
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={data.name}
          required
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
        <button>+</button>
      </form>
      </div>
      <div className="tab">
<table>
    <thead>
        <tr><th>Name</th></tr>
    </thead>
    <tbody className="color">
    {arr.map((item) =>( 
    <tr><Eachform item={item} /></tr>))}
    </tbody>
</table>
</div>
      <div className="head">
      <h2>{count}</h2>
      </div>
      
    </div>
  );
};
export default FormUI;
