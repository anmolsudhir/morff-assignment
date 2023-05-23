import './App.css';
import Page from './pages/Page';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, DarkTheme } from 'baseui';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider className={"provider"} value={engine}>
      <BaseProvider className={"provider"} theme={DarkTheme}>
        <Page />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
