import Head from 'next/head'

export default function Header() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <section>
        <div className='banner'>
          <div className='row'>
            <div className='col-sm-4 '>
              <ul >
                <a>About</a>
                <a >Brands</a>
                <a>Blog</a>
              </ul>
            </div>
            <div className='col-sm-2'>
              <h1>RUBY</h1>
            </div>
            <div className='col-sm-3'>
              <div className='search-box'>
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <ul >
              <i className=" fa fa-heart-o"></i>
              <i className="ml-5 fa fa-user-o"></i>
              <i className="ml-5 fa fa-shopping-bag"></i>
            </ul>
          </div>
        </div>
      </div>
    </section>
   
    </>
  )
}
