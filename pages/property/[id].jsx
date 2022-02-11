import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { getPropertyDetails } from '../../utils/Api';
import ImageScrollbar from '../../components/ImageScrollbar';

const PropertyDetails = props => {
  const {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  } = props;

  return <Box>{photos && <ImageScrollbar data={photos} />}</Box>;
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await getPropertyDetails(id);
  return {
    props: {
      ...data,
    },
  };
}
