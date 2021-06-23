import './App.css';

function App() {
  return (
    <div className="App">
      <div class="main">
      
        <img class="logo" src="b.jpg"/>
        <img class="self" src="MyPhoto1.jpeg"/>
      
        <p>Bhaskar Ajmera<br/>bhaskarajmera246@gmail.com</p>
      
        <div class="anchor">
          <ul>
            <li class="activeMoto"><a href="#">Motivation</a></li>
            <li><a href="#">Productivity</a></li>
            <li><a href="#">Design</a></li>
            <li><a href="#">Study</a></li>
          </ul>   
        </div>
      
        <div class="ads">
          <img src="boost.jpg"/>
          <p>Pro account is more<br/>powerful. Get 30% off<br/><br/><a href="#">Buy now</a></p>
        
        </div>

        <div class="feed">

          <h1>Motivation</h1>

          <ul>
            <li class="activeAll"><a href="#">All</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Video</a></li>
            <li><a href="#">Downloads</a></li>        
          </ul>

          <div class="post">
          
            <img id="pic1" src="img1.jpg" />
            <img id="pic2" src="img2.jpg" />
            <img id="pic3" src="img3.jpg" />
            <img id="pic4" src="img4.jpg" />
            <img id="pic5" src="img5.jpg" />
            <img id="pic6" src="img6.jpg" />

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;