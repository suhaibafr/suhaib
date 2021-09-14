import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Fetch = () => {
  const [text, setText] = useState([]);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setText(json);
      });
  }, []);

  let handleSubmit = (event) => {
    event.preventDefault();
  };



  return (
    <div>
       <form onSubmit={handleSubmit}>
            <input type="text" id="filter" placeholder="Search for..." />
         </form>
      {text?.map((item, index) => {
        return (
          <div>
           
          <ul>
            <li><Link to={`/fetch/${item.id}`}> {item.id}Show More </Link></li>
            <li>{item.firstName}</li>
            <li>{item.lastName}</li>
            <li>{item.family}</li>
            <li><img src={item.imageUrl} alt="pic" /></li>
          
           
          </ul>
          </div>
        );
      })}
    </div>
  );
};
export default Fetch;
