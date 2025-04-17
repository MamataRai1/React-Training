import { Routes, Route, Outlet, Link, NavLink } from "react-router";
 import Home_Page from "./pages/home_Page";
 import SingleProductPage, {OverviewPage,ReviewPage,} from "./pages/product/singleProduct";
import ProductPage from "./pages/product";

export default function AppRoutes() {
return (
  <Routes>
    <Route
      path="/"
      element={
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      }
    >
      <Route index element={<Home_Page />} />
      <Route path="contact" element={<div>Contact Page</div>} />
      <Route path="product">
        <Route element={<ProductPage />} index />
        <Route path=":productID" element={<SingleProductPage />}>
          <Route path="review" element={<ReviewPage />} />
          <Route path="overview" element={<OverviewPage />} />
          <Route index element={<OverviewPage />} />
        </Route>
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Route>
    <Route path="login" element={<div>Login Page</div>} />
    <Route path="register" element={<div>Register Page</div>} />
  </Routes>
);
}

export function UserLayout() {
return (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);
}
const Links =[
  { name: "Home", path: "/" },
 
  { name: "Product", path: "/product" },
]

export function Navbar() {
console.log("Navbar");
return (
  <div>
    <div>Navbar</div>
    <div className="space-x-4 flex justify-center items-center">
     {Links.map(({name, path}) => (
      <NavLink
        
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-gray-500"
        }
        key={path}
        to={path}
      >
        {name}
      </NavLink>

     
    ))}
    </div>
  </div>
);
}

export function Footer() {
console.log("Footer");
return (
  <div>
    <div>Footer</div>
  </div>
);
}