import { IconButton } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GeneralContents from "../components/GeneralContents";
import { Container } from "@mui/system";
const Contacts = () => {
    return (
        <Container sx={{ pt:20, pb:20}}  >
            <GeneralContents content="Contact Me" align="center" variant_type="h2" color="#4db6ac" py={2} />
            <IconButton
                size="large"
                color="inherit"
                aria-label="email"
                sx={{ mr: 2,bgcolor:'#9575cd',color:'white' }}
                onClick={() => window.location = 'mailto:noura.ah1493@gmail.com'}
                
            >
                <EmailIcon />
            </IconButton>
            <IconButton
                size="large"
                color="inherit"
                aria-label="linkedin"
                sx={{ mr: 2,bgcolor:'#d4e157' ,color:'white'}}
                href='https://www.linkedin.com/in/norah-alhumaidan-06994120a/'
            >
                <LinkedInIcon />
            </IconButton>
            <IconButton
                size="large"
                color="inherit"
                aria-label="github"
                href='https://github.com/noura-ah/'
                sx={{color:'white',bgcolor:'#B64D57'}}
            >
                <GitHubIcon />
            </IconButton>
        </Container>
    )

}

export default Contacts