import React from "react";

import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

function PlaceDetails({place, selected, refProp}){
    const classes = useStyles();

    if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "smooth" })

    return (
        <Card elevation={6}>
            <CardMedia
                style = {{height: 350}}
                image = {place.photo ? place.photo.images.large.url : 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                title = {place.name}
            />

            <CardContent>
                <Typography gutterBottom variant="h5">
                    {place.name ? place.name : "Unidentified Restaurant"}
                </Typography>

                <Box display="flex" justifyContent="space-between">
                    <Rating value={Number(place.rating)} readOnly />
                    <Typography gutterBottom variant="subtitle1">out of {place.num_reviews} reviews</Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>

                {place?.awards?.map((award) => (
                  <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                    <img src={award.images.small} alt={award.display_name} />
                    <Typography variant="subtitle2">{award.display_name}</Typography>
                  </Box>
                ))}

                {place?.cuisine?.map(({name}) =>(
                  <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}

                {place?.address &&(
                  <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                    <LocationOnIcon /> {place.address}
                  </Typography>
                )}

                {place?.phone &&(
                  <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                    <PhoneIcon /> {place.phone}
                  </Typography>
                )}

                <CardActions>
                  <Button size="small" color="primary" onClick={() =>(window.open(place.web_url, '_blank'))}>
                    Trip Advisor
                  </Button>

                  <Button size="small" color="primary" onClick={() =>(window.open(place.website, '_blank'))}>
                    Website
                  </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default PlaceDetails;