import './BackgroundRanking.css';

import yellowCircle from '../../assets/yellow-circle.svg';
import whiteCircle from '../../assets/white-circle.svg';
import trianglePurple from '../../assets/triangle-purple.svg';
import wavyLineYellow from '../../assets/wavy-line-yellow.svg';

export default function BackgroundRanking() {
    return (
        <>
            <img id='wavy-line-yellow-ranking-top' src={wavyLineYellow} alt='purple wavy line' />
            <img id='yellow-circle-ranking' src={yellowCircle} alt='yellow circle' />
            <img id='white-circle-ranking' src={whiteCircle} alt='white circle' />
            <img id='triangle-purple-ranking' src={trianglePurple} alt='triangle purple' />
            <img id='wavy-line-yellow-ranking-bottom' src={wavyLineYellow} alt='wavy line yellow' />
        </>
    );
}
