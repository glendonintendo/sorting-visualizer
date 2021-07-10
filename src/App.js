import { ThemeProvider, CSSReset, Button } from '@chakra-ui/react';
import { Nav } from './components/Nav';
import { Visualizer } from './components/Visualizer';
import { Controller } from './components/Controller';

function App() {
  return (
    <ThemeProvider>
      <div>
        <CSSReset />
        <Nav />
        <Visualizer />
        <Controller />
      </div>
    </ThemeProvider>
  );
}

export default App;
