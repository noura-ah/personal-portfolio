import { List, ListItem, ListItemText, Typography } from "@mui/material"

const ListComponent = (props) => {
    const { list } = props
    return (
        <List variant="masonry" >
            {list.map((item, index) =>
                <ListItem key={index} sx={{ my: 8 }} >
                    <ListItemText primary={<Typography component="div" variant="body1">{item}</Typography>} />
                </ListItem>
            )}
        </List>)
}

export default ListComponent