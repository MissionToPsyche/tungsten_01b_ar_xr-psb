import { ChakraProvider, Flex, Text, extendTheme } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

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

function ErrorFallback() {
  return (
    <ChakraProvider theme={customTheme}>
      <div role="alert">
        <Text>Something Went Wrong</Text>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mt={4}
        >
          <Link
            to="/troubleshooting"
            style={{
              backgroundColor: 'transparent',
              color: 'blue',
              textDecoration: 'underline',
              fontWeight: 'bold'
            }}
          >
            Troubleshooting Guide
          </Link>
        </Flex>
      </div>
    </ChakraProvider>
  );
}
export default ErrorFallback;
