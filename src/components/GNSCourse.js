import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import LibraryAdd from '@mui/icons-material/LibraryAdd';
import GNS405 from './GNS405';

export default function GNSCourse() {
    return (
        <Container sx={{ mt: 4, mb: 4, overflow: 'hidden', width: { xs: '80vw', md: '100%' } }}>
            <Grid container spacing={5}>

                <Grid item xs={12} md={4} lg={4}>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                        <IconButton>
                            <LibraryAdd />
                        </IconButton>
                        <Typography variant='h6' component='h4' color='#5c5c5c'>
                            Schedule Class
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #ededed',
                            borderRadius: 2,
                        }}
                    >
                        <GNS405 />
                    </Box>
                    <Box
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #ededed',
                            borderRadius: 2,
                            mt: 3,
                        }}
                    >
                        <GNS405 />
                    </Box>
                </Grid>

                <Grid item xs={12} md={4} lg={4}>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                        <IconButton>
                            <LibraryAdd />
                        </IconButton>
                        <Typography variant='h6' component='h4' color='#5c5c5c'>
                            Schedule Test
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #ededed',
                            borderRadius: 2,
                        }}
                    >
                        <GNS405 />
                    </Box>
                    <Box
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #ededed',
                            borderRadius: 2,
                            mt: 3,
                        }}
                    >
                        <GNS405 />
                    </Box>
                </Grid>

                <Grid item xs={12} md={4} lg={4}>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                        <IconButton>
                            <LibraryAdd />
                        </IconButton>
                        <Typography variant='h6' component='h4' color='#5c5c5c'>
                            Schedule Exam
                        </Typography>
                    </Box>
                    <Box sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid #ededed',
                        borderRadius: 2,
                    }}>
                        <GNS405 />
                    </Box>
                    <Box
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #ededed',
                            borderRadius: 2,
                            mt: 3,
                        }}
                    >
                        <GNS405 />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}