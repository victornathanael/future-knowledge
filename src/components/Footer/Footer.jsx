import './Footer.css';

import { Link } from 'react-router-dom';

import fkLogoFooter from '../../assets/future-knowledge-logo-footer.png';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import youtubeIcon from '../../assets/youtube-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';

export default function Footer() {
    return (
        <footer>
            <div id='footer-container'>
                <div id='info-site'>
                    <img id='future-knowledge-logo-footer' src={fkLogoFooter} alt='' />
                    <div id='info-site-links'>
                        <p>Termos de Uso</p>
                        <p>Política de Privacidade</p>
                        <p>Cookies</p>
                    </div>
                </div>
                <div id='future-experience'>
                    <h4>FUTURE EXPERIENCE</h4>
                    <ul>
                        <li>Home</li>
                        <li>Mural de avisos</li>
                    </ul>
                </div>
                <div id='student-dashboard'>
                    <h4>PAINEL DO ALUNO</h4>
                    <ul>
                        <li>Aulas</li>
                        <li>Desafios</li>
                        <Link to={'/ranking'}>
                            <li>Ranking</li>
                        </Link>
                        <li>Feedbacks</li>
                    </ul>
                </div>
                <div id='social-media'>
                    <h4>SOCIAL MEDIA</h4>
                    <div id='icons'>
                        <img src={linkedinIcon} alt='icon of linkedin' />
                        <img src={youtubeIcon} alt='icon of youtube' />
                        <img src={instagramIcon} alt='icon of instagram' />
                    </div>
                </div>
            </div>
        </footer>
    );
}
