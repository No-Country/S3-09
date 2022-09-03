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
import HomeView from "../views/perfilpage/homeView/homeView";
import BookingsView from "../views/perfilpage/bookingsView/bookingsView";
import FavoritesView from "../views/perfilpage/favoritesView/favoritesView";
import UserView from "../views/perfilpage/userView/userView";
import PaymentView from "../views/perfilpage/paymentView/paymentView";
import SupportView from "../views/perfilpage/supportView/supportView";
import ActivesVIew from "../views/perfilpage/bookingsView/activesVIew/activesVIew";
import HistoryVIew from "../views/perfilpage/bookingsView/historyVIew/historyVIew";
import RestaurantsView from "../views/homeSubPage/restaurantsView/restaurantsView";
import BookingsHomeView from "../views/homeSubPage/bookingsView/bookingsView";


const ProviderRoutes = () => {
    const userLogin = localStorage.getItem("token");

    return (
        <BrowserRouter>
            <Suspense fallback={<div>loading</div>}>
                {userLogin ? (
                    <Routes>
                        <Route path="/" element={<Homepage />}>
                            <Route path="/home" element={<HomeSubPage />} >
                                <Route path="restaurants" element={<RestaurantsView />} />
                                <Route path="bookings" element={<BookingsHomeView />} />    
                                <Route
                                    path="/home"
                                    element={
                                        <Navigate to="/home/restaurants" replace />
                                    }
                                />
                            </Route>
                            <Route path="/search" element={<SearchSubPage />} />
                            <Route path="/qr" element={<MyIdSubPage />} />
                            <Route path="/perfil" element={<PerfilSubPage />}>
                                <Route
                                    path="homePerfil"
                                    element={<HomeView />}
                                />
                                <Route
                                    path="bookings"
                                    element={<BookingsView />}
                                >
                                    <Route
                                        path="active"
                                        element={<ActivesVIew />}
                                    />
                                    <Route
                                        path="history"
                                        element={<HistoryVIew />}
                                    />
                                    <Route
                                        path="/perfil/bookings"
                                        element={
                                            <Navigate
                                                to="/perfil/bookings/active"
                                                replace
                                            />
                                        }
                                    />
                                </Route>
                                <Route
                                    path="favorites"
                                    element={<FavoritesView />}
                                />
                                <Route path="user" element={<UserView />} />
                                <Route
                                    path="payment"
                                    element={<PaymentView />}
                                />
                                <Route
                                    path="support"
                                    element={<SupportView />}
                                />
                                <Route
                                    path="/perfil"
                                    element={
                                        <Navigate
                                            to="/perfil/homePerfil"
                                            replace
                                        />
                                    }
                                />
                            </Route>
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
