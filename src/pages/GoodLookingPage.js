import * as React from 'react';
import {
    Divider,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Toolbar,
    List,
    ListItemText,
    Typography, Box, ThemeProvider, createTheme
} from "@mui/material";

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Routes, useNavigate, Route, Link} from "react-router-dom";
import Home from './Home';
import ToDoList from './ToDoList';

function GoodLookingPage() {
    const [page, setPage] = React.useState("home");

    const darktheme = createTheme({
        palette: {
            mode: "dark",
        }
    });

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {['Home', 'Todo'].map((text, index) => (
                    <ListItem key={text} disablePadding={true}>
                        <ListItemButton onClick={() => setPage(text.toLowerCase())}>
                            <ListItemText primary={text.toUpperCase()} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>);

    return(
        <div>
            <ThemeProvider theme={darktheme}>
                <Box display={"flex"} height={"100vh"}>
                    <Box>
                        <Drawer

                            anchor={"left"}
                            open={true}
                            variant="permanent"

                            sx={{
                                    width: 190,
                                    flexShrink: 0,
                                    "& .MuiDrawer-paper": {
                                        width: 190,
                                        boxSizing: "border-box",
                                    }}}>
                            {drawer}
                        </Drawer>
                    </Box>

                    <Box flex={1} p={3}>
                        {page === "home" && <Home />}
                        {page === "todo" && <ToDoList />}

                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default GoodLookingPage;