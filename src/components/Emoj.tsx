import bullsEye from '../assets/bulls-eye.webp';
import thubsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
    rating: number;
}

const Emoj = ({ rating }: Props) => {
    if (rating < 3) null;

    const emojMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: 'meh', boxSize: '25px' },
        4: { src: thubsUp, alt: 'recommended', boxSize: '25px' },
        5: { src: bullsEye, alt: 'exceptional', boxSize: '35px' },
    };
    return <Image {...emojMap[rating]} marginTop={2} />;
};

export default Emoj;
