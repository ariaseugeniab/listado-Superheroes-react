import React, {useState} from 'react'
import { Pagination } from 'react-bootstrap';
import useShList from '../hooks/useShList'
import PageBtn from './PageBtn'

const PaginationSh = ({active, onEvent, goFirst, goEnd}) =>{

  let totalBtns = 10
  
  const[page, setpage] = useState(1)
  const[rows, setRows] = useState(21)
  const {results, total} = useShList(page, rows)
  const [maxLeft, setMaxLeft] = useState(page - Math.floor(totalBtns / 2))
  const [maxRight, setMaxRight] = useState(page + Math.floor(totalBtns / 2))
  
  let items = []
  let totalPages = Math.ceil(total / rows)
  
  if(maxLeft < 1){
    setMaxLeft(1)
    setMaxRight(totalBtns)
  }
  
  if(maxRight > totalPages){
    setMaxLeft(totalPages - (totalBtns - 1))
    setMaxRight(totalPages)
    
    if(maxLeft < 1){
      setMaxLeft(1)
    }
  }
  
    for (let number = maxLeft; number <= totalBtns; number++) {
        items.push(
          <Pagination.Item key={number} value={number} active={number === active} onClick={onEvent}>
            {number}
          </Pagination.Item>,
        );
      }

      return (
        <div id="paginacion">
        <Pagination>
          {page !== 1
          ? 
          // <PageBtn pageNumber={1} angle="left" />
          <Pagination.First onClick={goFirst} value={1} />
          : <></>
        }
        
          {items}

          { page !== totalPages 
          ? 
          // <PageBtn pageNumber={totalPages} angle="right" />
          <Pagination.Last onClick={goEnd} value={totalPages}/>
          : <></>
          }
        </Pagination>
      </div>
      )

}

export default PaginationSh