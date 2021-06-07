import ReactGA from 'react-ga';

export default function buildGAEvent (category, action) {
    return ReactGA.event({
        category: category,
        action: action
    });
}