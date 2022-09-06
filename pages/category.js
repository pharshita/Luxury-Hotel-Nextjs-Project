import Header from "../Component/Header";
import Navbar from "../Component/Navbar";
import Head from "next/head";
import Footer from "../Component/Footer";
import Image from "next/image";
import Dropdown from "../Component/Dropdown";
import Link from "next/link";
import React, { useState } from 'react';

export default function category() {
    const [readMore, setReadMore] = useState(false);
    const extraContent = 
    <div>
          <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                            <div>
                                <div className="row product-containt1" style={{ width: '300px', height: '300px', backgroundColor: "#E7E7E7", textAlign: "center" }}>
                                    <div className='col-sm-12' style={{ marginTop: "50px" }}>
                                        <Image src="/images/product_8.png" width={192} height={192}></Image>

                                    </div>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px" }}><b>Painting </b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>
                            </div>


                            <div>
                                <div className="category2" style={{ width: '302px', height: '302px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "90px" }}>
                                    <Image src="/images/product_2.png" width={225} height={111}></Image>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "60px" }}><b>Soy candle</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>

                            </div>
                            <div>
                                <div className="category2" style={{ width: '302px', height: '302px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                    <Image src="/images/product_6.png" width={157} height={225}></Image>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "60px" }}><b>Artificial bouquet</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>

                            </div>


          </div>
          <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                            <div>
                                <div className="row product-containt1" style={{ width: '300px', height: '300px', backgroundColor: "#E7E7E7", textAlign: "center" }}>
                                    <div className='col-sm-12' style={{ marginTop: "60px" }}>
                                        <Image src="/images/product_7.png" width={70} height={198}></Image>

                                    </div>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px" }}><b>Golden vase</b> <br /><span style={{ color: "#302E2D" }}>$600</span> </p>
                            </div>


                            <div>
                                <div className="category2" style={{ width: '302px', height: '302px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                    <Image src="/images/product_8.png" width={171} height={206}></Image>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "60px" }}><b>Painting </b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>

                            </div>
                            <div>
                                <div className="category2" style={{ width: '302px', height: '302px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "30px" }}>
                                    <Image src="/images/product_9.png" width={243} height={241}></Image>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "60px" }}><b>Mirror</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>

                            </div>


         </div>
      
  <div >
      </div>
    </div>
    const linkName = readMore ? 'Load Less << ' : 'Load More >> '
    return (
        <>
            <Head>
                <title>Ruby</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            </Head>
            <Header />
            <Navbar />
            <section>
                <div className="d-flex p-3 pl-5" style={{ backgroundColor: "#E7E7E7" }}>
                    <Link href="/">
                        <a style={{ textDecoration: "none", color: "#302E2D" }}> Home </a>
                    </Link>
                    <p className="ml-2 mr-2" > > </p>
                    <a> Сategories </a>
                </div>
            </section>
            <section style={{ overflow: "hidden" }}>
                <div className="d-flex" style={{ justifyContent: "right", marginTop: "40px" }}>
                    <h5 className="sort pt-1">Sort by</h5>
                    {/*  */}


                    <select className="mr-5" style={{ width: "200px", paddingLeft: "20px" }}>
                        <option value="none" >Newest</option>
                        <option >price : Low to high</option>
                        <option >price : high to Low</option>
                    </select>

                    {/*  */}
                </div>
                <div className="row">
                    <div className="col-sm-3 filter">
                        <h5 className="sort pt-5 mb-5">Filter by</h5>
                        <Dropdown />


                    </div>
                    <div className="col-sm-9">

                        <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                            <div>
                                <div className="row product-containt1" style={{ width: '300px', height: '300px', backgroundColor: "#E7E7E7", textAlign: "center" }}>
                                    <div className='col-sm-10' style={{ marginTop: "50px" }}>
                                        <Image src="/images/product_1.png" width={192} height={192}></Image>

                                    </div>
                                    <i className=" fa fa-heart-o ml-3" style={{ marginTop: "20px" }}></i>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px" }}><b>Round vase</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>
                            </div>


                            <div>
                                <div className="category2" style={{ width: '302px', height: '302px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "90px" }}>
                                    <Image src="/images/product_2.png" width={225} height={111}></Image>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "60px" }}><b>Soy candle</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>

                            </div>
                            <div>
                                <div className="category2" style={{ width: '302px', height: '302px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                    <Image src="/images/product_3.png" width={157} height={225}></Image>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "60px" }}><b>Golden mirror</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>

                            </div>


                        </div>
                        {/*  */}
                        <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                            <div>
                                <div className="row product-containt1" style={{ width: '300px', height: '300px', backgroundColor: "#E7E7E7", textAlign: "center" }}>
                                    <div className='col-sm-12' style={{ marginTop: "30px" }}>
                                        <Image src="/images/product_4.png" width={222} height={222}></Image>

                                    </div>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px" }}><b>Artificial flowers</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>
                            </div>


                            <div>
                                <div className="category2" style={{ width: '302px', height: '302px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                    <Image src="/images/product_5.png" width={173} height={186}></Image>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "60px" }}><b>Soy candle</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>

                            </div>
                            <div>
                                <div className="category2" style={{ width: '302px', height: '302px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "30px" }}>
                                    <Image src="/images/product_6.png" width={252} height={252}></Image>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "60px" }}><b>Artificial bouquet</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>

                            </div>


                        </div>
                        {/*  */}
                        <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                            <div>
                                <div className="row product-containt1" style={{ width: '300px', height: '300px', backgroundColor: "#E7E7E7", textAlign: "center" }}>
                                    <div className='col-sm-12' style={{ marginTop: "60px" }}>
                                        <Image src="/images/product_7.png" width={70} height={198}></Image>

                                    </div>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px" }}><b>Golden vase</b> <br /><span style={{ color: "#302E2D" }}>$600</span> </p>
                            </div>


                            <div>
                                <div className="category2" style={{ width: '302px', height: '302px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                    <Image src="/images/product_8.png" width={171} height={206}></Image>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "60px" }}><b>Painting </b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>

                            </div>
                            <div>
                                <div className="category2" style={{ width: '302px', height: '302px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "30px" }}>
                                    <Image src="/images/product_9.png" width={243} height={241}></Image>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "60px" }}><b>Mirror</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>

                            </div>


                        </div>
                        {/*  */}
                        <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                            <div>

                                <div className="row product-containt1" style={{ width: '300px', height: '300px', backgroundColor: "#E7E7E7", textAlign: "center" }}>
                                    <div className='col-sm-12' style={{ marginTop: "60px" }}>
                                        <Image src="/images/product_10.png" width={167} height={167}></Image>

                                    </div>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px" }}><b>Minimalist wall clock</b> <br /><span style={{ color: "#302E2D" }}>$600</span> </p>
                            </div>


                            <div>
                                <div className="category2" style={{ width: '302px', height: '302px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                    <Image src="/images/product_11.png" width={198} height={198}></Image>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "60px" }}><b>Pearl vase </b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>

                            </div>
                            <div>
                                <div className="category2" style={{ width: '302px', height: '302px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "30px" }}>
                                    <Image src="/images/product_12.png" width={241} height={210}></Image>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "60px" }}><b>Black vase</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>

                            </div>


                        </div>
                        {/*  */}
                        <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                            <div>

                                <div className="row product-containt1" style={{ width: '300px', height: '300px', backgroundColor: "#E7E7E7", textAlign: "center" }}>
                                    <div className='col-sm-12' style={{ marginTop: "60px" }}>
                                        <Image src="/images/product_13.png" width={210} height={210}></Image>

                                    </div>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px" }}><b>Set of paintings</b> <br /><span style={{ color: "#302E2D" }}>$600</span> </p>
                            </div>


                            <div>
                                <div className="category2" style={{ width: '302px', height: '302px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "50px" }}>
                                    <Image src="/images/product_14.png" width={198} height={198}></Image>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "60px" }}><b> vase </b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>

                            </div>
                            <div>
                                <div className="category2" style={{ width: '302px', height: '302px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "30px" }}>
                                    <Image src="/images/product_15.png" width={223} height={223}></Image>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "60px" }}><b>Emerald tray</b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>

                            </div>


                        </div>
                        {/*  */}
                        {readMore && extraContent}

                        <button className="btn btn-block loadmore-btn" onClick={() => { setReadMore(!readMore) }}>{linkName}</button>
                  
                    </div>

                </div>
            </section>
            <section>
                <Footer />
            </section>

        </>
    )
}
