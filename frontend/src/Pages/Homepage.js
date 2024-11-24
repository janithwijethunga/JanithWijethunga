import React from 'react'
import { Link } from 'react-router-dom';


function Homepage() {
  return (
    <div>
        <h1>Welcome to our website!</h1>
        <p>This is the homepage of our website.</p>
        

        <Link to="/page1"><button>
              Go to Page 1 
            </button>
            </Link>

    </div>
  )
}

export default Homepage