import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import React from 'react'
import Rangeslider from './Rangslider';
import Image from 'next/image';

export default function Dropdown() {
  return (
    <div>
                       <Accordion sx={{backgroundColor:"#F6F1EC",boxShadow:"none"}}>
                            <AccordionSummary
                                //   expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Category</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{paddingLeft:"20px"}}>
                                    <label><input type="checkbox" value="Home Decor" /><span className="ml-3">Artificial flower</span>  </label><br />
                                    <label><input type="checkbox" value="Home Decor" /><span className="ml-3">Wall painting</span>  </label><br />
                                    <label><input type="checkbox" value="Home Decor" /><span className="ml-3">Wall decor</span>  </label><br />
                                    <label><input type="checkbox" value="Home Decor" /><span className="ml-3">Sculpture</span>  </label><br />
                                    <label><input type="checkbox" value="Home Decor" /><span className="ml-3">Vase </span>  </label><br />
                                    <label><input type="checkbox" value="Home Decor" /><span className="ml-3">Table decor </span>  </label><br />
                                    <label><input type="checkbox" value="Home Decor" /><span className="ml-3">Gifts</span>  </label>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{backgroundColor:"#F6F1EC",boxShadow:"none"}}>
                            <AccordionSummary
                                //   expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Brands</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{paddingLeft:"20px"}}>
                                    <label><input type="checkbox" value="Home Decor" /><span className="ml-3">Artificial flower</span>  </label><br />
                                    <label><input type="checkbox" value="Home Decor" /><span className="ml-3">Wall painting</span>  </label><br />
                                    <label><input type="checkbox" value="Home Decor" /><span className="ml-3">Wall decor</span>  </label><br />
                                    <label><input type="checkbox" value="Home Decor" /><span className="ml-3">Sculpture</span>  </label><br />
                                    <label><input type="checkbox" value="Home Decor" /><span className="ml-3">Vase </span>  </label><br />
                                    <label><input type="checkbox" value="Home Decor" /><span className="ml-3">Table decor </span>  </label><br />
                                    <label><input type="checkbox" value="Home Decor" /><span className="ml-3">Gifts</span>  </label>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{backgroundColor:"#F6F1EC",boxShadow:"none"}}>
                            <AccordionSummary
                                //   expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Price</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                               <Rangeslider/>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        {/*  */}
                        <Accordion sx={{backgroundColor:"#F6F1EC",boxShadow:"none"}}>
                            <AccordionSummary
                                //   expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Colors</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{paddingLeft:"20px"}}>
                                
                                <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"3px"}}/>
                               <Image src="/images/milti.png" width={32} height={28} ></Image>
                                 <span className="ml-1">Multi</span></label><br />
                                     
                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#0074d9"}}></div>
                                    <span className="ml-2">Blue</span>  </label><br />

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}} />
                                    <div className='colors' style={{backgroundColor:"#5eb160"}}></div>
                                    <span className="ml-2">Green</span>  </label><br />

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#f1a9c4"}}></div>
                                    <span className="ml-2">Pink</span>  </label><br />

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}} />
                                    <div className='colors' style={{backgroundColor:"#000000"}}></div>
                                    <span className="ml-2">Black </span>  </label><br />

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#3c4477"}}></div>
                                    <span className="ml-2">Navy Blue </span>  </label><br />

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}} />
                                    <div className='colors' style={{backgroundColor:"#EADC32"}}></div>
                                    <span className="ml-3">Yellow</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#D34B56"}}></div>
                                    <span className="ml-2">Red</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#FFF"}}></div>
                                    <span className="ml-2">White</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#9FA8AB"}}></div>
                                    <span className="ml-2">Grey</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#B03060"}}></div> 
                                    <span className="ml-2">Maroon</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#CC9C33"}}></div>
                                    <span className="ml-2">Mustard</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#FFE5B4"}}></div>
                                    <span className="ml-2">Peach</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#E8E6CF"}}></div>
                                    <span className="ml-2">Beige</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#008080"}}></div>
                                    <span className="ml-2">Teal</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#F28D20"}}></div>
                                    <span className="ml-2">Orange</span>  </label><br/>
                                    
                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#915039"}}></div>
                                    <span className="ml-2">Brown</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#EDE6B9"}}></div>
                                    <span className="ml-2">Cream</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#800080"}}></div>
                                    <span className="ml-2">Purple</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#40E0D0"}}></div>
                                    <span className="ml-2">Turquoise Blue </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#2E8B57"}}></div><span className="ml-2">Sea Grean </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#3D9970"}}></div>
                                    <span className="ml-2">Olive </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#FF7F50"}}></div>
                                    <span className="ml-2">Coral </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#B7410E"}}></div>
                                    <span className="ml-2">Rust </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#B952A9"}}></div>
                                    <span className="ml-2">Magenta </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#A03245"}}></div>
                                    <span className="ml-2">Burgundy </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#5DB653"}}></div> 
                                    <span className="ml-2">Lime Grean </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#36454F"}}></div>
                                    <span className="ml-2">Charcoal </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#e0b0ff"}}></div>
                                    <span className="ml-2">Mauve </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#483C32"}}></div>
                                    <span className="ml-3">Taupe </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#D6D6E5"}}></div>
                                    <span className="ml-3">Lavender </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#4B302F"}}></div>
                                    <span className="ml-3">Coffe Brown </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#E5C74A"}}></div>
                                    <span className="ml-3">Gold </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#DD2F96"}}></div>
                                    <span className="ml-2">Rose </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#C3B091"}}></div>
                                    <span className="ml-2">Khaki </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#9FA8AB"}}></div>
                                    <span className="ml-2">Grey Melange </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#8DC04A"}}></div>
                                    <span className="ml-2">Fluorescent Green </span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#D2B48C"}}></div>
                                    <span className="ml-2">Tan</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#DBAF97"}}></div>
                                    <span className="ml-2">Nude</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/><div className='colors' style={{backgroundColor:"#b3b3b3"}}></div>
                                    <span className="ml-2">Silver</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#B3B3B3"}}></div>
                                    <span className="ml-2">Steel</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#CC8240"}}></div>
                                    <span className="ml-2">Bronze</span>  </label><br/>

                                    <label><input  type="checkbox" value="Home Decor" style={{width:"15px",height:"15px",marginTop:"2px"}}/>
                                    <div className='colors' style={{backgroundColor:"#AA6C39"}}></div>
                                    <span className="ml-2">Copper</span>  </label><br/>


                                </Typography>
                            </AccordionDetails>
                        </Accordion>

    </div>
  )
}
