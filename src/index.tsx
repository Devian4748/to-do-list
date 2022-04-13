import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { DarkTheme } from './theme';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ThemeProvider theme={DarkTheme}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ThemeProvider>
);
