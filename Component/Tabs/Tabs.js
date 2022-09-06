import styles from "./Tabs.module.css"

import { useState } from "react";

export const Tabs = ({children}) => {
  const [activeTab,setActiveTab]= useState(children[0].props.label);

const handleclick=(e,newActiveTab)=>{
  e.preventDefault();
  setActiveTab(newActiveTab);
}

  return (<>
    <div>
      <ul className="tabs">
        {children.map((tab)=> (
        <li className={tab.props.label==activeTab ? styles.current:""} kay={tab.props.label}>
          
          <a href="#" onClick={(e)=>handleclick(e, tab.props.label)}>{tab.props.label}</a>
          </li>))}

        {/* <li className={styles.current}>  Design secsion  </li>
        <li>Wall painting</li>
         <li>Interior decoration</li>
         <li> Gift section</li> */}
      </ul>
     {children.map((one)=>{
       if(one.props.label==activeTab)
       return(
       <div kay={one.props.label} className="containt">{one.props.children}</div>
       );
       })}
    </div>
    
    </>
  )
}
