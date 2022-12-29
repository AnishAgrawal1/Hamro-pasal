import React from 'react';
import { STATUS } from "../../utils/status";
import {Link} from "react-router-dom";
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import { Box, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';

const Category = ({categories, status}) => {
    if(status === STATUS.ERROR) return (<Error />);
    if(status === STATUS.LOADING) return (<Loader />);

    return (
    <section id = "categories">
        <Box m={'5'}>
            <Box>
                <Box p={'5'}>
                    <Text color={'yellow.400'} fontSize={'4xl'} fontWeight='bold'>Category</Text>
                </Box>
                <Box>
                    <Flex gap={'20px'}>
                    {
                        categories.slice(0, 5).map(category => (
                            <Link to = {`category/${category.id}`} key = {category.id}>
                                <Card>
                                    <CardHeader>
                                        <Heading size='lg'>{category.name}</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <img src = {category.image} alt = "" />
                                    </CardBody>
                                </Card>
                            </Link>
                        ))
                        }
                    </Flex>                    
                </Box>
            </Box>
        </Box>
    </section>
  )
}

export default Category