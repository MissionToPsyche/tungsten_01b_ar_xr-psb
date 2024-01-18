import {
  ChakraProvider,
  Text,
  Button,
  Flex,
  extendTheme
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Extend Chakra UI theme here
const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }
    }
  },
  components: {
    Text: {
      baseStyle: {
        fontWeight: 'bold',
        fontSize: '2xl',
        textAlign: 'center'
      }
    }
  }
});

interface ErrorFallbackProps {
  error: Error;
}

function ErrorFallback({ error }: ErrorFallbackProps) {
  const [pageLoaded, setPageLoaded] = useState(true);
  const navigate = useNavigate();

  function handleTryAgain() {
    // Test if the page is loaded
    setPageLoaded(!pageLoaded);
  }

  return (
    <ChakraProvider theme={customTheme}>
      <div role="alert">
        <Text>Something Went Wrong</Text>
        <Text>{error.message}</Text>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Button leftIcon={<RepeatIcon />} onClick={handleTryAgain}>
            Try again
          </Button>
          {!pageLoaded && (
            <Button
              onClick={() => {
                navigate('troubleshooting');
              }}
            >
              Troubleshooting Guide
            </Button>
          )}
        </Flex>
      </div>
    </ChakraProvider>
  );
}
export default ErrorFallback;
