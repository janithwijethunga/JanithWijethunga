import React from 'react'
import { Link } from 'react-router-dom';

function Page1() {
  return (
    <div>
      <p>This is the Page 1 of our website.</p>
      

      <Link to="/"><button>
              Go to Homepage 
            </button>
            </Link>
    </div>
  )
}

export default Page1