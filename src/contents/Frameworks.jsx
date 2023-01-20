import GeneralContents from "../components/GeneralContents"
import React from "react"
import { Grid,useMediaQuery } from "@mui/material"
import ImageListComponent from "../components/ImageListComponent"

const Frameworks = () => {
    const frameworks_list = [
        {
            "icon": 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png',
            'name': 'Ruby on Rails',
            'right': '2px dashed #9575cd'
        },
        {
            "icon": 'https://gurzu.com/img/gurzu/mern-stack-01.png',
            'name': 'MERN (MongoDB, Express, React, Nodejs)',
            'bottom': '2px dashed #9575cd'
        },
        {
            "icon": 'https://www.logo.wine/a/logo/Django_(web_framework)/Django_(web_framework)-Logo.wine.svg',
            'name': 'Django',
            'top':'2px dashed #9575cd'
        },
        {
            "icon": 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png',
            'name': 'Spring boot',
            'left':'2px dashed #9575cd'
        }
    ]

    const matches = useMediaQuery('(max-width:900px)');

    return (
        <Grid container py={10} sx={{ color: '#d4e157',display:"flex", alignItems:"center", justifyContent:matches?"center":'right' }}>
            <Grid item lg={10} md={10} sm={10}>
                <GeneralContents py={3} variant_type="h2" content="Frameworks I worked with" color="#d4e157" align='right'/>
            </Grid>
            <Grid item lg={8} md={10} sm={11}>
                <ImageListComponent list={frameworks_list} />
            </Grid>
        </Grid>
    )
}

export default Frameworks