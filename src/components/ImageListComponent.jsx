import { ListItem, ListItemText, Typography, ImageList, ImageListItem, useMediaQuery } from "@mui/material"

const ImageListComponent = (props) => {
    const matches = useMediaQuery('(min-width:800px)');

    const { list, w, h } = props
    return (
        <ImageList sx={{ width: w, height: h }} cols={matches ? 2 : 1} gap={1} rowHeight={164}>
            {list.map((val, index) => {
                return (
                    val.icon ?
                        <ImageListItem key={index}>
                            <img
                                style={{ width: 200, objectFit: 'contain' }}
                                src={val.icon}
                                srcSet={val.icon}
                                alt={val.name}
                                loading="lazy"
                            />
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