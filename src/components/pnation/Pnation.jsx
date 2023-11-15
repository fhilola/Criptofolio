import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';

export default function Pnation() {
    const handlePageClick = (data)=>{
        console.log(data);
    }
    return (
        <Container>
            <Stack spacing={2}>
            <Pagination
                count={5}
                variant="outlined"
                color="primary"
                onChange={handlePageClick}
            />
        </Stack>
        </Container>
    );
}