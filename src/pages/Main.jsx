import Header from "../components/Header"
import Frameworks from "../components/Frameworks"
import Projects from "../components/Projects"
import { Container, CssBaseline } from "@mui/material"
import Contacts from "../components/Contacts"

const Main = () => {

    return (
        <div style={{ backgroundColor: "#fafafa" }} >
            <CssBaseline />
            <Container maxWidth="md"  >
                <div id="Home" style={{borderRight:'2px solid #d4e157'}}>
                    <Header />
                </div>
                <div id="Frameworks" style={{borderLeft:'2px solid #4db6ac'}}>
                    <Frameworks />
                </div>
                <div id="Projects" style={{borderRight:'2px solid #9575cd'}}>
                    <Projects />
                </div>
                <div id='Contact-Me' style={{borderLeft:'2px solid #B64D57'}}>
                    <Contacts/>
                </div>
            </Container>
            kkkkcs
        </ div>
    )
}

export default Main