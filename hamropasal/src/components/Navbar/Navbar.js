import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/categorySlice';
import { getCartTotal } from '../../store/cartSlice';
import { Box, Button, Center, Flex, Spacer, Stack, Text } from '@chakra-ui/react';

const Navbar = () => {
  const dispatch = useDispatch();
  const {data: categories} = useSelector((state) => state.category);
  const {totalItems} = useSelector((state => state.cart));


  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getCartTotal());
  }, []);

  return (
      <Box>
        <Box margin={'4'}>
          <Flex >
            <Box p={'2'}>
              <Link to = "/">
                <Text fontSize='4xl' as={'b'} color='yellow.400'>HamroPasal.</Text>
              </Link>
            </Box>
            <Spacer/>
            <Box py={'4'}>
              <Link to = "/cart">
                <Flex>
                  <Center>
                    <i className = "fas fa-shopping-cart"></i>
                    <Box px={'5'}><Button color='yellow.600' size='lg' fontSize={'2xl'}>Cart<span>{totalItems}</span></Button></Box>
                  </Center>
                </Flex>
              </Link>
            </Box>
          </Flex>
        </Box>
        
        <Box backgroundColor={'blue.800'}>
          <Box mx={'5'} py="4">
            <Flex>
              <Text as={'b'} color={'yellow.400'} mr={'10'}>
                Category
              </Text>
              <ul>
                <Stack spacing={5} direction='row'>
                  {
                    categories.map(category => (
                      <li key = {category.id}><Link to = {`/category/${category.id}`}><Text color={'white'}>{category.name}</Text></Link></li>
                    ))
                  }
                </Stack>
              </ul>
            </Flex>
          </Box>
        </Box>
      </Box>
  )
}

export default Navbar;