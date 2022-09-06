import styles from "./Btn.module.css"

import { useState } from "react";

export const Btn = ({children}) => {
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
        {children.map((tabbtn)=> (
        <li className={tabbtn.props.label==activeTab ? styles.current1:""} kay={tabbtn.props.label}>
          
          <a href="#" onClick={(e)=>handleclick(e, tabbtn.props.label)}>{tabbtn.props.label}</a>
          </li>))}

       
      </ul>
    </div>
    
    </>
  )
}
