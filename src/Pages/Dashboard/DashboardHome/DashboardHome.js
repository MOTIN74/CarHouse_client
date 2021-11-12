import React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
const DashboardHome = () => {
    return (
        <div><h2>Our Upcoming Cars Cooming Soon.................................</h2>
          <ImageList  cols={3} gap={8} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
        </div>
        
    );
};

export default DashboardHome;

const itemData = [
  {
    img: 'https://i.ibb.co/bHvG1g6/giphy.gif',
    title: 'Breakfast',
  },
  {
    img: 'https://i.ibb.co/n0sF5FN/chevrolet-car-models.jpg',
    title: 'Burger',
  },
  {
    img: 'https://i.ibb.co/dLZVt9V/caddy-featured.jpg',
    title: 'Camera',
  },
  {
    img: 'https://i.ibb.co/nwVBXx4/maxresdefault.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwSq4UseyC_QBUTR2cY55NIUzI6zso8xHf5A&usqp=CAU',
    title: 'Hats',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRmqbJttYSACAZNT_6aFZcWdIHil-41rhCnQ&usqp=CAU',
    title: 'Honey',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrNvLKXXSLf5XeAbiLW_y3fGgm0CCc3V8Bw&usqp=CAU',
    title: 'Basketball',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoEvVnPlUBGaWmrQEydQbAbksdBZwwJsYsg&usqp=CAU',
    title: 'Fern',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUy0SYo-rPq3ccqtb4kYrhkjrRG7VwWrNAww&usqp=CAU',
    title: 'Mushrooms',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFna9zrU99yw5azuB9Dh5kEh4G24EysoKaSQ&usqp=CAU',
    title: 'Tomato basil',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBLYO9LZMlmF2X3SwFzPHWqJg-Ci7U_PzavA&usqp=CAU',
    title: 'Sea star',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdaIIAe8Xgl0F6aVxlu6B9mNKoBtgHP4phGg&usqp=CAU',
    title: 'Bike',
  },
];