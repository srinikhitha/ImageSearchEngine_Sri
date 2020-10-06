import React from 'react';


function App() {
  return (

      <div>
        <meta charSet="utf-8" />
        <title>Image Search</title>
        <link rel="stylesheet" href="Login Form.css" />
        <link href="https://fonts.googleapis.com/css?family=Coiny" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet" />
        
        <form className="container" action method="GET">
          <h1>Image Search Engine</h1>
          <input type='text' placeholder="search"></input>
          {/* <button type="button" className="btn btn-info">
            <span className="glyphicon glyphicon-search"></span>
          </button> */}
        </form>
      </div>

  );
}

export default App;
