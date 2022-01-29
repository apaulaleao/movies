import React from 'react';
import {Link} from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa';
import  './Header.css';

function Header() {
return( 
<div className="header">
    <Link to ="/">
    <div className = "logo">PowFlix</div>
    </Link>

<div className="user-image">
    <img src={<FaUserAlt/>} alt="user"/>
</div>

</div>
);
};

export default Header;
