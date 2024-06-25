import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { useEffect } from "react";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));


export default function App() {
    const dispatch = useDispatch(refreshUser);
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);


    if (isRefreshing) {
        return null; 
    } 

    return ( 
        <Layout>
            <Suspense fallback={<div>Loading page...</div>}>
            <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/>} />} />
            <Route path="/login" element={<RestrictedRoute component={<LoginPage/>}/>} />
            <Route path="/register" element={<RestrictedRoute component={<RegistrationPage/>}/>} />
            </Routes>   
            </Suspense>
        </Layout>
        
)
};
