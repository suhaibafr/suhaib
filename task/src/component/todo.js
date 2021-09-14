import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Todo = () => {
  const [text, setText] = useState("");
  let { id } = useParams();
  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setText(json);
      });
  }, [id]);
  return (
    <>
     <ul>
       <li>{text.firstName}</li>
       <li>{text.lastName}</li>
       <li>{text.fullName}</li>
       <li>{text.title}</li>
       <li>{text.family}</li>
       <li><img src={text.imageUrl} alt="pic" /></li>
     </ul>
    </>
  );
};
export default Todo;
