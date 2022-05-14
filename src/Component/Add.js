import React,{useState} from 'react'
import axios from 'axios'
import "./Add.css"
import Select from "react-select"
const Add = () => {
const [values,setvalue] = useState({
    Name:'',
    Capacity:'',
    Tick:false,
    Image:'',
    Layout:''
})
const {Name,Capacity,Image,Tick,Layout} = values
const handleChange = item=>events=>{
    setvalue({...values,Tick:true,[item]:events.target.value})
} 
const Submit = ()=>{
   
    axios.post(`https://jsonplaceholder.typicode.com/posts`,values)
    .then(()=>{
        setvalue({...values,Name:'',Capacity:'',Image:'',Layout:'',Tick:false})
        console.log("success")
        alert(`Successfully Added the Value Name :${Name} , Capacity:${Capacity} , Image:${Image},Tick:${Tick},Layout:${Layout}`)
        
    })
    .catch(err=>{
        console.log(err)
        
    })
}
const options = [
{label:"React",value:"React"},
{label:"Angular",value:"Angular"},
{label:"Vue",value:"Vue"},
{label:"React Native",value:"React Native"}

]


  return (
    <>
    
     <div className="nav">
        <div className="insidenav">
            <h2>Create Table</h2>
            <hr/>
            <div>
                <div className='sel'> <label htmlFor="layout">Layout: &nbsp;&nbsp;&nbsp;</label>
                    <Select id="layout" options={options} onChange={()=>{handleChange('Layout')}} value={Layout} />
                </div>
                <div>
                    <label htmlFor="name">Name: &nbsp;&nbsp;&nbsp;</label>
                    <input type="text" placeholder="Name" id="name" onChange={handleChange('Name')} value={Name} required/>
                </div>
              <div><label htmlFor="capacity">Capacity: &nbsp;&nbsp;&nbsp;</label>
                      <input type="Number" id="capacity" min="1" onChange={handleChange('Capacity')} value={Capacity} required/>
                </div>
                <div><label htmlFor="status">Status: &nbsp;&nbsp;&nbsp;</label>
                    <input type="checkbox" id="status" onChange={handleChange('Tick')} value={Tick} required/>
                </div>
                <div><label htmlFor="image" className="image" title="Click to select">Select a File&nbsp;&nbsp;&nbsp;</label>
                    <input type="file" id="image" onChange={handleChange('Image')} value={Image} required/>
                </div>
               <div className="button">
                <button className="b1" onClick={Submit}>Create Table</button>
                <button className="b2">Cancel</button>
               </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default Add