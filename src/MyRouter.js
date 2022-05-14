import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import TableList from './Component/TableList'
import AddPage from './Pages/AddPage'
import EditPage from './Pages/EditPage'
import Main from './Pages/Main'


const MyRouter = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/list' element={<TableList/>}/>
            <Route path='/add' element={<AddPage/>}/>
            <Route path='/edit' element={<EditPage/>}/> 
        </Routes>
    </Router>
    </>
  )
}

export default MyRouter