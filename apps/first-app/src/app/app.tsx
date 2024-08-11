import * as React from 'react';
import styled from '@emotion/styled';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import ShowEnvVars from './env-vars';

const SecondApp = React.lazy(() => import('second-app/Module'));

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/second-app">SecondApp</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<ShowEnvVars />} />
        <Route path="/second-app" element={<SecondApp />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
