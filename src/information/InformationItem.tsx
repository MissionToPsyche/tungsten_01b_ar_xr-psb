import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box
} from '@chakra-ui/react';
import React from 'react';

interface AccordionItemProps {
  title: string;
  index: number;
  children: React.ReactNode;
}

const InformationItem: React.FC<AccordionItemProps> = ({ title, children }) => (
  <AccordionItem>
    <h2>
      <AccordionButton>
        <span>{title}</span>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Box maxHeight="200px" overflowY="auto">
        {children}
      </Box>
    </AccordionPanel>
  </AccordionItem>
);

export default InformationItem;
