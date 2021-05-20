import './App.css';

import Card from './Card'

function App() {
  return (
    <div className="app">
      
      <div className="horizontalnav">
          <h2> Gopher rrm003 </h2>
      </div>

      <div class="grid" style={{overflow:"auto"}}>
          <div class="menu">
              <ul>
                  <li><a class="active" href="#home">Home</a></li>
                  <li><a href="#news">News</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a class="active" href="#home">Home</a></li>
                  <li><a href="#news">News</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a class="active" href="#home">Home</a></li>
                  <li><a href="#news">News</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a class="active" href="#home">Home</a></li>
                  <li><a href="#news">News</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a class="active" href="#home">Home</a></li>
                  <li><a href="#news">News</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a class="active" href="#home">Home</a></li>
                  <li><a href="#news">News</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#about">About</a></li>
              </ul>
          </div>

          <div class="main">
            <h2>Lorum Ipsum</h2>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div class="right">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
      </div>
      
      <div className="bottombar">
          <div>© copyright w3schools.com</div>
          <div className="social">
              <a href="#" class="fa fa-github"></a>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-instagram"></a>
          </div>
          </div>
    </div>
  );
}

export default App;
