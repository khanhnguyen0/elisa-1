import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import BackTube from 'back-tube'
import img from './assets/2.jpeg'
import img2 from './assets/3.jpeg'
import Gallery from './gallery'
class App extends Component {
  componentDidMount() {
    new BackTube(document.querySelector('.one'), {
      videoId: 'aUT9cyAy4cs',
      playerSettings: {
        quality: 'highres',
        end: 160
      }
    });

  }
  render() {
    return (
      <div className="App">
        <div className="container one">
          <div id = "text-1">
          <h1>DJI - SPARK</h1>
          <p>A drone that designed for everyone, especially for you</p>
          <p>Making your own breath taking video,</p>
          <p>like a Pro</p>
          <a id="buy-it-now" href ="https://elisa.fi/kauppa/#!/laitteet/muut-laitteet/DJI-Spark--drone">Buy it now</a>
          </div>
        </div>

        <div className="container two">
          <div id="text-2">
            <p>
              <span>Small.</span>
              Spark is only the size of your palm, you can take it with you anywhere.</p>
            <p>
              <span>Smart.</span>
              With the latest DJI technology, Spark is especially easy to launch and control. DJI Go app also enables editing and sharing on various social media with simple clicks.</p>
            <p>
              <span>Smooth.</span>
              Spark has its built-in sensors and stabilization. With Spark you don’t need to be an expert to make a smooth aerial video.</p>
            <a href="https://elisa.fi/kauppa/#!/laitteet/muut-laitteet/DJI-Spark--drone">buy it now</a>
          </div>
          <div id="text-3">
            <div>
            <span>Perfect for any occasion</span>
            <p>From birthdays and weddings to sports and travelings. Dji spark is always your perfect choice to record your best and extraordinary memories.
            </p>
          </div>
          </div>
          <div id = "button-4">
            <a href = "https://elisa.fi/kauppa/#!/laitteet/muut-laitteet/DJI-Spark--drone">buy it now</a>
          </div>
          <img src={img}/>
      </div>

      <div className="container three">
        <div id = "text-4">
          <span id = "price">16.92€</span><span id = "month"> /Month</span>
          <p><span>Buy it now from Elisa webshop </span></p>
          <a href ="https://elisa.fi/kauppa/#!/laitteet/muut-laitteet/DJI-Spark--drone">Buy it now</a>
        </div>
        <img src={img2}/>
      </div>
      <div id = "credit">
        <p>Elisa UX Design prototype Test A  #Yuexin Du</p>
      </div>
      </div>
    );
  }
}

export default App;


// <Gallery/>
