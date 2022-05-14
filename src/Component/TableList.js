import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './Table.css'
import { Link } from 'react-router-dom'


const TableList = () => {
    const sty ={
        padding: "0.5rem"
    }
    const sty1 ={
        padding: "0.5rem",
        border:"none",
        outline:"none",
        backgroundColor:"Red",
        borderRadius:"5px",
        margin:"4px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        gap:"1rem"
        



    }
    const [value,setvalue] = useState([])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>{
            setvalue(res.data)
        })
        .catch(err=>
            console.log(err))
    },[])
  return (
    <>
    
   <div style={sty}>
       <button style={sty1}><i class="fas fa-angle-left"></i><Link to="/" style={{color:"white"}}>Back</Link></button>
   <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>User Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            {
                value.map((items)=>(
            <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.userId}</td>
                <td>{items.title}</td>
                <td>{items.body}</td>
            </tr>
                ))
            }
            
        </tbody>
    </table>
   </div>
    </>
  )
}

export default TableList