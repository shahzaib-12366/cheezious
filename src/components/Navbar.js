import React from 'react'
import {useState} from "react"
import '../style/Navbar.css'
import Login from "../components/Login"
import chezious from '../assets/chezious.png'
import {FiSearch} from "react-icons/fi"
import {RxDividerVertical} from "react-icons/rx"
import {IoMdContact}  from "react-icons/io"
import {HiShoppingCart} from "react-icons/hi"
import {MdLocationOn} from "react-icons/md"
import { confirmAlert } from 'react-confirm-alert';
import { useBackdrop } from 'use-backdrop';     

const Navbar = () => {
    const [login ,setLogin] =useState(false)

    const submit = () => {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
         <Login/>
          );
        }
      });
    };
    const { displayBackdrop, closeBackdrop } = useBackdrop();
  const handleClick = () => displayBackdrop((closeBackdrop) => (
    <div>
      <button onClick={closeBackdrop}>
      </button>
    </div>
  
  ));

    return (
        <>
            <div className='Main'>
                <div className='navbar'>
                    <div>
                    <MdLocationOn color='red' fontSize={35}/>
                    </div>
                    <ul>
                        <li><b>DELIVER TO</b></li>
                        <li>560 Block f Johar Town</li>
                    </ul> 
                </div>
                <div className='img'><img src={chezious} alt="chezious" className="chezious" /> </div>
                <div className='img_icon'>
                <FiSearch /> 
                <RxDividerVertical className='cart_icon'/>
                <IoMdContact onClick={()=>{submit();handleClick()}}  />
                <RxDividerVertical />
                <HiShoppingCart className='cart_icon'/>
                
                </div>
                
            </div>
             
        </>
    )
}
export default Navbar;
