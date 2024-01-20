import {
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Collapse,
  Box,
  ChakraProvider
} from '@chakra-ui/react';
import { useState } from 'react';

function ErrorFallback() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <ChakraProvider>
      <div>
        <Heading size="xl">There was an error loading the application</Heading>
        <Heading size="lg" mt={4} color="magenta.500">
          Troubleshooting Guide
        </Heading>
        <Text>
          If you&apos;re experiencing issues, follow the steps below to
          troubleshoot and resolve common problems:
        </Text>
        <UnorderedList>
          <ListItem>
            <Box
              as="button"
              onClick={() => {
                handleToggle('internetConnection');
              }}
              color="blue.500"
              fontWeight="bold"
            >
              Internet Connection
            </Box>
            <Collapse in={openItem === 'internetConnection'} animateOpacity>
              <Box p={4} mt={2} bg="gray.100" rounded="md">
                Description for Internet Connection troubleshooting...
              </Box>
            </Collapse>
          </ListItem>
          <ListItem>
            <Box
              as="button"
              onClick={() => {
                handleToggle('reloadPage');
              }}
              color="blue.500"
              fontWeight="bold"
            >
              Reload the page and try again.
            </Box>
            <Collapse in={openItem === 'reloadPage'} animateOpacity>
              <Box p={4} mt={2} bg="gray.100" rounded="md">
                Description for reloading the page...
              </Box>
            </Collapse>
          </ListItem>
        </UnorderedList>
        <Text mt={4}>
          If the issue persists, please contact our support team for further
          assistance.
        </Text>
      </div>
    </ChakraProvider>
  );
}
export default ErrorFallback;
