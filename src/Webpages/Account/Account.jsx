
import { Box } from '@mui/material';
import { Footer } from '../../components';
import './Account.scss';

const Account = () => {

    return(
        <Box id="account-page"> 

            <Box className="account-container">
                <Box className="title-wrapper">
                    <h1 className="title">Account</h1>
                    <Box className="memeber-since-wrapper">
                        <Box className="memeber-since-img"></Box>
                        <Box className="memeber-since-message">Memeber Since May 2022</Box>
                    </Box>
                </Box>

                <Box className="info-container">

                    {/* <Box className="container-title">
                        <h2 className="title">PROFILE INFORMATION</h2>
                        <button className="delete-button">Remove Account</button>
                    </Box>

                    <Box className="details-container">
                        <Box className="username-container">
                            <h2 className="text">username</h2>
                            <Box className="link">Change Username</Box>
                        </Box>
                        <Box className="email-container">
                            <h2 className="text">email@email.com</h2>
                            <Box className="link">Change Email</Box>
                        </Box>
                        <Box className="password-container">
                            <h2 className="text">Password: ********</h2>
                            <Box className="link">Change Password</Box>
                        </Box>
                    </Box> */}

                    <Box className="container-title">
                        <h2 className="title">PROFILE INFORMATION</h2>
                        <button className="delete-button">Remove Account</button>
                    </Box>

                    <Box className="details-container">
                        <Box className="username-container">
                            <h2 className="text">username</h2>
                            <Box className="link">Change Username</Box>
                        </Box>

                        <Box className="email-container">
                            <h2 className="text">email@email.com</h2>
                            <Box className="link">Change Email</Box>
                        </Box>

                        <Box className="password-container">
                            <h2 className="text">Password: *********</h2>
                            <Box className="link">Change Password</Box>
                        </Box>
                    </Box>

                    
                    
                </Box>

                <Box className="info-container">

                    {/* <Box className="container-title">
                        <h2 className="title">PLAN DETAILS</h2>
                    </Box>

                    <Box className="details-container">
                        <Box className="plan-container">
                            <h2 className="text">Premium ULTRA HD</h2>
                            <Box className="link">Change plan</Box>
                        </Box>
                        <Box className="dvd-container">
                            <h2 className="text">No DVD Plan</h2>
                            <Box className="link">Add DVD Plan</Box>
                        </Box>
                        
                    </Box> */}

                    <Box className="container-title">
                        <h2 className="title">SUBSCRIPTION DETAILS</h2>
                    </Box>

                    <Box className="details-container">
                        <Box className="plan-container">
                            <h2 className="text">Premium ULTRA HD</h2>
                            <Box className="link">Change plan</Box>
                        </Box>

                        <Box className="dvd-container">
                            <h2 className="text">No DVD Plan</h2>
                            <Box className="link">Add DVD Plan</Box>
                        </Box>

                
                    </Box>
                    
                </Box>
                
            </Box>

            <Footer/>
        </Box>
    );

};

export default Account;