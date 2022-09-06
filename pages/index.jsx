import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 data-cy="homePageTitle" className="title">
              <span class="biggest-text">Hi!</span> <br />
              My name is <span class="point-out-span"> Beppino </span>
            </h1>
            <p className="description">
              I'm on my way of becoming a web developer and am currently in the
              UpLeveled Bootcamp, learning and building my portfolio.
            </p>

            <Link href="/contact">
              <a className="cta">Get in touch</a>
            </Link>
          </div>

          <div className="image-wrapper">
            <img
              src="Portrait-v2.png"
              alt="Portrait sketch of Beppino"
              id="portrait-img"
            />
          </div>
        </div>
      </section>
      <section id="skills-section">
        <div class="container">
          <h2 class="align-center">Im working with...</h2>
          <div class="skills-container">
            <div>
              <img src="/logos/HTML.png" alt="HTML5 Logo" class="skills-logo" />
            </div>
            <div>
              <img src="/logos/CSS.png" alt="CSS3 Logo" class="skills-logo" />
            </div>
            <div>
              <img
                src="/logos/JavaScript.png"
                alt="JavaScript Logo"
                class="skills-logo"
              />
            </div>
            <div>
              <img
                src="/logos/react.png"
                alt="React Logo"
                class="skills-logo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
