import { HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const Navbar = () => {
    return (
        <div>
            <HStack padding="10px">
                <Image src={logo} boxSize="50px" />
                <SearchInput />
                <ColorModeSwitch />
            </HStack>
        </div>
    );
};

export default Navbar;
