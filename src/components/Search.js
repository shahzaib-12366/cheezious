import React from 'react'
import "../style/Search.css"
import { RxCross1 } from "react-icons/rx"
const Search = () => {
  return (
    <>
      <div className='Search_Container_fluid'>
        <div className='Search_name_icon'> <h2> Search</h2><RxCross1 /></div>
        <div>
          <div className='input_field'>
            <input type="text" className='input_field_text' name="" id="" placeholder=" Search products here..." />
            <div class="Search_text">
              Search with product name to get better results.
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default Search