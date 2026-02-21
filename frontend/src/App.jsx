import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Navbar
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Portals from "./pages/Portals";
import PortalDetails from "./pages/PortalDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Bookmarks from "./pages/Bookmarks";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import ManagePortals from "./pages/admin/ManagePortals";
import ManageNotifications from "./pages/admin/ManageNotifications";

// Route Protection
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

function App() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                {/* Public Routes */}

                <Route path="/" element={<Home />} />

                <Route path="/portals" element={<Portals />} />

                <Route path="/portal/:id"
                    element={<PortalDetails />}
                />

                <Route path="/login"
                    element={<Login />}
                />

                <Route path="/register"
                    element={<Register />}
                />

                {/* User Protected */}

                <Route path="/bookmarks"
                    element={
                        <ProtectedRoute>
                            <Bookmarks />
                        </ProtectedRoute>
                    }
                />

                {/* Admin Protected */}

                <Route path="/admin"
                    element={
                        <AdminRoute>
                            <Dashboard />
                        </AdminRoute>
                    }
                />

                <Route path="/admin/manage-portals"
                    element={
                        <AdminRoute>
                            <ManagePortals />
                        </AdminRoute>
                    }
                />

                <Route path="/admin/manage-notifications"
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