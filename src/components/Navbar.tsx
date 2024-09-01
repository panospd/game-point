import { HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './colorModeSwitch';

const Navbar = () => {
    return (
        <div>
            <HStack justifyContent="space-between" padding="10px">
                <Image src={logo} boxSize="50px" />
                <ColorModeSwitch />
            </HStack>
        </div>
    );
};

export default Navbar;
