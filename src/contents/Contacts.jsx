import { IconButton } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GeneralContents from "../components/GeneralContents";
import { Container } from "@mui/system";

const Contacts = () => {
    
    return (
        <Container sx={{ pt:20, pb:20}}  >
            <GeneralContents content="Contact Me" align="center" variant_type="h3" color="secondary.main" py={2} />
            <IconButton
                size="large"
                color="inherit"
                aria-label="email"
                sx={{ mr: 2,bgcolor:'primary.main',color:'white','&:hover': {bgcolor:'primary.light'}  }}
                onClick={() => window.location = 'mailto:noura.ah1493@gmail.com'}
                
            >
                <EmailIcon />
            </IconButton>
            <IconButton
                size="large"
                color="inherit"
                aria-label="linkedin"
                sx={{ mr: 2,bgcolor:'lime.main' ,color:'white','&:hover': {bgcolor:'lime.light'}}}
                href='https://www.linkedin.com/in/norah-alhumaidan-06994120a/'
            >
                <LinkedInIcon />
            </IconButton>
            <IconButton
                size="large"
                color="inherit"
                aria-label="github"
                href='https://github.com/noura-ah/'
                sx={{color:'white',bgcolor:'red.main','&:hover': {bgcolor:'red.light'}}}
            >
                <GitHubIcon />
            </IconButton>
        </Container>
    )

}

export default Contacts