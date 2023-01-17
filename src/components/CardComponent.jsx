import { Card, CardContent, CardMedia, CardActions, Button, Typography } from '@mui/material'
import { flexbox } from '@mui/system'

const CardCmponent = (props) => {
    const { image, title, content, url,direction } = props
    return (
        <div style={{display:'flex',alignItems:'center', flexDirection:direction? direction:''}}>
            <CardMedia
                component="img"
                alt="green iguana"
                image={image}
                sx={{ mr:-3,ml:-3, width: 420, height:250, position:'relative'}}
            />
            <Card sx={{ maxWidth: 500, bgcolor: 'inherit', border: '2px solid #4db6ac' }} elevation={0} >
                <CardContent sx={{ mx:3, mt:3 }}>
                    <Typography align="left" gutterBottom variant="h5" component="h5">
                        {title}
                    </Typography>
                    <Typography align="left"  variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
                <CardActions sx={{ mx: 3, mb:3 }}>
                    <Button sx={{color:"#d4e157"}} href={url} size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CardCmponent