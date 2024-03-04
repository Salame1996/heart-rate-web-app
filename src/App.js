import './App.css';
import Age from './components/age/Age';
import { Header } from './components/header/Header';
import Info from './components/info/Info';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme'; // Import the theme
import FAQComponent from './components/faq/Faq';



function App() {
  return (
    <ChakraProvider theme={theme}> {/* Pass the theme to ChakraProvider */}
      <div>
        <Header />
        <Age />
        <Info />
        <FAQComponent/>
      </div>
    </ChakraProvider>
  );
}

export default App;

