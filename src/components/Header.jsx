import { Box, Typography, Grid, Container, CssBaseline, useMediaQuery } from "@mui/material";
import GeneralContents from "./GeneralContents";
import ResponsiveAppBar from './ResponsiveAppBar'


const Header = () => {
    const matches = useMediaQuery('(min-width:900px)');
    return <>
        <Grid container pt={20} pb={10} align="left" sx={{ color: '#4db6ac', display:"flex" , alignItems:"center", justifyContent:matches?"none":"center"}}>
            <Grid item lg={8} md={6} sm={10}>
                <Typography variant="h2">Hello, I'm Norah Alhumaidan</Typography>
                <Typography variant="h4"></Typography>
                <Typography variant="subtitle1" paragraph>I'm a full-stack developer here put some info about you here put some I'm a full-stack developer here put some info about you here put some info about you</Typography>
                <Typography variant="subtitle1"></Typography>
            </Grid>
        </Grid>
    </>
}

export default Header