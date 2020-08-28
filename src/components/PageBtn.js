import React from 'react'

const PageBtn = ({pageNumber}) =>{

    return(
        <button value={pageNumber} className="page btn btn-sm btn-info">{pageNumber}</button>
    )


}

export default PageBtn