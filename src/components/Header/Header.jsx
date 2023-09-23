import './Header.css';
import fkLogoHeader from '../../assets/future-knowledge-logo.png';
import profilePhoto from '../../assets/profile-photo.svg';

export default function Header() {
    return (
        <header id='header-container'>
            <img
                id='future-knowledge-logo'
                src={fkLogoHeader}
                alt='image written future knowledge'
            />
            <div id='items-header'>
                <div id='links'>
                    <p>AULAS</p>
                    <p>DESAFIO</p>
                    <p>RANKING</p>
                    <p>FEEDBACKS</p>
                </div>
                <img id='profile-photo' src={profilePhoto} alt='profile image' />
            </div>
        </header>
    );
}
