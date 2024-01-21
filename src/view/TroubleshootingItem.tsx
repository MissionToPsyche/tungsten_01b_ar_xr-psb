import { ListItem, Box, Collapse, UnorderedList, Text } from '@chakra-ui/react';

interface TroubleshootingItemProps {
  title: string;
  description: string;
  subItems: string[];
  isOpen: boolean;
  onToggle: () => void;
}

function TroubleshootingItem({
  title,
  description,
  subItems,
  isOpen,
  onToggle
}: TroubleshootingItemProps) {
  return (
    <ListItem>
      <Box as="button" onClick={onToggle} color="blue.500" fontWeight="bold">
        <Text fontWeight="bold">{title}</Text>
      </Box>
      {isOpen && (
        <Collapse in={isOpen} animateOpacity>
          <Box p={4} mt={2} bg="gray.100" rounded="md">
            <Text fontWeight="bold">{description}</Text>
            <UnorderedList>
              {subItems.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Collapse>
      )}
    </ListItem>
  );
}

export default TroubleshootingItem;
