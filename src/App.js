import Layout from './layouts/Layout';
// import ScrollToTop from './components/backToTop/ScrollToTop';
import BackToTopButton  from './components/backToTop/BackToTopButton'
import './App.css';

function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Layout/>
      <BackToTopButton />
    </>
  );
}

export default App;