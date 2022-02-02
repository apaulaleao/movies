import * as S from './styled';
import React from 'react';
import {Link} from 'react-router-dom';
import { FaUser } from "react-icons/fa";

export default function Header()  {
return( 
    <S.Container>
<div className="header">
    <Link to ="/">
    <div className ="logo">Entertainment PowFlix</div>
    </Link>

<div className="user-image">
    <img src={FaUser} alt="user"/>
</div>

</div>
</S.Container>
);
};

