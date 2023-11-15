import './Pnation.scss'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container } from '../../utils';

export default function Pnation({setItems}) {
    
    const fetchData = async (currentPage) =>{
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=${currentPage}&sparkline=false&price_change_percentage=24h`)
        const data = await response.json()
        return data
    }
    const handlePageClick = async (e, p)=>{
        const currentPage = p
        const datasFormServer = await fetchData(currentPage)
        setItems(datasFormServer)
    }
    return (
        <section className="pagination">
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
        </section>
    );
}