import { useState } from 'react';
import {
  Heading,
  Text,
  UnorderedList,
  Box,
  ChakraProvider
} from '@chakra-ui/react';
import TroubleshootingItem from './TroubleshootingItem';

function TroubleshootingGuide() {
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
            <TroubleshootingItem
              title="Application Crashes"
              description="If the browser keeps crashing."
              subItems={[
                'Close and reopen the browser.',
                "Check for app updates on your device's app store.",
                'Restart your device.',
                'If the issue persists, uninstall and reinstall your browser app.'
              ]}
              isOpen={openItem === 'crashing'}
              onToggle={() => {
                handleToggle('crashing');
              }}
            />
            <TroubleshootingItem
              title="Application Not Responding"
              description="If the application is not responding or freezing."
              subItems={[
                'Close and reopen the application.',
                'Check for updates to ensure you have the latest version.',
                'Restart your device.',
                'If the issue persists, uninstall and reinstall the application.'
              ]}
              isOpen={openItem === 'reloadPage'}
              onToggle={() => {
                handleToggle('reloadPage');
              }}
            />
            <TroubleshootingItem
              title="Compatibility Issues"
              description="If the application is not working on a specific device or operating system."
              subItems={[
                'This application runs on iPhone IOS x and up & Android OS x and up',
                'Verify that your device security settings are not blocking the application.'
              ]}
              isOpen={openItem === 'compatibilityIssue'}
              onToggle={() => {
                handleToggle('compatibilityIssue');
              }}
            />
            <TroubleshootingItem
              title="Internet Connection"
              description="Check your internet connection and ensure that you are connected."
              subItems={[
                'Verify that your device is connected to the correct Wi-Fi network or using a wired connection.',
                'Restart the application',
                'Try accessing a different website or using a different online service to confirm if the issue is specific to a certain site or service.'
              ]}
              isOpen={openItem === 'internetConnection'}
              onToggle={() => {
                handleToggle('internetConnection');
              }}
            />
            <TroubleshootingItem
              title="Security Permissions"
              description="If you're having issues accessing certain features due to permissions or security settings."
              subItems={[
                'Check your browser security setting for necessary permission',
                'Verify that your device security settings are not blocking the application.'
              ]}
              isOpen={openItem === 'securityPermission'}
              onToggle={() => {
                handleToggle('securityPermission');
              }}
            />
            <TroubleshootingItem
              title="Slow Performance"
              description="If the application or device is running slow."
              subItems={[
                'Close and reopen the application.',
                'Check for updates to ensure you have the latest version.',
                'Restart your device.',
                'If the issue persists, completely close the browser and start over.'
              ]}
              isOpen={openItem === 'slowPerformance'}
              onToggle={() => {
                handleToggle('slowPerformance');
              }}
            />
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

export default TroubleshootingGuide;
