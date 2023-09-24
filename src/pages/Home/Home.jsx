import './Home.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import videoImage from '../../assets/video-image.png';
import playerButton from '../../assets/player-button.svg';
import noticeGirlImage from '../../assets/notice-girl-image.svg';
import BackgroundHome from '../../components/BackgroundHome/BackgroundHome';

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <BackgroundHome />
                <div id='video-container'>
                    <div id='text-video'>
                        <h1>HOME</h1>
                        <h2>Continue assistindo:</h2>
                        <div id='video-player'>
                            <img id='video' src={videoImage} alt='video player' />
                            <img id='button-player' src={playerButton} alt='player button' />
                        </div>
                    </div>
                </div>
                <div id='line'>
                    <hr />
                </div>
                <div id='recent-notices'>
                    <div id='notices'>
                        <h3>Avisos recentes</h3>
                        <div id='notice1'>
                            <div id='profile'>
                                <img src={noticeGirlImage} alt='picture of a girl' />
                                <p id='name'>Nome [Função]</p>
                            </div>
                            <p id='description'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
                                doloremque rem voluptatem eos sit voluptates, inventore corporis!
                                Nihil, incidunt! Rem repellat voluptatem fuga possimus corporis
                                consectetur blanditiis nihil quas sed. Reprehenderit enim quos nihil
                                sint reiciendis laudantium ab pariatur nesciunt autem
                                exercitationem! Laudantium mollitia maiores dicta praesentium nulla,
                                ea doloribus sint pariatur aperiam corrupti? Dolorem sit vel rem
                                pariatur sunt.
                            </p>
                            <p id='date'>Data</p>
                            <p id='see-more'>Ver mais</p>
                        </div>
                        <div id='notice2'>
                            <div id='profile'>
                                <img src={noticeGirlImage} alt='picture of a girl' />
                                <p id='name'>Nome [Função]</p>
                            </div>
                            <p id='description'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
                                doloremque rem voluptatem eos sit voluptates, inventore corporis!
                                Nihil, incidunt! Rem repellat voluptatem fuga possimus corporis
                                consectetur blanditiis nihil quas sed. Reprehenderit enim quos nihil
                                sint reiciendis laudantium ab pariatur nesciunt autem
                                exercitationem! Laudantium mollitia maiores dicta praesentium nulla,
                                ea doloribus sint pariatur aperiam corrupti? Dolorem sit vel rem
                                pariatur sunt.
                            </p>
                            <p id='date'>Data</p>
                            <p id='see-more'>Ver mais</p>
                        </div>
                    </div>
                </div>
                <button id='notice-board'>Mural de avisos</button>
            </main>
            <Footer />
        </div>
    );
}
