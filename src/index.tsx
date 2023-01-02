import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as PaperProvider } from 'react-native-paper';

import App from './App';

(async () => {
  const container = document.getElementById('root') as HTMLElement,
    root = createRoot(container);

  root.render(
    <PaperProvider>
      <App />
    </PaperProvider>,
  );
})();
