import React, {useEffect} from 'react';
import ProductList from '../../components/ProductList/ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsByCategory } from '../../store/categorySlice';
import { useParams, Link } from 'react-router-dom';
import { Box, Center, Flex, Text } from '@chakra-ui/react';

const CategoryPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {catProductSingle: products, catProductSingleStatus: status} = useSelector((state) => state.category);

    useEffect(() => {
      dispatch(fetchProductsByCategory(id, 'single'));
    }, [id]);

    return (
      <Box>
        <Box p={'3'}>
          <Flex>
            <ul>
              <Flex gap={'3'}>
                <li>
                  <Link to = "/">
                    <Flex gap={'3'}>
                    <Center><i className = "fas fa-home"></i></Center>
                    <span>
                      <i className = "fas fa-chevron-right"></i>
                    </span>
                    </Flex>
                  </Link>
                </li>
                <li>
                  <Flex gap={'3'}>
                    <Center><Text>Category</Text></Center>
                  <span>
                    <i className = "fas fa-chevron-right"></i>
                  </span>
                  </Flex>
                </li>
                <li>
                  <Box>{ products[0] && products[0].category.name}</Box>
                </li>
              </Flex>
            </ul>
          </Flex>
        </Box>
        <ProductList products = {products} status = {status} />
      </Box>
    )
}

export default CategoryPage