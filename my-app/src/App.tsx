import React from 'react';
import './tailwind.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from './pages/MainPage';
import ConvertPage from './pages/ConvertPage';
import UploadComplete from './pages/UploadComplete';
import ConvertComplete from './pages/ConvertComplete';
import DownloadPage from './pages/DownloadPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* main page */}
        <Route path="/" element={<MainPage />} />

        {/* convert page */}
        <Route path="/convert/*" element={<ConvertPage />} />

        {/* upload completed page */}
        <Route path="/upload_completed" element={<UploadComplete />} />

        {/* convert completed page */}
        <Route path='/convert_completed' element={<ConvertComplete />} />

        {/* download page */}
        <Route path='/download' element={<DownloadPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
