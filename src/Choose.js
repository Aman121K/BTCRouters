import React from "react"
import { Link } from "react-router-dom";
const Choose = () => {
    return (
        <div className="container">
            <h1>Router Management</h1>
            <div>
                <Link to="/add-router">
                    <button>Add New Router</button>
                </Link>
                <Link to="/check-router-status">
                    <button>Check All Router Status</button>
                </Link>
            </div>
        </div>
    )
}
export default Choose;
