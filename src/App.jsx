/* eslint-disable no-unused-vars */
import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Disclaimer from "./components/layout/Disclaimer";

function App() {
  return (
    <div className="min-h-screen">
      <AppRoutes />
      <Disclaimer />
    </div>
  );
}

export default App;