import React from "react";
import "./HomeCss.css";
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from '../Footer/Footer';

const Home = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {"E00CFA76-5B724F32-A0B9734D-806D0705"}
    scrollingSpeed = {1000} /* Options here */
    

    render={({ state, fullpageApi }) => {

      return (
        <ReactFullpage.Wrapper>

          <div className="section">
            <div className='home1'>
              <div className="homeText1">
                <div className='homeContainerLeft1'>
                  <div className="homeTitle1">
                    <h1>Let's</h1>
                    <h1>Take It Slōw</h1>
                  </div>
                  <div className="homeP1">
                    <p>Graphism and Digital Studio</p>
                    <p>We take the time to listen to your wishes</p>
                    <p>to achieve great projects together.</p>
                  </div>
                </div>
                <div className='homeContainerRight1'>
                  <button className="homeButton1" onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="section">
            <div className='home2'>
              <div className="homeText2">
                <div className='homeContainerLeft2'>
                  <div className="homeTitle2">
                    <h1>Brand Identity</h1>
                  </div>
                  <div className="homeP2">
                    <p>We propose to help you to establish your Brand Identity, creating strong logotypes and wordmarks.</p>
                    <p>We will also develop your visual identity on the different supports you may need.</p>
                  </div>
                </div>
                <div className='homeContainerRight2'>
                  <button className="homeButton2" onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="section">
            <div className='home3'>
              <div className="homeText3">
                <div className='homeContainerLeft3'>
                  <div className="homeTitle3">
                    <h1>Digital</h1>
                  </div>
                  <div className="homeP3">
                    <p>Being visible on Internet has become essential for any company.</p>
                    <p>We offer you to build modern and dynamic websites to facilitate and improve your development.</p>
                  </div>
                </div>
                <div className='homeContainerRight3'>
                  <button className="homeButton3" onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="section">
            <div className='home4'>
              <div className="homeText4">
                <div className='homeContainerLeft4'>
                </div>
                <div className='homeContainerRight4'>
                  <button className="homeButton4" onClick={() => fullpageApi.moveSectionUp()}>
                    Click me to move up
                  </button>
                </div>
              </div>
            </div>
          </div>

          
          <div class="section fp-auto-height">
            <Footer />
          </div>

        </ReactFullpage.Wrapper>
      );
    }}
  />
)

export default Home;
