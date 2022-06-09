import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import './Update.scss';


const Update = ()  => {

    return (
        <Box id="update-page">
            <Box className="update-container">
                <Outlet/>      
            </Box>
            <Box className="footer">
                Questions? Contact Us.
            </Box>
        </Box>
    );
};

export default Update;