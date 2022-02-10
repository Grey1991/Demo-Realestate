import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import SearchFilter from '../components/SearchFilter';
import Property from '../components/Property';
import noResult from '../assets/images/noResult.svg';
import { getProperties } from '../utils/Api';

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters(!searchFilters)}
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilter />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map(property => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          marginTop="5"
          marginBottom="5"
        >
          <Image src={noResult} alt="no result" />
          <Text fontSize="xl" marginTop="3">
            No Result Found.
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const params = {
    purpose: query.purpose || 'for-rent',
    rentFrequency: query.rentFrequency || 'yearly',
    priceMin: query.priceMin || '0',
    priceMax: query.priceMax || '1000000',
    roomsMin: query.roomsMin || '0',
    bathsMin: query.bathsMin || '0',
    sort: query.sort || 'price-desc',
    areaMax: query.areaMax || '35000',
    locationExternalIDs: query.locationExternalIDs || '5002',
    categoryExternalID: query.categoryExternalID || '4',
  };

  const data = await getProperties(params);

  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default Search;
