import React from "react";
import { Link } from "react-router-dom";

function Dashboard(){

    return(

        <div className="container mt-4">

            <h2>Admin Dashboard</h2>

            <div className="mt-4">

                <Link
                to="/admin/manage-portals"
                className="btn btn-primary m-2">

                    Manage Portals

                </Link>

                <Link
                to="/admin/manage-notifications"
                className="btn btn-warning m-2">

                    Manage Notifications

                </Link>

            </div>

        </div>

    );

}

export default Dashboard;