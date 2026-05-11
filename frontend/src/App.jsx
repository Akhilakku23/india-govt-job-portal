// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import PortalList from "./pages/PortalList";
// import PortalDetails from "./pages/PortalDetails";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Bookmarks from "./pages/Bookmarks";
// import AdminDashboard from "./pages/AdminDashboard";
// import ManagePortals from "./pages/ManagePortals";
// import ManageNotifications from "./pages/ManageNotifications";
// import ProtectedRoute from "./components/ProtectedRoute";
// import AdminRoute from "./components/AdminRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/portals" element={<PortalList />} />
//         <Route path="/portals/:id" element={<PortalDetails />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         <Route
//           path="/bookmarks"
//           element={
//             <ProtectedRoute>
//               <Bookmarks />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/admin"
//           element={
//             <AdminRoute>
//               <AdminDashboard />
//             </AdminRoute>
//           }
//         />

//         <Route
//           path="/admin/portals"
//           element={
//             <AdminRoute>
//               <ManagePortals />
//             </AdminRoute>
//           }
//         />

//         <Route
//           path="/admin/notifications"
//           element={
//             <AdminRoute>
//               <ManageNotifications />
//             </AdminRoute>
//           }

//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from  "./components/Navbar";
import Home from "./pages/Home";
import PortalList from "./pages/PortalList";
import PortalDetails from "./pages/PortalDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Bookmarks from "./pages/Bookmarks";
import AdminDashboard from "./pages/AdminDashboard";
import ManagePortals from "./pages/ManagePortals";
import ManageNotifications from "./pages/ManageNotifications";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
// New Pages (Create these files)
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Notifications from "./pages/Notifications";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import AdminUser from "./pages/AdminUser";
import ManageContacts from "./pages/ManageContacts";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/portals" element={<PortalList />} /> */}
        <Route path="/portals/:id" element={<PortalDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/portals" element={<PortalList />} />
        <Route path="/admin/dashboard" element={<AdminUser />} />
       
        
        {/* Protected */}
        <Route
          path="/bookmarks"
          element={
            <ProtectedRoute>
              <Bookmarks />
            </ProtectedRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/portals"
          element={
            <AdminRoute>
              <ManagePortals />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/notifications"
          element={
            <AdminRoute>
              <ManageNotifications />
            </AdminRoute>
          }
        />

         <Route
          path="/admin/contacts"
          element={
            <AdminRoute>
              <ManageContacts />
            </AdminRoute>
          }
        />


        {/* Footer Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />

        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/category/:type" element={<Category />} />
        {/* <Footer /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
