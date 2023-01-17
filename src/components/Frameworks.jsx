import GeneralContents from "./GeneralContents"
import React from "react"
import { Grid, Typography } from "@mui/material"
import ListComponent from "./ListComponent"
import ImageListComponent from "./ImageListComponent"
const Frameworks = () => {
    const frameworks_list = [
        {
            "icon": 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png',
            'name': 'Ruby on Rails'
        },
        {
            "icon": 'https://gurzu.com/img/gurzu/mern-stack-01.png',
            'name': 'MERN (MongoDB, Express, React, Nodejs)'
        },
        {
            "icon": 'https://www.logo.wine/a/logo/Django_(web_framework)/Django_(web_framework)-Logo.wine.svg',
            'name': 'Django'
        },
        {
            "icon": 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png',
            'name': 'Spring boot'
        }
    ]
    return (
        <Grid container py={10} align="" sx={{ color: '#d4e157',display:"flex", alignItems:"center", justifyContent:"center" }}>
            <Grid item lg={6} md={6} sm={10}>
                <GeneralContents py={3} variant_type="h2" content="Frameworks I worked with ..." color="#d4e157" align="left" />
            </Grid>
            <Grid item lg={6}>
                <ImageListComponent list={frameworks_list} />
            </Grid>
        </Grid>
    )
}

export default Frameworks