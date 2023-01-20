import { Typography, Grid,  useMediaQuery } from "@mui/material";


const Header = () => {
    const matches = useMediaQuery('(min-width:900px)');
    return <>
        <Grid container pt={20} mb={10} align="left" sx={{ color: '#4db6ac', display:"flex" , alignItems:"center", justifyContent:matches?"none":"center"}}>
            <Grid item lg={8} md={6} sm={10}>
                <Typography variant="h2">Hello, I'm Norah Alhumaidan</Typography>
                <Typography variant="subtitle1" paragraph>I'm a full stack web developer, have knowledge in multiple frameworks. Recently started working as full stack developer in Oivan company.
                I built this website using React and Material UI. </Typography>
                <Typography variant="subtitle1"></Typography>
            </Grid>
        </Grid>
    </>
}

export default Header