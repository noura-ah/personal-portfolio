import { Card, CardContent, Button, Typography, Grid } from '@mui/material'
import { Container } from '@mui/system'
import { IconButton } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';

const CardCmponent = (props) => {
    const { title, content, url, direction, tags, variant } = props

    return (
        <Grid container direction={direction}>
            <Grid item >
                <Typography variant={variant || 'h3'} sx={{ mr: -3, ml: -3, mb: -2, color: "lime.main" }}>
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
                            <IconButton
                                size="small"
                                color="inherit"
                                aria-label="github"
                                href={url}
                                sx={{ color: 'lime.main', mr: 1, mt: 1, '&:hover': { color: 'lime.light' } }}
                            >
                                <GitHubIcon />
                            </IconButton>
                        </Container>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default CardCmponent