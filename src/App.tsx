import React from 'react';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container>
      <Typography variant='h3' component="h1"  sx={{bgcolor: theme=>theme.palette.success.light, textAlign: 'center'}}>RTK Saga</Typography>
    </Container>
  );
}

export default App;
