import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ListItem,
  OrderedList,
  Text,
  UnorderedList
} from '@chakra-ui/react';
import React from 'react';

interface AccordionItemProps {
  title: string;
  index: number;
  isOpen: number | null;
  onClick: (index: number) => void;
}

const InformationItem: React.FC<AccordionItemProps> = ({
  title,
  index,
  isOpen,
  onClick
}) => (
  <AccordionItem>
    <h2>
      <AccordionButton
        onClick={() => {
          onClick(index);
        }}
      >
        <span>{title}</span>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} display={isOpen === index ? 'block' : 'none'}>
      <Box maxHeight="200px" overflowY="auto">
        {index === 1 && (
          <Text>
            This application is developed by:
            <OrderedList>
              <ListItem>Ana Diru</ListItem>
              <ListItem>Anthony Zigerelli</ListItem>
              <ListItem>Avinaash Ghansam</ListItem>
              <ListItem>David Casey</ListItem>
            </OrderedList>
          </Text>
        )}
        {index === 2 && (
          <>
            Special thanks to our sponsors
            <Text as="span" fontWeight="bold">
              : Arizona State University
            </Text>
            .
          </>
        )}
        {index === 3 && (
          <Text as="span">
            Owned and maintained by
            <Text as="span" fontWeight="bold">
              : Arizona State University
            </Text>
            .
          </Text>
        )}
        {index === 4 && (
          <Text>
            This application utilizes third-party resources to enrich its
            features and user experience. These resources are carefully curated
            from reputable sources. Below are the references for the utilized
            assets:
            <UnorderedList>
              <ListItem>
                <a href="https://github.com/pmndrs/react-spring">
                  react-spring/three
                </a>
              </ListItem>
              <ListItem>
                <a href="https://threejs.org/">Three.js</a>
              </ListItem>
              <ListItem>
                <a href="https://www.nasa.gov/audio-and-ringtones/">
                  NASA Sound
                </a>
              </ListItem>
            </UnorderedList>
          </Text>
        )}
      </Box>
    </AccordionPanel>
  </AccordionItem>
);
export default InformationItem;
