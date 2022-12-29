import React from 'react';
import { STATUS } from '../../utils/status';
import { setModalData, setIsModalVisible } from '../../store/modalSlice';
import SingleProduct from '../SingleProduct/SingleProduct';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../utils/helpers';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { Badge, Box, Center, Flex, Image, SimpleGrid, Spacer, Text } from '@chakra-ui/react';

const ProductList = ({products, status}) => {
    const dispatch = useDispatch();
    const {isModalVisible} = useSelector((state) => state.modal);

    const viewModalHandler = (data) => {
        dispatch(setModalData(data));
        dispatch(setIsModalVisible(true));
    }

    if(status === STATUS.ERROR) return (<Error />);
    if(status === STATUS.LOADING) return (<Loader />);

    return (
        <section id = "products">
            { isModalVisible && <SingleProduct />}

            <Box p={'5'} bgColor='blue.800'>
                <Box>
                    <Box p={'5'}>
                        <Text color={'white'} fontSize={'4xl'} fontWeight='bold'>Our Products</Text>
                    </Box>
                    <Box>
                        <SimpleGrid columns={5} spacingX='20px' spacingY='15px'>
                        {
                            products.slice(0, 20).map(product => (
                                <Box bgColor={'white'} rounded='lg' key = {product.id} onClick = {() => viewModalHandler(product)}>
                                    <Box >
                                        <Image roundedTop={'lg'} src = {product.images[0]} alt = "" />
                                    </Box>
                                    <Badge ml={'3'} fontSize='0.8em' colorScheme='yellow' variant='subtle'>{product.category.name}</Badge>
                                    <Flex px={3} pb={2}>
                                        <Center><Text fontSize={'2xl'} fontWeight='semibold'>{product.title}</Text></Center>
                                        <Spacer />
                                        <Text fontSize={'3xl'} fontWeight='bold'>{formatPrice(product.price)}</Text>
                                    </Flex>
                                </Box>
                            ))
                            }
                        </SimpleGrid>                    
                    </Box>
                </Box>
            </Box>
        </section>
    )
}

export default ProductList