import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, IconButton } from '@mui/material';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';

// function preventDefault(event) {
//     event.preventDefault();
// }

export default function GRA415() {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Box>
                        <Typography sx={{ display: 'flex', fontSize: 20 }} component="p" variant="h6" color="#5c5c5c">
                            Date: 02 - 05 - 2015
                        </Typography>
                        <Typography sx={{ display: 'flex', fontSize: { md: 20, xs: 18 } }} component="p" variant="h6" color="#5c5c5c">
                            Time: 6:00am
                        </Typography>

                    </Box>
                    <Box sx={{ pt: 2, ml: { md: -10, xs: -3 }, px: 2 }}>
                        <IconButton sx={{ backgroundColor: '#e8fff8', borderRadius: 1 }}>
                            <AttachFileOutlinedIcon />
                            <Typography component="p" variant="subtitle1" color="#5c5c5c">
                                GRA415.pdf
                            </Typography>
                        </IconButton>
                        <IconButton>
                            <NoteAltOutlinedIcon />
                            <DeleteOutline />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}