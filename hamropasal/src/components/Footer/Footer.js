import { Box, Flex, HStack, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box bgColor={'gray.800'}>
        <Box textColor={"white"} p="10">
            <Flex>
            <Box>
                <Text fontSize={'2xl'}>Links</Text>
                <ul>
                    <li><a href = "/aboutus" className = "fs-15">About Us</a></li>
                    <li><a href = "/contact" className = "fs-15">Contact Us</a></li>
                    <li><a href = "/blog" className = "fs-15">Blog</a></li>
                    <li><a href = "faq" className = "fs-15">FAQ's</a></li>
                </ul>
            </Box>
            <Spacer/>
            <Box>
                <h6>Policies</h6>
                <ul>
                    <li><a href = "/terms" className = "fs-15">Terms & Conditions</a></li>
                    <li><a href = "/cookies" className = "fs-15">Cookies Policy</a></li>
                    <li><a href = "/policy" className = "fs-15">Data Policy</a></li>
                </ul>
            </Box>
            <Spacer/>
            <Box>
                <h6>About Shopping Hub</h6>
                <ul>
                    <li><a href = "/terms" className = "fs-15">Company Info</a></li>
                    <li><a href = "/cookies" className = "fs-15">Branches</a></li>
                    <li><a href = "/policy" className = "fs-15">Store</a></li>
                </ul>
            </Box>
            <Spacer/>
            <Box>
                <h6>Contact</h6>
                <ul>
                    <li>
                        <span><i className = "fas fa-phone"></i></span>
                        <span className = "fs-15">+678 004 5754</span>
                    </li>
                    <li>
                        <span><i className = "fas fa-envelope"></i></span>
                        <span className = "fs-15">info@hamropasal.com</span>
                    </li>
                </ul>
            </Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default Footer