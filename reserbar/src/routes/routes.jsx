import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/homePage/homepage";
import LoginPage from "../pages/loginPage/loginPage";
import RegisterView from "../views/register/registerView";
import SignInView from "../views/signIn/signInView";

const ProviderRoutes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>loading</div>}>
                <Routes>
                    {/* TODO: if the user is login, enable to visit this routes. */}
                    <Route path="/" element={<Homepage />} />
                    {/* TODO: If the user is not loggend, only have access to this routes. 
                    TODO: Remove the acces to the root /login becouse the can see that.  */}
                    <Route path="/login" element={<LoginPage />}>
                        <Route path="signin" element={<SignInView />} />
                        <Route path="register" element={<RegisterView />} />
                    </Route>
                    {/* TODO: page 404 (page not found)*/}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default ProviderRoutes;
