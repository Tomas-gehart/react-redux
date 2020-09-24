import { Link } from 'react-router-dom';
import React from 'react';

const SplashHeader = () => (
    <div className="splash-top-header">
        <div>
            <Link className="rightside" to='/signin'><button>Sign In</button></Link>
            <Link className="rightside" to='/signup'><button>TRY FOR FREE</button></Link>
        </div>
    </div>
);

export default SplashHeader; 