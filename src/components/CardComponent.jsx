import { Card, CardContent, Button, Typography, Grid } from '@mui/material'
import { Container } from '@mui/system'

const CardCmponent = (props) => {
    const { title, content, url, direction, tags } = props

    return (
        <Grid container direction={direction}>
            <Grid item >
                <Typography variant="h3" component="h2" sx={{ mr: -3, ml: -3, mb: -2, color: "lime.main" }}>
                    {title}
                </Typography>
            </Grid>
            <Grid item>
                <Card sx={{ maxWidth: 500, bgcolor: 'inherit', border: '2px solid #4db6ac' }} elevation={0} >
                    <CardContent sx={{ mx: 3, mt: 3 }}>
                        <Typography align="left" variant="body2" color="text.grey">
                            {content}
                        </Typography>
                        <Container disableGutters sx={{ mt: 3 }}>
                            {tags.map(tag =>
                                <Button
                                    key={tag} size="small"
                                    sx={{ mr: 1, mt: 1, bgcolor: "primary.main", color: 'white', '&:hover': { bgcolor: "primary.light" } }}
                                    href={url} >
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