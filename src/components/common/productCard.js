import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export const ProductCard = (props) => {
  return (
    <Card sm={{ maxWidth: 345 }}>
      <CardActionArea className="hover:text-[#3758f9]" >
        <CardMedia
          component='img'
          height='140'
          image={props.image}
          alt='green iguana'
        />
        {props?.description ? (
          <CardContent>
            <div
              className='flex text-center justify-center text-2xl font-bold'
              gutterBottom
              variant='h5'
              component='div'
            >
              {props.title}
            </div>
            <div
              className='flex text-center justify-center hover:text-black'
              variant='body2'
              color='text.secondary'
            >
              {props?.description}
            </div>
          </CardContent>
        ) : (
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {props.title}
            </Typography>
          </CardContent>
        )}
      </CardActionArea>
      {!props?.description ? (
        <CardActions>
          <Button className='bg-[#3758f9]' size='small' color='primary'>
            Share
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
};
