import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [data, setData] = useState([]);

  const addData = async () =>{
    let randomNum = Math.ceil( Math.random()*100)
    try {
    const newData = await fetch(`https://swapi.dev/api/people/${randomNum}`);
    let result = await newData.json();
    let newObj = {name:result.name,id:randomNum};
    setData([...data,newObj]);
      
    } catch (error) {
      console.log(error)
    }
  }
 
 const deleteItem = async (index) =>{
      let filterdData = [...data];
      filterdData.splice(index,1);
      setData(filterdData);
 }

  return (
    <div>

      <div>
        <button style={{height:"30px",width:"100px"}} onClick={addData}>Add record</button>
        {
          data.map((item,index)=>{
            return(
              <div key={index} style={{height:"50px",width:"300px",border:"1px solid #000",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                <p>{item.name}</p>
                <button onClick={() => deleteItem(index)}>delete</button>
              </div>
            )
          })
        }
      
      </div>
    </div>
  );
}

export default App;
