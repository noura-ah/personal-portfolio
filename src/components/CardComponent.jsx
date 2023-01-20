import { Card, CardContent, Button, Typography, Grid } from '@mui/material'
import { Container } from '@mui/system'

const CardCmponent = (props) => {
    const { image, title, content, url, direction, tags } = props

    return (
        <Grid container direction={direction}>
            <Grid item >
                <Typography variant="h2" component="h2" sx={{ mr: -3, ml: -3, mb: -3, color: "#d4e157" }}>
                    {title}
                </Typography>
            </Grid>
            <Grid item>
                <Card sx={{ maxWidth: 500, bgcolor: 'inherit', border: '2px solid #4db6ac' }} elevation={0} >
                    <CardContent sx={{ mx: 3, mt: 3 }}>
                        <Typography align="left" variant="body2" color="text.secondary">
                            {content}
                        </Typography>
                        <Container disableGutters sx={{ mt: 3 }}>
                            {tags.map(tag =>
                                <Button key={tag} size="small" sx={{ mr: 1, mt: 1, bgcolor: "#9575cd", color: 'white', '&:hover': { bgcolor: "#b39ddb" } }} href={url} >
                                    #{tag}
                                </Button>
                            )}
                        </Container>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default CardCmponent