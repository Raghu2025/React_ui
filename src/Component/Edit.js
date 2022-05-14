import React, { useEffect, useState } from 'react'
import './Add.css'
import './Table.css'
import Select from 'react-select'
import axios from 'axios'

const Edit = () => {
   
    const sty = {
        padding: "0.5rem"
    }
    const [value, setvalue] = useState([])
    const [name, setname] = useState({
        Name:'',
        Capacity:'',
        Image:''
        
    })
    const {Name,Capacity} = name
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                setvalue(res.data)
            })
            .catch(err =>
                console.log(err))
    }, [])

    const options = [
        { label: "React", value: "React" },
        { label: "Angular", value: "Angular" },
        { label: "Vue", value: "Vue" },
        { label: "React Native", value: "React Native" }

    ]
    const steel = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
const Edit = (item)=>{
    setname({Name:item.title,Capacity:item.userId,Image:''})
  
}
const Update = ()=>{
 axios.put(`https://jsonplaceholder.typicode.com/posts/${Capacity}`,name)
 .then(()=>{
    setvalue({...name,Name:'',Capacity:'',Image:''})
    console.log("success")
    alert(`Successfully Added the Value Name :${Name} , Capacity:${Capacity} , Image:${Image}`)
    
})
.catch(err=>{
    console.log(err)
    
})}

 const trash =(item)=>{
           axios.delete(`https://jsonplaceholder.typicode.com/posts/${item}`)
            .then(()=>{
                console.log(`${item} ID Is Deleted`)
                alert(`${item} ID Is Deleted`)
            })
            .catch((err)=>{
                console.log(err)
            })
        }

    return (
        <>
            <div style={steel}>
                <div className="nav">
                    <div className="insidenav">
                        <h2>Update Table</h2>
                        <hr />
                        <div>
                            <div className='sel'> <label htmlFor="layout">Layout: &nbsp;&nbsp;&nbsp;</label>
                                <Select id="layout" options={options}>
                                </Select>
                            </div>
                            <div>
                                <label htmlFor="name">Name: &nbsp;&nbsp;&nbsp;</label>
                                <input type="text" id="name" placeholder={name} value={Name} onChange={e=>e.target.value} required />
                            </div>
                            <div><label htmlFor="capacity">Capacity: &nbsp;&nbsp;&nbsp;</label>
                                <input type="Number" id="capacity" min="1" value={Capacity} onChange={e=>e.target.value} required />
                            </div>
                            <div><label htmlFor="status">Status: &nbsp;&nbsp;&nbsp;</label>
                                <input type=
                                    "checkbox" id="status" required />
                            </div>
                            <div><label htmlFor="image" className="image" title="Click to select">Select a File&nbsp;&nbsp;&nbsp;</label>
                                <input type="file" id="image" required  value={Image} onChange={e=>e.target.value} />
                            </div>
                            <div className="button">
                                <button className="b1" onClick={Update}>Update Table</button>
                                <button className="b2">Cancel</button>
                            </div>
                        </div>

                    </div>

                </div>

                <div style={sty}>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User Id</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                value.map((items) => (
                                    <tr key={items.id}>
                                        <td>{items.id}</td>
                                        <td>{items.userId}</td>
                                        <td>{items.title}</td>
                                        <td>{items.body}</td>
                                        <td className='button'>
                                            <button className='but bute' onClick={()=>Edit(items)}><i className="fas fa-edit"></i></button>
                                            <button className='but butt' onClick={()=>trash(items.id)}><i className="fas fa-trash"></i></button></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}

export default Edit