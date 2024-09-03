import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const searchRef = useRef<HTMLInputElement>(null);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                if (searchRef.current) {
                    onSearch(searchRef.current.value);
                }
            }}
        >
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={searchRef}
                    borderRadius={20}
                    placeholder="Search games..."
                    variant="fille"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
