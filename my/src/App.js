import './App.css';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Head from './components/Head';
import PageContent from './layout/pagecontent';
import { Navigate } from 'react-router-dom';

function App({ children }) {
  const token = localStorage.getItem("userToken");

  if (!token) {
    return <Navigate to="/login" />;
  }
  return (

    <div style={appContainer}>
      <Sidebar />
      <div style={mainContent}>
        <Head />
        <PageContent children={children}/>
        <Footer />
      </div>
    </div>
  );
}

const appContainer = {
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
};

const mainContent = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
};
export default App;