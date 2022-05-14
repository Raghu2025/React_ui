import React from 'react'
import Edit from '../Component/Edit'
import Menu from '../Component/Menu'

const EditPage = () => {
    const styl = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <>
            <Menu />
            <div style={styl}>
                <Edit />
            </div>

             
        </>
    )
}

export default EditPage