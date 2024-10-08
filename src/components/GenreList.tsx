import {
    Button,
    Heading,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data: genres, error, isLoading } = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner />;
    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {genres.map((g) => (
                    <ListItem key={g.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius="8px"
                                src={getCroppedImageUrl(g.image_background)}
                                objectFit="cover"
                            />
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontWeight={
                                    g.id === selectedGenre?.id
                                        ? 'bold'
                                        : 'normal'
                                }
                                onClick={() => onSelectGenre(g)}
                                variant="link"
                                fontSize="lg"
                            >
                                {g.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
