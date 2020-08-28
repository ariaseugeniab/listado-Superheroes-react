import React, {useState} from 'react'
import { Pagination } from 'react-bootstrap';
import useShList from '../hooks/useShList'
// import PageBtn from './PageBtn'

const PaginationSh = ({active, onEvent}) =>{

  let totalBtns = 10
  
  const[page, setpage] = useState(1)
  const[rows, setRows] = useState(21)
  const {results, total} = useShList(page, rows)
  const [maxLeft, setMaxLeft] = useState(page - Math.floor(totalBtns / 2))
  const [maxRight, setMaxRight] = useState(page + Math.floor(totalBtns / 2))
  
  let items = []
  let totalPages = Math.ceil(total / rows)
  
  
  // console.log('valors antes', maxLeft, maxRight)

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
  
  // console.log(maxLeft, maxRight, total)
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
          <Pagination.First onClick={onEvent} value={1} />
          : <></>
        }
        
          {items}

          { page !== totalPages 
          ? <Pagination.Last onClick={onEvent} value={totalPages}/>
          : <></>
          }
        </Pagination>
      </div>
      )

}

export default PaginationSh