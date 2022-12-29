import { Center, Image } from '@chakra-ui/react';
import React from 'react';
import { spinner } from '../../utils/images';

const Loader = () => {
  return (
    <div>
          <Center>
          <Image boxSize='60px' objectFit='cover' src = {spinner} alt = "loader" />
          </Center>
    </div>
  )
}

export default Loader