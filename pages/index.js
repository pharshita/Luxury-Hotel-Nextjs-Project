import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../Component/Header';
import Navbar from '../Component/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Script from 'next/script';
import { Tabs } from '../Component/Tabs';
import Footer from '../Component/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ruby</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet"href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      </Head>

      <Header />
      <Navbar />
      <section>
        <div>
          <Carousel>
            <div className='background-img'>
              <h4>RUBY HOME&GIFTS</h4>
              <p>Limited addition </p>
              <Link href="/category">
              <button>Shop now</button>
              </Link>
            </div>
            <div className='background-img1'>

            </div>
            <div className='background-img2'>


            </div>
            <div className='background-img3'>

            </div>
        
          </Carousel>
        </div>

      </section>
      <section style={{ overflow: "hidden" }}>
        <div className='products '>
          <h5>Our top products </h5>
          <div className='row'>

            <div className='col-sm-12'>

              <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                <div>
                  <div className="row product-containt1" style={{ width: '312px', height: '247px', backgroundColor: "#E7E7E7", textAlign: "center" }}>
                    <div className='col-sm-10' style={{ marginTop: "80px" }}>
                      <Image src="/images/pngaaa 2.png" width={61} height={100}></Image>

                    </div>
                    <i className=" fa fa-heart-o ml-3" style={{ marginTop: "20px" }}></i>
                  </div>
                  <p style={{ marginTop: "10px", fontSize: "15px" }}><b>Golden vase</b> <br /><span style={{ color: "#302E2D" }}>$600</span> </p>
                </div>

                <div>

                </div>
                <div>
                  <div className="product-containt2" style={{ width: '312px', height: '247px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "80px" }}>
                    <Image src="/images/Malachitetry.png" width={150} height={100}></Image>
                  </div>
                  <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "80px" }}><b>Emerald tray</b> <br /><span style={{ color: "#302E2D" }}>$450</span> </p>

                </div>


              </div>

            </div>

          </div>
          <div className='row'>

            <div className='col-sm-12'>
              <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                <div>
                  <div className="row product-containt1" style={{ width: '312px', height: '247px', backgroundColor: "#E7E7E7", textAlign: "center" }}>
                    <div className='col-sm-12' style={{ marginTop: "80px" }}>
                      <Image src="/images/fruitstar.png" width={150} height={100}></Image>

                    </div>
                  </div>
                  <p style={{ marginTop: "10px", fontSize: "15px" }}><b>Pearl vase</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>
                </div>
                <div>
                  <div className="product-containt2" style={{ width: '312px', height: '247px', backgroundColor: "#E7E7E7", textAlign: "center", paddingTop: "80px" }}>
                    <Image src="/images/pngwing 1.png" width={150} height={100}></Image>
                  </div>
                  <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "80px" }}><b>Set of paintings</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>
                </div>



              </div>
            </div>

          </div>
        </div>
      </section>
      <section>
        <div className='photoback'>
          <h5>Stay in touch</h5>
          <p> Ruby is a store of luxurious home decoration and gifts. We are passionate about<br /> doing our part to make life better. We provide high-quality merchandise, great value,<br /> and exceptional customer service. We connect people with products and services in <br />new and unexpected ways. We do our part to create dream homes for all.</p>
          <input type="search" placeholder="Search" style={{ backgroundColor: "#f8f9fa00" }} /><br />
          <button >SUBMIT</button>
        </div>
      </section>
      <section style={{ overflow: "hidden" }}>
        <Tabs>
          <div label=" Design secsion ">
            <div className='products '>
              <div className='row'>

                <div className='col-sm-12'>

                  <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                    <div>
                      <div className="row product-containt12" style={{ textAlign: "center" }}>
                        <Image src="/images/design_3.jpg" width={457} height={457}></Image>

                      </div>
                    </div>

                    <div>

                    </div>
                    <div>
                      <div className="product-containt11" style={{ textAlign: "center" }}>
                        <Image src="/images/design_4.jpg" width={457} height={457}></Image>
                      </div>

                    </div>


                  </div>

                </div>

              </div>
              <div className='row'>

                <div className='col-sm-12'>
                  <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                    <div>
                      <div className="row product-containt12" style={{ textAlign: "center" }}>
                        <Image src="/images/design_1.jpg" width={457} height={457}></Image>

                      </div>
                    </div>
                    <div>
                      <div className="product-containt11" style={{ textAlign: "center" }}>
                        <Image src="/images/design_2.jpg" width={457} height={457}></Image>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
              <div className='row'>

                <div className='col-sm-12'>
                  <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                    <div>
                      <div className="row product-containt12" style={{ textAlign: "center" }}>
                        <Image src="/images/design_5.jpg" width={457} height={457}></Image>

                      </div>
                    </div>
                    <div>
                      <div className="product-containt11" style={{ textAlign: "center" }}>
                        <Image src="/images/design_6.jpg" width={457} height={457}></Image>
                      </div>
                    </div>



                  </div>
                </div>

              </div>

            </div>
          </div>
          <div label="Wall painting" >

            <div className='products '>
              <div className='row'>

                <div className='col-sm-12'>

                  <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                    <div>
                      <div className="row product-containt12" style={{ textAlign: "center" }}>
                        <Image src="/images/category_5.png" width={457} height={457}></Image>

                      </div>
                      <p style={{ marginTop: "10px", fontSize: "15px" }}><b>compositions</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>
                    </div>

                    <div>

                    </div>
                    <div>
                      <div className="product-containt11" style={{ textAlign: "center" }}>
                        <Image src="/images/category_6.png" width={457} height={457}></Image>
                      </div>
                      <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "140px" }}><b>Nature prints</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>

                    </div>


                  </div>

                </div>

              </div>
              <div className='row'>

                <div className='col-sm-12'>
                  <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                    <div>
                      <div className="row product-containt12" style={{ textAlign: "center" }}>
                        <Image src="/images/category_2.png" width={457} height={457}></Image>

                      </div>
                      <p style={{ marginTop: "10px", fontSize: "15px" }}><b>abstraction</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>
                    </div>
                    <div>
                      <div className="product-containt11" style={{ textAlign: "center" }}>
                        <Image src="/images/category_3.png" width={457} height={457}></Image>
                      </div>
                      <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "140px" }}><b>geometry</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>
                    </div>



                  </div>
                </div>

              </div>
              <div className='row'>

                <div className='col-sm-12'>
                  <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                    <div>
                      <div className="row product-containt12" style={{ textAlign: "center" }}>
                        <Image src="/images/category_4.png" width={457} height={457}></Image>

                      </div>
                      <p style={{ marginTop: "10px", fontSize: "15px" }}><b>watercolor</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>
                    </div>
                    <div>
                      <div className="product-containt11" style={{ textAlign: "center" }}>
                        <Image src="/images/category_1.png" width={457} height={457}></Image>
                      </div>
                      <p style={{ marginTop: "10px", fontSize: "15px", marginLeft: "140px" }}><b>Print & poster</b> <br /><span style={{ color: "#302E2D" }}>$250</span> </p>
                    </div>



                  </div>
                </div>

              </div>

            </div>
          </div>
          <div label="Interior decoration">
            <div className='products '>
              <div className='row'>

                <div className='col-sm-12'>

                  <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                    <div>
                      <div className="row product-containt12" style={{ textAlign: "center" }}>
                        <Image src="/images/inteirior_1.jpg" width={457} height={457}></Image>

                      </div>
                    </div>

                    <div>

                    </div>
                    <div>
                      <div className="product-containt11" style={{ textAlign: "center" }}>
                        <Image src="/images/inteirior_2.jpg" width={457} height={457}></Image>
                      </div>

                    </div>


                  </div>

                </div>

              </div>
              <div className='row'>

                <div className='col-sm-12'>
                  <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                    <div>
                      <div className="row product-containt12" style={{ textAlign: "center" }}>
                        <Image src="/images/inteirior_3.jpg" width={457} height={457}></Image>

                      </div>
                    </div>
                    <div>
                      <div className="product-containt11" style={{ textAlign: "center" }}>
                        <Image src="/images/inteirior_4.jpg" width={457} height={457}></Image>
                      </div>
                    </div>



                  </div>
                </div>

              </div>
              <div className='row'>

                <div className='col-sm-12'>
                  <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                    <div>
                      <div className="row product-containt12" style={{ textAlign: "center" }}>
                        <Image src="/images/inteirior_5.jpg" width={457} height={457}></Image>

                      </div>
                    </div>
                    <div>
                      <div className="product-containt11" style={{ textAlign: "center" }}>
                        <Image src="/images/inteirior_6.jpg" width={457} height={457}></Image>
                      </div>
                    </div>



                  </div>
                </div>

              </div>

            </div>
          </div>
          <div label="Gift section">
            <div className='products '>
              <div className='row'>

                <div className='col-sm-12'>

                  <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                    <div>
                      <div className="row product-containt12" style={{ textAlign: "center" }}>
                        <Image src="/images/gift_1.jpg" width={457} height={457}></Image>

                      </div>
                    </div>

                    <div>

                    </div>
                    <div>
                      <div className="product-containt11" style={{ textAlign: "center" }}>
                        <Image src="/images/gift_2.jpg" width={457} height={457}></Image>
                      </div>

                    </div>


                  </div>

                </div>

              </div>
              <div className='row'>

                <div className='col-sm-12'>
                  <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                    <div>
                      <div className="row product-containt12" style={{ textAlign: "center" }}>
                        <Image src="/images/gift_3.jpg" width={457} height={457}></Image>

                      </div>
                    </div>
                    <div>
                      <div className="product-containt11" style={{ textAlign: "center" }}>
                        <Image src="/images/gift_4.jpg" width={457} height={457}></Image>
                      </div>
                    </div>



                  </div>
                </div>

              </div>
              <div className='row'>

                <div className='col-sm-12'>
                  <div className='d-flex mt-5' style={{ justifyContent: "center" }}>
                    <div>
                      <div className="row product-containt12" style={{ textAlign: "center" }}>
                        <Image src="/images/gift_5.jpg" width={457} height={457}></Image>

                      </div>
                    </div>
                    <div>
                      <div className="product-containt11" style={{ textAlign: "center" }}>
                        <Image src="/images/gift_6.jpg" width={457} height={457}></Image>
                      </div>
                    </div>



                  </div>
                </div>

              </div>

            </div>
          </div>
        </Tabs>
      </section>
      <section style={{ overflow: "hidden" }}>
        <div className='fall ' style={{ textAlign: "center" }}>
          <h5>Unique fall collection 2021 </h5>
          <p>From statement side tables to stylish cabinets and luxurious sofas, discover <br />the curation of styles and designers for this fall.</p>
          <Image src="/images/fall.png" width={976} height={552}></Image>
        </div>
      </section>
      <section style={{ overflow: "hidden" }}>
        <div className='row '>
          <div className='col-sm-3'>

          </div>
          <div className='col-sm-6 d-flex stay' >
            <div>
              <h1>Stay in touch</h1>
              <p>Sign up for emails packed <br />with finds and inspiration</p>
            </div>
            <div style={{ marginLeft: "160px" }}>
              <input type="email" placeholder="Enter your Email" style={{ backgroundColor: "#f8f9fa00" }} /><br />
              <button >SUBMIT</button>
            </div>
          </div>
          <div className='col-sm-3'>

          </div>

        </div>
      </section>
      <section style={{ overflow: "hidden" }}>
        <div className='follow'>
          <h5>Follow us<i class="fa fa-instagram ml-4 pt-3"></i></h5>
          <div className='d-flex mt-5'>
            <Image src="/images/follow_1.png" width={290} height={340}></Image>
            <Image src="/images/follow_2.png" width={290} height={340}></Image>
            <Image src="/images/follow_3.png" width={290} height={340}></Image>
            <Image src="/images/follow_4.png" width={290} height={340}></Image>
            <Image src="/images/follow_5.png" width={290} height={340}></Image>
            <Image src="/images/follow_6.png" width={290} height={340}></Image>
          </div>
        </div>
      </section>
     <Footer/>
    
  
    </>
  )
}
