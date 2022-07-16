import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Auth0Provider
      domain={"dev-5j6mi8lc.us.auth0.com"}
      clientId={"gJfovvhU0idTptfy4rYsjx1S119Q9Xa9"}
      redirectUri={`http://localhost:3000`}
    >
      <App />
    </Auth0Provider>
);
