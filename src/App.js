import './App.css';
import { useState } from 'react'


function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 

  const handleLogin = (e) => {
    e.preventDefault()
    let payload = {email, password}
  }
  return (
    <div className="App">
      <div className="loginForm">
        <input type="text" id="email" placeholder="Email" value={email} />
        <input type="text" id="password" placeholder="Password" value={password} />
      </div>
      <main className="Main-header">
        <div className="blog-container">
          <div className="header-container">
            <h1>Featured Articles</h1>
            <button>View All</button>
          </div>
          <div className="header-line"></div>
          <div className="card-container">
            <div className="blog-card">
              <div className="card-info">
                <h2>03.12.22</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button>READ MORE</button>
              </div>
            </div>
            <div className="blog-card">
              <div className="card-info">
                <h2>03.12.22</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button>READ MORE</button>
              </div>
            </div>
            <div className="blog-card">
              <div className="card-info">
                <h2>03.12.22</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button>READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
