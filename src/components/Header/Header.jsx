import './Header.css';
import futureKnowledgeLogo from '../../assets/future-knowledge-logo.png';
import profilePhoto from '../../assets/profile-photo.svg';

export default function Header() {
    return (
        <header>
            <div id='header-container'>
                <img
                    id='future-knowledge-logo'
                    src={futureKnowledgeLogo}
                    alt='image written future knowledge'
                />
                <div id='links-container'>
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
