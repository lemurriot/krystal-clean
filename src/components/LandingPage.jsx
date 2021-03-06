import React from 'react';
import Header from './Header';
import Contact from './Contact';
import Nav from './Nav';
import About from './About';
import { ParallaxProvider } from 'react-scroll-parallax';





class LandingPage extends React.Component {

  render(){
    return (
      <ParallaxProvider>
        <div className="landingpage-container">
          <style jsx>{`
            .landingpage-container {
              width: 100vw;
            }
              `}</style>
          <Header />
          <About />
          <Contact />
          <Nav />
        </div>
      </ParallaxProvider>
    );
  }
}
export default LandingPage;
