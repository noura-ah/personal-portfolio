import GeneralContents from "../components/GeneralContents"
import React from "react"
import { Grid, useMediaQuery } from "@mui/material"
import ImageListComponent from "../components/ImageListComponent"

const Frameworks = () => {
    const frameworks_list = [
        {
            "icon": '/rails.png',
            'name': 'Ruby on Rails',
            'top': '2px solid #c62828',
            'bottom': '2px solid #c62828',
            'left': '2px solid #c62828',
            'tl': 3,
            'bl': 3,
        },
        {
            "icon": '/angular.png',
            'name': 'Angular',
            'top': '2px solid #c62828',
            'right': '2px solid #c62828',
            'left': '2px solid #c62828',
            'br': 3,
            'tr': 3
        },
        {
            "icon": '/mern.png',
            'name': 'MERN (MongoDB, Express, React, Nodejs)',
            'top': '2px solid #c62828',
            'right': '2px solid #c62828',
            'bottom': '2px solid #c62828',
            'tl': 3,
            'tr': 3
        },
        {
            "icon": '/django.png',
            'name': 'Django',
            'bottom': '2px solid #c62828',
            'right': '2px solid #c62828',
            'left': '2px solid #c62828',
            'bl': 3,
            'br': 3
        },
        {
            "icon": '/spring.png',
            'name': 'Spring boot',
            'top': '2px solid #c62828',
            // 'right': '2px solid #c62828',
            'bottom': '2px solid #c62828',
            'br': 3,
            'tr': 3
        },
        {
            "icon": '/dotnet.png',
            'name': '.Net core',
            'left': '2px solid #c62828',
            'right': '2px solid #c62828',
            'bottom': '2px solid #c62828',
            'br': 3,
            'tr': 3
        }

    ]

    const matches = useMediaQuery('(max-width:900px)');

    return (
        <Grid container py={10}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: matches ? "center" : 'right'
            }}>
            <Grid item lg={10} md={10} sm={10}>
                <GeneralContents
                    py={3}
                    variant_type="h3"
                    content="Frameworks I worked with"
                    color="lime.main"
                    align='right'
                />
            </Grid>
            <Grid item lg={8} md={8} sm={8}
                sx={{
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'end'
                }}>
                <ImageListComponent list={frameworks_list} />
            </Grid>
        </Grid>
    )
}

export default Frameworks