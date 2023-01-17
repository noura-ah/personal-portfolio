import Header from "../components/Header"
import Frameworks from "../components/Frameworks"
import Projects from "../components/Projects"
import GeneralContents from "../components/GeneralContents"
import { Container, CssBaseline } from "@mui/material"

const Main = () => {

    return (
        <div style={{ backgroundColor: "#fafafa" }} >
            <CssBaseline />
            <Container maxWidth="md"  >
                <div id="Home">
                    <Header />
                </div>
                <div id="Frameworks">
                    <Frameworks />
                </div>
                <div id="Projects">
                    <Projects />
                </div>
            </Container>
        </ div>
    )
}

export default Main