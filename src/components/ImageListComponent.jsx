import {
    ListItem, ListItemText, Typography, Tooltip,
    ImageList, ImageListItem, useMediaQuery
} from "@mui/material"

const ImageListComponent = (props) => {
    const matches = useMediaQuery('(min-width:600px)');
    const { list, w, h } = props

    return (
        <ImageList sx={{ width: w, height: h }} cols={matches ? 2 : 1} gap={1} rowHeight={164}>
            {list.map((val, index) => {
                return (
                    val.icon ?
                        <ImageListItem key={index} sx={{
                            p: 3, m: 1, display: 'flex', alignItems: 'center',
                            borderTop: matches ? val.top : '', borderLeft: matches ? val.left : '',
                            borderBottom: matches ? val.bottom : '', borderRight: matches ? val.right : ''
                            , borderTopRightRadius: val.tr, borderTopLeftRadius: val.tl,
                            borderBottomRightRadius: val.br, borderBottomLeftRadius: val.bl
                        }}>
                            
                            <Tooltip title={val.name}>
                                <img
                                    style={{ width: 120, objectFit: 'contain' }}
                                    src={process.env.PUBLIC_URL + val.icon}
                                    srcSet={process.env.PUBLIC_URL + val.icon}
                                    alt={val.name}
                                    loading="lazy"

                                />
                            </Tooltip>
                        </ImageListItem>
                        :
                        <ListItem key={index} alignItems="flex-start" >
                            <ListItemText primary={<Typography variant="body1">{val.name}</Typography>} />
                        </ListItem>
                )
            }

            )}

        </ImageList>)
}

export default ImageListComponent