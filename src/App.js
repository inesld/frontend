import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ExamplesPage from './pages/customer/example/Example.jsx';
import PrivateRoute from './components/privateRoute/PrivateRoute.jsx';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/customer/login/Login.jsx';
import SignupPage from './pages/customer/signup/Signup.jsx';
import NotFoundPage from './pages/customer/notFound/NotFound.jsx';
import Layout from "./components/layout/Layout.jsx";
import ProductsPage from './pages/product/Products.jsx';
import UsersPage from './pages/user/User.jsx';
import CategoryPage from './pages/category/Category.jsx';
import CommandesPage from './pages/commande/Commande.jsx';

function App() {

      //  TODO! Jus for test
    // const token = localStorage.getItem('token')
    const token = true
  return (
    <div className="App">
      <Routes>
        {/* Privates Routes */}
      <Route path="/" exact element={
          <PrivateRoute token={token}>
                <Layout />
          </PrivateRoute>
        }>

       <Route path="/" element={<ExamplesPage />} />
       <Route path="/examples" element={<ExamplesPage />} />
       <Route path="/products" element={<ProductsPage />} />
       <Route path="/users" element={<UsersPage />} />
       <Route path="/categories" element={<CategoryPage />} />
       <Route path="/commandes" element={<CommandesPage />} />


       </Route>

        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
