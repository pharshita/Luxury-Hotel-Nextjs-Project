import React from 'react'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar'
import Link from 'next/link';
import Image from 'next/image';
import { color, width } from '@mui/system';
import { Btn } from '../Component/Button';
import { Color } from '../Component/Color';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function () {
    return (
        <div>
            <Header />
            <Navbar />
            <section>
                <div className="d-flex p-3 pl-5" style={{ backgroundColor: "#E7E7E7" }}>
                    <Link href="/">
                        <a style={{ textDecoration: "none", color: "#302E2D" }}> Home </a>
                    </Link>
                    <p className="ml-2 mr-2" > > </p>
                    <a> Wall decor </a>
                    <p className="ml-2 mr-2" > > </p>
                    <a>  Frames </a>
                    <p className="ml-2 mr-2" > > </p>
                    <a>  Wooden frame with strips </a>
                </div>
            </section>
            <section>
                <div className='d-flex product'>
                    <div >
                        <div style={{ background: "#E7E7E7", width: "650px", height: "520px", textAlign: "center", paddingTop: "107px" }}>
                            <Image src="/images/productimg_1.png " width={406} height={287} ></Image>
                        </div>
                        <div className='d-flex mt-3'>
                            <div style={{ background: "#E7E7E7", width: "320px", height: "400px", textAlign: "center", paddingTop: "50px" }}>
                                <Image src="/images/productimg_2.png" width={204} height={263}></Image>
                            </div>
                            <div style={{ background: "#E7E7E7", width: "320px", height: "400px", textAlign: "center", paddingTop: "10px", marginLeft: "10px" }}>
                                <Image src="/images/productimg_3.png" width={308} height={365}></Image>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ background: "#FFFCF7", width: "517px", height: "685px", marginLeft: "50px" }}>
                            <h5 style={{ color: "#302E2D" }}>THIN WOODEN FRAME</h5>
                            <h6 style={{ borderBottom: "1px solid #A5A5A7", paddingBottom: "20px" }}>$500</h6>
                            <Btn >
                                <div label=" D16cmx H3cm" >
                                    <p style={{ borderBottom: "1px solid #A5A5A7", paddingBottom: "20px", marginLeft: "36px" }}> Size <span className='pera'>D16cmx H3cm</span></p>
                                </div>
                                <div label="D27cmx H10cm" >
                                    <p style={{ borderBottom: "1px solid #A5A5A7", paddingBottom: "20px", marginLeft: "36px" }}> Size <span className='pera'>D27cmx H10cm</span></p>


                                </div>
                                <div label="D35cmx H15cm">

                                    <p style={{ borderBottom: "1px solid #A5A5A7", paddingBottom: "20px", marginLeft: "36px" }}> Size <span className='pera'>D35cmx H15cm</span></p>

                                </div>

                            </Btn>
                            <div className='row pt-3 mr-0' style={{ borderTop: "1px solid #A5A5A7", borderBottom: "1px solid #A5A5A7", marginLeft: "36px" }}>
                                <div className='col-sm-2'>
                                    <Image src="/images/Product_Vector.png" width={23} height={23}></Image></div>
                                <div className='col-sm-8'>
                                    <p style={{ marginLeft: "-38px" }}>Worlwide shipping available</p></div>

                            </div>
                            <div className="pt-2 mt-3 d-flex pb-4" style={{ borderBottom: "1px solid #A5A5A7", marginLeft: "36px" }}>
                                <div className='d-flex pt-2 mr-5' style={{ border: "1px solid  #A5A5A7", width: "20%", marginLeft: "36px", fontSize: "20px", fontWeight: "bold" }}>
                                    <p className='pl-2'>+</p>
                                    <p className='pl-4'>0</p>
                                    <p className='pl-4'>-</p>
                                </div>
                                <button style={{ backgroundColor: "#000", color: "#fff" }} className="ml-5 pl-5 pr-5">ADD TO BAG</button>
                            </div>
                            <div style={{ marginLeft: "36px" }}>
                                <p className='p-4'>Fine wooden frame with a golden edge. Includes a passe-partout.
                                    Elegantly designed to be used as a free-standing or wall hanging decoration, this box frame can hold a landscape or portrait image.
                                    Made in Italy.</p>
                            </div>

                        </div>
                        <div >

                            <select className='pl-4 ' style={{ width: "517px", height: "86px", background: "#FFFCF7", marginLeft: "50px", marginTop: "35px" }} >
                                <option value="none" >Shipping and returns</option>
                            </select>

                        </div>
                    </div>

                </div>
            </section>
            <section>
                <p className='mt-5' style={{ fontFamily: "Futura LT", fontSize: "36px", paddingLeft: "60px" }}>Style this with</p>
                <div className='pb-5'>
                    <Carousel>
                        <div>
                            <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                                <div>
                                    <div className=" " style={{ width: '285px', height: '285px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "60px" }}>
                                        <Image src="/images/product_10.png" width={158} height={158}></Image>

                                    </div>
                                    <p style={{ marginTop: "10px", fontSize: "15px", textAlign: "left" }}><b>Minimalist wall clock</b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>
                                </div>


                                <div>
                                    <div className="ml-3" style={{ width: '285px', height: '285px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                        <Image src="/images/product_8.png" width={159} height={192}></Image>
                                    </div>
                                    <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "20px", textAlign: "left" }}><b>Painting </b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>

                                </div>
                                <div>
                                    <div className="ml-3" style={{ width: '285px', height: '285px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                        <Image src="/images/product_14.png" width={187} height={187}></Image>
                                    </div>
                                    <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "20px", textAlign: "left" }}><b>vase</b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>

                                </div>
                                <div>
                                    <div className="ml-3" style={{ width: '285px', height: '285px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                        <Image src="/images/product_7.png" width={66} height={187}></Image>
                                    </div>
                                    <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "20px", textAlign: "left" }}><b>Golden vase</b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>

                                </div>


                            </div>
                        </div>

                        <div >
                            <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                                <div>
                                    <div className=" " style={{ width: '285px', height: '285px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "60px" }}>
                                        <Image src="/images/product_10.png" width={158} height={158}></Image>

                                    </div>
                                    <p style={{ marginTop: "10px", fontSize: "15px", textAlign: "left" }}><b>Minimalist wall clock</b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>
                                </div>


                                <div>
                                    <div className="ml-3" style={{ width: '285px', height: '285px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                        <Image src="/images/product_8.png" width={159} height={192}></Image>
                                    </div>
                                    <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "20px", textAlign: "left" }}><b>Painting </b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>

                                </div>
                                <div>
                                    <div className="ml-3" style={{ width: '285px', height: '285px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                        <Image src="/images/product_14.png" width={187} height={187}></Image>
                                    </div>
                                    <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "20px", textAlign: "left" }}><b>vase</b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>

                                </div>
                                <div>
                                    <div className="ml-3" style={{ width: '285px', height: '285px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                        <Image src="/images/product_7.png" width={66} height={187}></Image>
                                    </div>
                                    <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "20px", textAlign: "left" }}><b>Golden vase</b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>

                                </div>


                            </div>
                        </div>

                        <div>
                            <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                                <div>
                                    <div className=" " style={{ width: '285px', height: '285px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "60px" }}>
                                        <Image src="/images/product_10.png" width={158} height={158}></Image>

                                    </div>
                                    <p style={{ marginTop: "10px", fontSize: "15px", textAlign: "left" }}><b>Minimalist wall clock</b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>
                                </div>


                                <div>
                                    <div className="ml-3" style={{ width: '285px', height: '285px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                        <Image src="/images/product_8.png" width={159} height={192}></Image>
                                    </div>
                                    <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "20px", textAlign: "left" }}><b>Painting </b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>

                                </div>
                                <div>
                                    <div className="ml-3" style={{ width: '285px', height: '285px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                        <Image src="/images/product_14.png" width={187} height={187}></Image>
                                    </div>
                                    <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "20px", textAlign: "left" }}><b>vase</b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>

                                </div>
                                <div>
                                    <div className="ml-3" style={{ width: '285px', height: '285px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                        <Image src="/images/product_7.png" width={66} height={187}></Image>
                                    </div>
                                    <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "20px", textAlign: "left" }}><b>Golden vase</b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>

                                </div>


                            </div>
                        </div>

                        <div >
                            <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                                <div>
                                    <div className=" " style={{ width: '285px', height: '285px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "60px" }}>
                                        <Image src="/images/product_10.png" width={158} height={158}></Image>

                                    </div>
                                    <p style={{ marginTop: "10px", fontSize: "15px", textAlign: "left" }}><b>Minimalist wall clock</b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>
                                </div>


                                <div>
                                    <div className="ml-3" style={{ width: '285px', height: '285px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                        <Image src="/images/product_8.png" width={159} height={192}></Image>
                                    </div>
                                    <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "20px", textAlign: "left" }}><b>Painting </b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>

                                </div>
                                <div>
                                    <div className="ml-3" style={{ width: '285px', height: '285px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                        <Image src="/images/product_14.png" width={187} height={187}></Image>
                                    </div>
                                    <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "20px", textAlign: "left" }}><b>vase</b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>

                                </div>
                                <div>
                                    <div className="ml-3" style={{ width: '285px', height: '285px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                        <Image src="/images/product_7.png" width={66} height={187}></Image>
                                    </div>
                                    <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "20px", textAlign: "left" }}><b>Golden vase</b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>

                                </div>


                            </div>
                        </div>

                    </Carousel>
                </div>
            </section>
            <section>
            <p className='mt-5' style={{ fontFamily: "Futura LT", fontSize: "36px", paddingLeft: "60px" }}>Reviews</p>
            <div className='d-flex mt-5 mb-5' style={{ justifyContent: "center" }}>
                                <div>
                                    <div className=" " style={{ width: '285px', height: '285px', backgroundColor: "#FFFCF7" ,paddingTop:"30px",paddingLeft:"20px"}}>
                                      <div className='d-flex mb-3' style={{color:"#937E50"}}>
                                      <i className="fa fa-star ml-2"></i>
                                      <i className="fa fa-star ml-2"></i>
                                      <i className="fa fa-star ml-2"></i>
                                      <i className="fa fa-star ml-2"></i>
                                      <i className="fa fa-star ml-2"></i>
                                      </div>
                                      <p>Fabulous frame!</p>
                                      <p>Excellent! Absolutely love my frame, it looks amazing and is such good quality. It arrived promptly and communication was fabulous! </p><br/>
                                      <p>Julie M, London, UK</p>

                                    </div>
                                   
                                </div>


                                <div>
                                    <div className=" ml-4" style={{ width: '285px', height: '285px', backgroundColor: "#FFFCF7" ,paddingTop:"30px",paddingLeft:"20px"}}>
                                      <div className='d-flex mb-3' style={{color:"#937E50"}}>
                                      <i className="fa fa-star ml-2"></i>
                                      <i className="fa fa-star ml-2"></i>
                                      <i className="fa fa-star ml-2"></i>
                                      <i className="fa fa-star ml-2"></i>
                                      <i className="fa fa-star ml-2"></i>
                                      </div>
                                      <p>Fabulous frame!</p>
                                      <p>Excellent! Absolutely love my frame, it looks amazing and is such good quality. It arrived promptly and communication was fabulous! </p><br/>
                                      <p>Julie M, London, UK</p>

                                    </div>
                                   
                                </div>
                                <div>
                                    <div className="ml-4 " style={{ width: '285px', height: '285px', backgroundColor: "#FFFCF7" ,paddingTop:"30px",paddingLeft:"20px"}}>
                                      <div className='d-flex mb-3' style={{color:"#937E50"}}>
                                      <i className="fa fa-star ml-2"></i>
                                      <i className="fa fa-star ml-2"></i>
                                      <i className="fa fa-star ml-2"></i>
                                      <i className="fa fa-star ml-2"></i>
                                      <i className="fa fa-star ml-2"></i>
                                      </div>
                                      <p>Fabulous frame!</p>
                                      <p>Excellent! Absolutely love my frame, it looks amazing and is such good quality. It arrived promptly and communication was fabulous! </p><br/>
                                      <p>Julie M, London, UK</p>

                                    </div>
                                   
                                </div>
                                <div>
                                    <div className="ml-4 " style={{ width: '285px', height: '285px', backgroundColor: "#FFFCF7" ,paddingTop:"30px",paddingLeft:"20px"}}>
                                      <div className='d-flex mb-3' style={{color:"#937E50"}}>
                                      <i className="fa fa-star ml-2"></i>
                                      <i className="fa fa-star ml-2"></i>
                                      <i className="fa fa-star ml-2"></i>
                                      <i className="fa fa-star ml-2"></i>
                                      <i className="fa fa-star ml-2"></i>
                                      </div>
                                      <p>Fabulous frame!</p>
                                      <p>Excellent! Absolutely love my frame, it looks amazing and is such good quality. It arrived promptly and communication was fabulous! </p><br/>
                                      <p>Julie M, London, UK</p>

                                    </div>
                                   
                                </div>

            </div>
            </section>
          
            <Footer />
        </div>
    )
}
