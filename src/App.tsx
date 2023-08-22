import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './components/Homepage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Layout>
  );
}
