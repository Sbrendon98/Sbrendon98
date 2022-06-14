import './App.css';
import { userContext } from './context'
import React, { useContext } from 'react';
import { Login } from './login';


function App() {
  const { user } = useContext(userContext)
  console.log(user.auth)
  return (
    <>
    {user.auth === false ? <Login /> : <div className="App">
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
        </div>}
        
    </>
  );
}

export default App;
