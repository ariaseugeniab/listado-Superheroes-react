import React from 'react'
import { useHistory } from 'react-router-dom'

const BtnBack = () => {

    const history = useHistory()
    
function handleBack() {
    history.goBack()
}

return(
    <button className="page btn btn-sm btn-info" id="btn-volver" onClick={handleBack}> <i className="fa fa-arrow-left"></i></button>
)
    
}

export default BtnBack