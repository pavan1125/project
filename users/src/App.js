import './App.css';
import Layout from './components/Layout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />}/>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <>
     <LoginForm />
    </>
  );
}

export default App;
