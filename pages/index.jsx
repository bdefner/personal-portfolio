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
              src="assets/Portrait.png"
              alt="Portrait sketch of Beppino"
              id="portrait-img"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
