import GeneralContents from "./GeneralContents"
import { Box, Typography } from "@mui/material"
import ListComponent from "./ListComponent"
import CardCmponent from "./CardComponent"


const Projects = () => {
    const list = [
        <CardCmponent
            image="https://img.youtube.com/vi/cU6KwimPJGU/maxresdefault.jpg"
            title="Admission website"
            content="A Python/Django web application where it provides courses for students. The website 
                also managed by administrators. This web allows for students to register and login.
                Students can apply to course. Moreover, students can edit their profile and upload 
                their cv. Gust and student can send a message include suggestions or proposals to 
                the admin. Admin can manage students requests for courses via decline or approve. 
                Admin also can add, edit, and delete courses.He/She also can read and reply messages 
                from both gusts and students.
                "
            url="/projects/1" />,
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
            direction='row-reverse' />,
        <CardCmponent
            image="https://img.youtube.com/vi/t1QzcJbCAkg/maxresdefault.jpg"
            title="Fly-Booking"
            content="A MERN stack web application" />,

    ]
    return (
        <Box py={10}>
            <GeneralContents py={3} variant_type="h2" content="Projects I worked on" color="#B64D57" align="left" />
            <ListComponent list={list} />
        </Box>
    )
}

export default Projects