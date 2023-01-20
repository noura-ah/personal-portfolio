import { Box, Typography } from "@mui/material";

const GeneralContents = (props) =>{
    const { p,py,px ,variant_type, content, align, color, bgcolor, m}= props
    return (
    <Box m={m} p={p} px={px} py={py} sx={{ color:color, bgcolor: bgcolor}}>
        <Typography variant={variant_type} align={align}>{content}</Typography>
    </Box>
    )
}

export default GeneralContents