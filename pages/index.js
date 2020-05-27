import Head from 'next/head'

export default function Home() {
  return (
    <div>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"/>
			<link rel="stylesheet" href="css/linearicons.css"/>
			<link rel="stylesheet" href="css/font-awesome.min.css"/>
			<link rel="stylesheet" href="css/magnific-popup.css"/>
			<link rel="stylesheet" href="css/nice-select.css"/>
			<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"/>
			<link rel="stylesheet" href="css/bootstrap.css"/>
			<link rel="stylesheet" href="css/main.css"></link>
      </Head>

      <main>
      <div>
      <header className="default-header">
        <div className="container">
          <div className="header-wrap">
            <div className="header-top d-flex justify-content-between align-items-center">
              <div className="logo">
                <a href="#home"><img src="img/logo.png" alt="" /></a>
              </div>
              <div className="main-menubar d-flex align-items-center">
                <nav className="hide">
                  <a href="#home">Home</a>
                  <a href="#project">Projects</a>
                  <a href="#about">About</a>
                  <a href="#donate">Donate</a>
                </nav>
                <div className="menu-bar"><span className="lnr lnr-menu" /></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End Header Area */}
      {/* start banner Area */}
      <section className="banner-area relative" id="home">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row fullscreen align-items-center justify-content-start" style={{height: '915px'}}>
            <div className="banner-content col-lg-9 col-md-12">
              <h1>
                Your Donation <br />
                is Others Inspiration
              </h1>
              <a href="#donate" className="head-btn btn text-uppercase">Donate Now</a>
            </div>
          </div>
        </div>
      </section>
      {/* End banner Area */}
      {/* Start callto Area */}
      <section className="callto-area relative">
        <div className="container">
          <div className="row d-flex callto-wrap justify-content-between pt-40 pb-40">
            <h3 className="text-white">Please Help them and Donate now</h3>
            <a href="#" className="head-btn head-btn2 btn text-uppercase">Donate Now</a>
          </div>
        </div>
      </section>
      {/* End callto Area */}
      {/* Start project Area */}
      <section className="project-area section-gap" id="project">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 pb-80 header-text">
              <h1>Waiting for Help</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br /> labore  et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 project-wrap">
              <div className="single-project">
                <div className="content">
                  <a href="#" target="_blank">
                    <div className="content-overlay" />
                    <img className="content-image img-fluid d-block mx-auto" src="img/p1.jpg" alt="" />
                  </a><div className="content-details fadeIn-bottom"><a href="#" target="_blank">
                    </a><a href="#" className="head-btn btn text-uppercase">Donate Now</a>
                  </div>
                </div>
              </div>
              <div className="details">
                <a href="#"><h2>Easy Flight Search</h2></a>
                <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</p>
                <a className="text-uppercase" href="#">read more</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 project-wrap">
              <div className="single-project">
                <div className="content">
                  <a href="#" target="_blank">
                    <div className="content-overlay" />
                    <img className="content-image img-fluid d-block mx-auto" src="img/p2.jpg" alt="" />
                  </a><div className="content-details fadeIn-bottom"><a href="#" target="_blank">
                    </a><a href="#" className="head-btn btn text-uppercase">Donate Now</a>
                  </div>
                </div>
              </div>
              <div className="details">
                <a href="#"><h2>Easy Flight Search</h2></a>
                <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</p>
                <a className="text-uppercase" href="#">read more</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 project-wrap">
              <div className="single-project">
                <div className="content">
                  <a href="#" target="_blank">
                    <div className="content-overlay" />
                    <img className="content-image img-fluid d-block mx-auto" src="img/p3.jpg" alt="" />
                  </a><div className="content-details fadeIn-bottom"><a href="#" target="_blank">
                    </a><a href="#" className="head-btn btn text-uppercase">Donate Now</a>
                  </div>
                </div>
              </div>
              <div className="details">
                <a href="#"><h2>Easy Flight Search</h2></a>
                <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</p>
                <a className="text-uppercase" href="#">read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End project Area */}
      {/* Start about Area */}
      <section className="about-area" id="about">
        <div className="container-fluid">
          <div className="row d-flex justify-content-end align-items-center">
            <div className="col-lg-6 col-md-12 about-left no-padding">
              <img className="img-fluid" src="img/about-img.jpg" alt="" />
            </div>
            <div className="col-lg-6 col-md-12 about-right">
              <h1>A very Lovely Welcome <br />
                to our Company</h1>
              <p>
                inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.
              </p>
              <button className="primary-btn mt-20 text-uppercase ">learn more<span className="lnr lnr-arrow-right" /></button>
            </div>
          </div>
        </div>
      </section>
      {/* End about Area */}
      {/* Start volunteer Area */}
      <section className="volunteer-area section-gap">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 pb-80 header-text">
              <h1>Our Volunteers</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br /> labore  et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 vol-wrap">
              <div className="single-vol">
                <div className="content">
                  <a href="#" target="_blank">
                    <div className="content-overlay" />
                    <img className="content-image img-fluid d-block mx-auto" src="img/v1.jpg" alt="" />
                    <div className="content-details fadeIn-bottom">
                      <h4>Andy Florence</h4>
                      <p>
                        inappropriate behavior
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 vol-wrap">
              <div className="single-vol">
                <div className="content">
                  <a href="#" target="_blank">
                    <div className="content-overlay" />
                    <img className="content-image img-fluid d-block mx-auto" src="img/v2.jpg" alt="" />
                    <div className="content-details fadeIn-bottom">
                      <h4>Andy Florence</h4>
                      <p>
                        inappropriate behavior
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 vol-wrap">
              <div className="single-vol">
                <div className="content">
                  <a href="#" target="_blank">
                    <div className="content-overlay" />
                    <img className="content-image img-fluid d-block mx-auto" src="img/v3.jpg" alt="" />
                    <div className="content-details fadeIn-bottom">
                      <h4>Andy Florence</h4>
                      <p>
                        inappropriate behavior
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 vol-wrap">
              <div className="single-vol">
                <div className="content">
                  <a href="#" target="_blank">
                    <div className="content-overlay" />
                    <img className="content-image img-fluid d-block mx-auto" src="img/v4.jpg" alt="" />
                    <div className="content-details fadeIn-bottom">
                      <h4>Andy Florence</h4>
                      <p>
                        inappropriate behavior
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End volunteer Area */}
      {/* Start donate Area */}
      <section className="donate-area relative section-gap" id="donate">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row d-flex justify-content-end">
            <div className="col-lg-6 col-sm-12 pb-80 header-text">
              <h1>Donate Now</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br /> tempor incididunt ut labore  et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 contact-left">
              <div className="single-info">
                <h4>Divided Evenly</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,” <br /> women face higher conduct women face higher conduct.
                </p>
              </div>
              <div className="single-info">
                <h4>Transperancy All the Way</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,” <br /> women face higher conduct women face higher conduct.
                </p>
              </div>
              <div className="single-info">
                <h4>Trustworthy</h4>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,” <br /> women face higher conduct women face higher conduct.
                </p>
              </div>
            </div>
            <div className="col-lg-6 contact-right">
              <form className="booking-form" id="myForm" action="donate.php">
                <div className="row">
                  <div className="col-lg-12 d-flex flex-column">
                    <select name="type" className="app-select form-control" required>
                      <option data-display="Project you want to donate">Project you want to donate</option>
                      <option value={1}>Donate type 1</option>
                      <option value={2}>Donate type 2</option>
                      <option value={3}>Donate type 3</option>
                    </select>
                  </div>
                  <div className="col-lg-6 d-flex flex-column">
                    <input name="fname" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" className="form-control mt-20" required type="text" />
                  </div>
                  <div className="col-lg-6 d-flex flex-column">
                    <input name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" className="form-control mt-20" required type="email" />
                  </div>
                  <div className="col-lg-12 d-flex flex-column">
                    <input name="amound" placeholder="Donation amount (USD)" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Donation amount (USD)'" className="form-control mt-20" required type="text" />
                    <textarea className="form-control mt-20" name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required defaultValue={""} />
                  </div>
                  <div className="col-lg-12 d-flex justify-content-end send-btn">
                    <button className="submit-btn primary-btn mt-20 text-uppercase ">donate<span className="lnr lnr-arrow-right" /></button>
                  </div>
                  <div className="alert-msg" />
                </div>
              </form>
              <p className="payment-method">
                We Accept :   <img src="img/payment.png" alt="" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
      </main>

      <footer>
      <footer class="footer-area section-gap">
      <div class="container">
        <div class="row d-flex flex-column justify-content-center">
          <ul class="footer-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#donate">Donate</a></li>
          </ul>
          <div class="footer-social">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-dribbble"></i></a>
            <a href="#"><i class="fa fa-behance"></i></a>
          </div>
          <p class="footer-text m-0">
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
          </p>
        </div>
      </div>
    </footer>
      </footer>

    </div>
  )
}
