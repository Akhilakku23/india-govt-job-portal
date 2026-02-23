import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portals" element={<PortalList />} />
        <Route path="/portals/:id" element={<PortalDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/bookmarks"
          element={
            <ProtectedRoute>
              <Bookmarks />
            </ProtectedRoute>
          }
        />

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;