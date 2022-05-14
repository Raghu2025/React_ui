import React from 'react'
import Add from '../Component/Add'
import Menu from '../Component/Menu'
// import TableList from '../Component/TableList'

const AddPage = () => {
    const sty = {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }
  return (
    <>
     <Menu/>
    <div style={sty}>
     <Add/>
    </div>
  {/* Can  also add table */}
    {/* <TableList/> */}
    </>
  )
}

export default AddPage