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
      <Box border="5px solid rgba(0,0,0,0.2)" p={4}>
        <div>
          <Heading size="xl">Something Went Wrong...</Heading>
          <Heading size="md" mt={4} color="magenta.500">
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
                  handleToggle('crashing');
                }}
                color="blue.500"
                fontWeight="bold"
              >
                <Text fontWeight="bold">Application Crashes</Text>
              </Box>
              <Collapse in={openItem === 'crashing'} animateOpacity>
                <Box p={4} mt={2} bg="gray.100" rounded="md">
                  <Text fontWeight="bold">If the browser keeps crashing.</Text>
                  <UnorderedList>
                    <ListItem>Close and reopen the the browser.</ListItem>
                    <ListItem>
                      Check for app updates on your device&apos;s app store.
                    </ListItem>
                    <ListItem>Restart your device.</ListItem>
                    <ListItem>
                      If the issue persists, uninstall and reinstall your
                      browser app.
                    </ListItem>
                  </UnorderedList>
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
                <Text fontWeight="bold">Application Not Responding</Text>
              </Box>
              <Collapse in={openItem === 'reloadPage'} animateOpacity>
                <Box p={4} mt={2} bg="gray.100" rounded="md">
                  <Text fontWeight="bold">
                    If the application is not responding or freezing.
                  </Text>
                  <UnorderedList>
                    <ListItem>Close and reopen the application.</ListItem>
                    <ListItem>
                      Check for updates to ensure you have the latest version.
                    </ListItem>
                    <ListItem>Restart your device.</ListItem>
                    <ListItem>
                      If the issue persists, uninstall and reinstall the
                      application.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Collapse>
            </ListItem>
            <ListItem>
              <Box
                as="button"
                onClick={() => {
                  handleToggle('compatibilityIssue');
                }}
                color="blue.500"
                fontWeight="bold"
              >
                <Text fontWeight="bold">Compatibility Issues</Text>
              </Box>
              <Collapse in={openItem === 'compatibilityIssue'} animateOpacity>
                <Box p={4} mt={2} bg="gray.100" rounded="md">
                  <Text fontWeight="bold">
                    If the application is not working on a specific device or
                    operating system.
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      This application runs on iPhone IOS{' '}
                      <Text fontWeight="bold">
                        x and up & Android OS x and up
                      </Text>
                    </ListItem>
                    <ListItem>
                      Verify that your device security settings are not blocking
                      the application.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Collapse>
            </ListItem>

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
                  <Text fontWeight="bold">
                    Check your internet connection and ensure that you are
                    connected
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      Verify that your device is connected to the correct Wi-Fi
                      network or using a wired connection.
                    </ListItem>
                    <ListItem>Restart the application</ListItem>
                    <ListItem>
                      Try accessing a different website or using a different
                      online service to confirm if the issue is specific to a
                      certain site or service.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Collapse>
            </ListItem>

            <ListItem>
              <Box
                as="button"
                onClick={() => {
                  handleToggle('securityPermission');
                }}
                color="blue.500"
                fontWeight="bold"
              >
                <Text fontWeight="bold">Security Permissions</Text>
              </Box>
              <Collapse in={openItem === 'securityPermission'} animateOpacity>
                <Box p={4} mt={2} bg="gray.100" rounded="md">
                  <Text fontWeight="bold">
                    If you&apos;re having issues accessing certain features due
                    to permissions or security settings.
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      Check your browser security setting for necessary
                      permission
                    </ListItem>
                    <ListItem>
                      Verify that your device security settings are not blocking
                      the application.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Collapse>
            </ListItem>
            <ListItem>
              <Box
                as="button"
                onClick={() => {
                  handleToggle('slowPerformance');
                }}
                color="blue.500"
                fontWeight="bold"
              >
                <Text fontWeight="bold">Slow Performance</Text>
              </Box>
              <Collapse in={openItem === 'slowPerformance'} animateOpacity>
                <Box p={4} mt={2} bg="gray.100" rounded="md">
                  <Text fontWeight="bold">
                    If the application or device is running slow.
                  </Text>
                  <UnorderedList>
                    <ListItem>Close and reopen the application.</ListItem>
                    <ListItem>
                      Check for updates to ensure you have the latest version.
                    </ListItem>
                    <ListItem>Restart your device.</ListItem>
                    <ListItem>
                      If the issue persists, completely close the browser and
                      start over.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Collapse>
            </ListItem>
          </UnorderedList>
          <Text mt={4}>
            If the issue persists, please contact our support team for further
            assistance.
          </Text>
        </div>
      </Box>
    </ChakraProvider>
  );
}
export default ErrorFallback;
