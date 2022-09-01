import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../pages/homePage/homepage";
import LoginPage from "../pages/loginPage/loginPage";
import RegisterView from "../views/register/registerView";
import SignInView from "../views/signIn/signInView";
import HomeSubPage from "../pages/subPages/homeSubPage/homeSubPage";
import SearchSubPage from "../pages/subPages/searchSubPage/searchSubPage";
import MyIdSubPage from "../pages/subPages/myIdSubPage/myIdSubPage";
import PerfilSubPage from "../pages/subPages/perfilSubPage/perfilSubPage";

const ProviderRoutes = () => {
    const userLogin = localStorage.getItem("token");

    return (
        <BrowserRouter>
            <Suspense fallback={<div>loading</div>}>
                {userLogin ? (
                    <Routes>
                        <Route path="/" element={<Homepage />}>
                            <Route path="/home" element={<HomeSubPage />} />
                            <Route path="/search" element={<SearchSubPage />} />
                            <Route path="/qr" element={<MyIdSubPage />} />
                            <Route path="/perfil" element={<PerfilSubPage />} />
                            <Route
                                path="/"
                                element={<Navigate to="/home" replace />}
                            />
                        </Route>
                        <Route
                            path="*"
                            element={<Navigate to="/home" replace />}
                        />
                    </Routes>
                ) : (
                    <Routes>
                        <Route path="/login" element={<LoginPage />}>
                            <Route path="signin" element={<SignInView />} />
                            <Route path="register" element={<RegisterView />} />
                            <Route
                                path="/login"
                                element={
                                    <Navigate to="/login/signin" replace />
                                }
                            />
                        </Route>
                        <Route
                            path="*"
                            element={<Navigate to="/login/signin" replace />}
                        />
                    </Routes>
                )}
            </Suspense>
        </BrowserRouter>
    );
};

export default ProviderRoutes;
