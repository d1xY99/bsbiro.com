/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import { Route, Routes } from 'react-router-dom';

import LandingPage from 'pages/Main';
import ProjectPage from 'pages/Cloud';
import NotFoundPage from 'pages/NotFoundPage';
import TeamPage from 'pages/ONama';
import CloudLogin from 'pages/CloudLogin'; 

import { DiscussProjectPage } from 'pages/Kontakt';

import './assets/css/styles.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/cloud" element={<ProjectPage />} />
        <Route exact path="/cloud-login" element={<CloudLogin />} />
        <Route exact path="/informacije" element={<TeamPage />} />
        <Route exact path="/kontakt" element={<DiscussProjectPage />} />
        <Route path="**" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
