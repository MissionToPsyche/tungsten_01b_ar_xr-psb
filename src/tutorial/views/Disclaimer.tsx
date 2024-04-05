import { Image } from '@chakra-ui/react';

const Disclaimer: React.FC = () => {
  return (
    <Image
      mx="auto"
      display="block"
      src={'/assets/images/not-to-scale.png'}
      alt="Settings Image"
    />
  );
};
export default Disclaimer;
