import { Image } from '@chakra-ui/react';
import React from 'react';
import {error} from "../../utils/images";

const Error = () => {
  return (
    <div>
      <Image src = {error} alt = "error" />
    </div>
  )
}

export default Error