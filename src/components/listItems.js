import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Speed from '@mui/icons-material/Speed';
import Groups from '@mui/icons-material/Groups';
import LibraryAdd from '@mui/icons-material/LibraryAdd';


export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <Speed />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LibraryAdd />
            </ListItemIcon>
            <ListItemText primary="Courses" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <Groups />
            </ListItemIcon>
            <ListItemText primary="Students" />
        </ListItemButton>
    </React.Fragment>
);
