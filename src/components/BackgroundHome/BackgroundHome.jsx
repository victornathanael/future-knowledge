import './BackgroundHome.css';

import purpleWavyLine from '../../assets/wavy-line-purple.svg';
import yellowCircle from '../../assets/yellow-circle.svg';
import whiteCircle from '../../assets/white-circle.svg';
import trianglePurple from '../../assets/triangle-purple.svg';
import wavyLineYellow from '../../assets/wavy-line-yellow.svg';

export default function BackgroundHome() {
    return (
        <>
            <img id='wavy-line-purple-home' src={purpleWavyLine} alt='purple wavy line' />
            <img id='yellow-circle-home' src={yellowCircle} alt='yellow circle' />
            <img id='white-circle-home' src={whiteCircle} alt='white circle' />
            <img id='triangle-purple-home' src={trianglePurple} alt='triangle purple' />
            <img id='wavy-line-yellow-home' src={wavyLineYellow} alt='wavy line yellow' />
        </>
    );
}
