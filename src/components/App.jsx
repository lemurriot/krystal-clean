import React from 'react';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render(){
    const appStyleSheet = {
      width: '100vw',
      position: 'relative'
    };
    return (
      <div style={appStyleSheet}>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Basic|Concert+One|Oswald');
          * {
            box-sizing: border-box;
            margin: 0%;
          }
          html,
          body {
              overflow-x: hidden;
          }
          a {
            text-decoration: none;
          }
          .main-container {
            margin: 0% 4%;
            padding: 8%;
            background-color: white;
          }
          .slideshow img {
            height: 74vh;
            object-fit: cover;
          }
          @media screen and (max-width: 900px){
            .main-container {
              height: 165vh;
            }
          @media screen and (max-width: 745px){
            .main-container {
              height: 195vh;
            }
          @media screen and (max-width: 500px){
            .main-container {
              margin: 3% 4%;
            }
            `}
        </style>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
