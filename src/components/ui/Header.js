import React from 'react'
import logo from '../../img/logo.png';

export default function Header() {
    return (
        <div>
            <header className='center'>
                <img src={logo} alt="logo"/>
            </header>
        </div>
    )
}
