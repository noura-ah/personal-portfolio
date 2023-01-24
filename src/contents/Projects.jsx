import GeneralContents from "../components/GeneralContents"
import { Grid, useMediaQuery } from "@mui/material"
import ListComponent from "../components/ListComponent"
import CardCmponent from "../components/CardComponent"


const Projects = () => {
    const list = [
        <CardCmponent
            image="https://img.youtube.com/vi/cU6KwimPJGU/maxresdefault.jpg"
            title="Admission"
            content="A Python/Django web application where it provides courses for students. The website 
                also managed by administrators. This web allows for students to register and login.
                Students can apply to course. Moreover, students can edit their profile and upload 
                their cv. Gust and student can send a message include suggestions or proposals to 
                the admin. Admin can manage students requests for courses via decline or approve. 
                Admin also can add, edit, and delete courses.He/She also can read and reply messages 
                from both gusts and students.
                "
            url=""
            tags={['Django','Python','Bootstrap']} />,
        <CardCmponent
            image="https://img.youtube.com/vi/SD4Bb3jyOnY/maxresdefault.jpg"
            title="iCare store"
            content="A Spring boot web application to sell care products. 
            The store provides two type of services, one for admin and the other for buyers. 
            Admin can manage(add, edit, delete) products and their details including images, 
            description, price and stock available. In addition, admin can manage orders status. 
            Buyers can add/remove products to/from cart, add multiple addresses, choose payment method, 
            and apply discount if there is any, then place the order. 
            They also can write a review about product, rate it and add pics if they want. 
            The average rating will be shown in product card in the main page and in the product 
            page as well. In addition, if product is out of stock or almost out of stock it will 
            be shown in the product card.
            "
            direction='row-reverse' 
            tags={['Spring boot','Java','Bootstrap']}/>,
        <CardCmponent
            image="https://img.youtube.com/vi/t1QzcJbCAkg/maxresdefault.jpg"
            title="Fly-Booking"
            content="A MERN stack web application. It website where you can search for flights available by choosing a certain 
            source and destination, then you can book a flight and pay then receive a ticket" 
            tags={['MERN','MongoDB','Express.js','React.js','Node.js','Bootstrap']}/>,

    ]

    const matches = useMediaQuery('(min-width:900px)');
    return (
        <Grid container py={10} sx={{ display:"flex" , alignItems:"center", justifyContent:matches?"none":"center"}}>
            <Grid item lg={12} md={10} sm={10}>
                <GeneralContents pb={3} variant_type="h3" content="Projects I worked on" color="red.main" align="left" />
            </Grid>
            <Grid item lg={12} md={12} sm={10}>
                <ListComponent list={list} />
            </Grid>
        </Grid>
    )
}

export default Projects