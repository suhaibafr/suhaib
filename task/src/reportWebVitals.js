const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;





















// const Eachform = ({ item,test,handleDelete,edit ,id}) => {
//   return (
//     <div className="each">
    
//         <td>{item.name}</td>
//         <td>{item.email}</td>
//         <td>{item.password}</td>
//         <td> {item.phone}</td>
//         <td> <button type="button" onClick={() => edit(id)}>
//               EDIT
//             </button></td> 
//         <td> <button type="button" onClick={() => handleDelete(test)}>
//               X
//             </button></td> 
            
     
//     </div>
//   );
// };
// export default Eachform;



// import React, { useState } from "react";
// import Eachform from "./eachform";
// import "../asset/form.css";

// //local varible declare for edit function
// var editID=0;
// var destination="submit";

// const FormUI = () => {
  
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//   });
//   const [arr, setArr] = useState([]);

//   const onChangeHandler = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const onSubmitHandler = (e) => {
//     e.preventDefault();
  
//    if(destination==="submit"){
//     setArr([...arr, data ]);
//    }
//    else{
//      arr[editID].name=data.name;
//      arr[editID].email=data.email;
//      arr[editID].password=data.password;
//      arr[editID].phone=data.phone;
//    }
//    setData({name: "",
//    email: "",
//    password: "",
//    phone: "",})
//   };
  
//   //edit function 
//   const edit=(id)=>{
//     const temp=arr[id];
//     setData({
//       name:temp.name,
//     email: temp.email,
//     password:temp.password,
//     phone: temp.phone,
//     })
//     console.log(temp)
//     editID=id;
//     destination="edit";

//   }
//   const handleRemove = (i) => {
    
//     const values = [...arr];
//     values.splice(i, 1);
//     setArr(values);
//   };
 

//   return (
//     <div className="main">
      
//       <form className="form"
//         onSubmit={(e) => {
//           onSubmitHandler(e);
//         }}
//       >
//         <h1>FORM IN REACT JS</h1>
//         <label>Name:</label>
//         <input
//           type="text"
//           placeholder="Name"
//           name="name"
//           value={data.name}
//           onChange={(e) => {
//             onChangeHandler(e);
//           }}
//         /><br></br>

//         <label>Email:</label>
//         <input
//           type="text"
//           placeholder="Email"
//           name="email"
//           value={data.email}
//           onChange={(e) => {
//             onChangeHandler(e);
//           }}
//         /><br></br>
//         <label>Password:</label>
//         <input
//           type="text"
//           placeholder="Password"
//           name="password"
//           value={data.password}
//           onChange={(e) => {
//             onChangeHandler(e);
//           }}
//         /><br></br>
//         <label>Phone:</label>
//         <input
//           type="text"
//           placeholder="Phone"
//           name="phone"
//           value={data.phone}
//           onChange={(e) => {
//             onChangeHandler(e);
//           }}
//         /><br></br>
//         <button>Data</button>
//       </form>
//       <div className="tab">
//             <table>
//                 <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Password</th>
//                     <th>Phone</th>
//                 </tr>

//             </table>
//         </div>
        
//       <div>
//           {arr.map((item, key) => {
//             return <Eachform  key={key} id={key} handleDelete={handleRemove} edit={edit} item={item} test={key} />;
//           })}
//         </div>
//     </div>
//   );
// };
// export default FormUI;
