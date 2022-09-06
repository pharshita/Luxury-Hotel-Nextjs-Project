import styles from "./Color.module.css"

import { useState } from "react";

export const Color = ({children}) => {
  const [activeTab,setActiveTab]= useState(children[0].props.label);

const handleclick=(e,newActiveTab)=>{
  e.preventDefault();
  setActiveTab(newActiveTab);
}

  return (<>
    <div>
     
     {children.map((one)=>{
       if(one.props.label==activeTab)
       return(
        
       <div kay={one.props.label} >{one.props.children}</div>
    
       );
       })}

<ul className="tabbtn">
        {children.map((Colorstab)=> (
        <li className={Colorstab.props.label==activeTab ? styles.current:""} kay={Colorstab.props.label}>
          
          <a href="#" onClick={(e)=>handleclick(e, Colorstab.props.label)}>{Colorstab.props.label}</a>
          </li>))}

       
      </ul>
    </div>
    
    </>
  )
}
