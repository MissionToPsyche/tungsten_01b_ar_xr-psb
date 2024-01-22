import {
  ListItem,
  Box,
  Collapse,
  UnorderedList,
  Text,
  Button
} from '@chakra-ui/react';

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
      <Button
        onClick={onToggle}
        color="blue.500"
        fontWeight="bold"
        variant="link"
      >
        {title}
      </Button>
      <Collapse in={isOpen}>
        <Box p={4} mt={2} bg="gray.100" rounded="md">
          <Text fontWeight="bold">{description}</Text>
          <UnorderedList>
            {subItems.map((subItem, index) => (
              <ListItem key={index}>{subItem}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Collapse>
    </ListItem>
  );
}
export default TroubleshootingItem;
