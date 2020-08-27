//using npm or yarn
import React from 'react'
import { Circle, Heart } from 'react-spinners-css';
//using bit
import Facebook from '@bit/joshk.react-spinners-css.facebook';
import { getRandomColor } from '@bit/joshk.jotils.get-random-color'

const Spinner = () =>{
   return(
     <div>
       <Circle /> 
       <Circle color="red" />
       <Circle color="#be97e8" size={200} />
       <Heart color={getRandomColor()} />
       <Facebook /> 
       <Facebook color="red" />
     </div>
   )
}

export default Spinner