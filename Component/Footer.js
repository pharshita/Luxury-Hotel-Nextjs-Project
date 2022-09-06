
export default function Footer() {
  return (
    <div>
        <div className="footer" style={{ backgroundColor: "#302E2D", color: "#F6F1EC" }}>
          <div className='d-flex'>
            <div className='contact'>
              <h6>Contacts</h6>
              <p>+38 (067) 374 36 92<br />info@rubydecor.com.ua<br />Opening hours: Mon-Fri 10:00-19:00<br /> Sat 10: 00-18: 00; Sun - day off</p>
            </div>
            <div className='info'>
              <h6>Information</h6>
              <p>Vacancies <br /> Public offer agreement<br />Terms of exchange & return of goods</p>
            </div>
            <div className='menu'>
              <h6>Menu</h6>
              <p>
                <li>
                  <a>About us</a>

                </li>
                <li>
                  <a>Payment and delivery</a>
                </li>
                <li>
                  <a>Store</a>
                </li>
                <li>
                  <a>Contact us</a>
                </li>
              </p>
            </div>
            <div className='social'>
              <h6>We are in social networks</h6>
              <div>
                <p className='ml-1'>
                  <a>Instagram</a> <br />
                  <a>Facebook</a> <br />
                  <a>Telegram</a> <br />
                  <a> Pinterest</a> <br />
                </p>
              </div>
            </div>
          </div>
          <div className='d-flex ml-5 mt-4 pt-4' style={{ width: "94%", borderTop: "1px solid #F6F1EC" }}>
            <p >Ruby | home decoration and gifts </p>
            <p className='p1'> All rights reserved © 2021</p>
          </div>
        </div>

    </div>
  )
}
