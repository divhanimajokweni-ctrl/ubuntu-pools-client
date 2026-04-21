/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Analytics from './pages/Analytics';
import Engagement from './pages/Engagement';
import Cohorts from './pages/Cohorts';
import Funnels from './pages/Funnels';
import Features from './pages/Features';
import Customers from './pages/Customers';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Login from './pages/Login';
import Admin from './pages/Admin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Layout><Analytics /></Layout>} />
        <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
        <Route path="/engagement" element={<Layout><Engagement /></Layout>} />
        <Route path="/cohorts" element={<Layout><Cohorts /></Layout>} />
        <Route path="/funnels" element={<Layout><Funnels /></Layout>} />
        <Route path="/features" element={<Layout><Features /></Layout>} />
        <Route path="/customers" element={<Layout><Customers /></Layout>} />
        <Route path="/reports" element={<Layout><Reports /></Layout>} />
        <Route path="/notifications" element={<Layout><Notifications /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
        <Route path="/help" element={<Layout><Help /></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
