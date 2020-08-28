import React from 'react'

const PageBtn = ({pageNumber, angle}) =>{

    return(
        <button value={pageNumber} className="page btn btn-sm btn-info"><i className={`fa fa-angle-double-${angle}`}></i></button>
    )


}

export default PageBtn