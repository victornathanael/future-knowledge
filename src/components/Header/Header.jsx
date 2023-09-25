import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

import './Header.css';

import fkLogoHeader from '../../assets/future-knowledge-logo.png';
import profilePhoto from '../../assets/profile-photo.svg';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div id='header-container'>
                <Link to={'/'}>
                    <img
                        id='future-knowledge-logo'
                        src={fkLogoHeader}
                        alt='image written future knowledge'
                    />
                </Link>
                <div id='navbar'>
                    <div id='links'>
                        <p>AULAS</p>
                        <p>DESAFIO</p>
                        <p>
                            <Link to={'/ranking'} className='ranking-text'>
                                RANKING
                            </Link>
                        </p>
                        <p>FEEDBACKS</p>
                    </div>
                    <img id='profile-photo' src={profilePhoto} alt='profile image' />
                    <Link className='side-navbar-button-open' onClick={() => setIsOpen(!isOpen)}>
                        <AiOutlineMenu />
                    </Link>
                </div>
            </div>
            {isOpen && (
                <>
                    <div className='fade'></div>
                    <div id='side-navbar'>
                        <ul className='side-navbar__links'>
                            <li>
                                <img
                                    className='side-navbar-photo'
                                    src={profilePhoto}
                                    alt='profile image'
                                />
                            </li>
                            <li>
                                <Link
                                    className='side-navbar-button-close'
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <AiOutlineClose />
                                </Link>
                            </li>
                            <li>AULA</li>
                            <li>DESAFIO</li>
                            <Link to={'/ranking'} className='ranking-text'>
                                <li>RANKING</li>
                            </Link>
                            <li>FEEDBACKS</li>
                        </ul>
                    </div>
                </>
            )}
        </header>
    );
}
