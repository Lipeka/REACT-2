import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid,Typography} from '@mui/material';

const cardData = [
  {
    id: 1,
    title: 'RESPIRATORY SYSTEM QUIZ',
    description: 'The perfect and tastiest triangle now available in Uber Eats! Pick your restaurant to order now.',
    imageUrl: 'https://i.pinimg.com/originals/35/2f/37/352f373c8b8ca5624f3e980bc6f2b41d.jpg',
  },
  {
    id: 2,
    title: 'DIGESTIVE SYSTEM QUIZ',
    description: 'A fine taste of Italy right in your neighborhood through Uber Eats! Pick your restaurant to order now.',
    imageUrl: 'https://i.etsystatic.com/6436695/r/il/8401be/1062712213/il_1588xN.1062712213_ol5c.jpg',
  },
  {
    id: 3,
    title: 'NERVOUS SYSTEM QUIZ',
    description: 'The perfect slice of life now available in Uber Eats! Pick your restaurant to order now.',
    imageUrl: 'https://i.pinimg.com/736x/24/89/fa/2489fab01655a7ab597bd720269c4726.jpg',
  },
  {
    id: 4,
    title: 'CIRCULATORY SYSTEM QUIZ',
    description: ' ab uber eats mein maans mukt svaadisht bhaarateey bred ka aanand le ! Pick your restaurant to order now.',
    imageUrl: 'https://i.pinimg.com/736x/be/e7/b1/bee7b16090b7cdb10eedc1bffd22c123.jpg',
  },
  {
    id: 5,
    title: 'EXCRETORY SYSTEM QUIZ',
    description: 'To the people who miss veetu saapadu, from Uber eats! Pick your restaurant to order now.',
    imageUrl: 'https://www.dpcedcenter.org/wp-content/uploads/2013/01/Human-kidney-on-scientific-background-1090830664_3600x2400.jpeg',
  },   
  {
    id: 6,
    title: 'SKELETAL SYSTEM QUIZ',
    description: 'The Ultimate Pattie and Bun Treat from Uber Eats! Pick your restaurant to order now.',
    imageUrl: 'https://files.mtstatic.com/site_4463/1976/0?Expires=1703955271&Signature=dmJx~TBQxKW8uIwX3jERQ~sp-z9j1N0~ZZ87WufkGzS6nqsFGVE6Q8pop-ltJfk2W9oAIxSZMy7yLC0wVkjm0m~OmF08re0rGj7fciTe0ZSogJIItTesu10E2GAQmobB8jQ9FU4yRMiyyoihIBtm2H4KJVZ0PJ~8YA1Ypm95H0k_&Key-Pair-Id=APKAJ5Y6AV4GI7A555NA',
  },   
  {
    id: 7,
    title: 'MUSCULAR SYSTEM QUIZ',
    description: 'The Ultimate Pattie and Bun Treat from Uber Eats! Pick your restaurant to order now.',
    imageUrl: 'https://www.modernheal.com/wp-content/uploads/2014/04/muscular-system-anatomy-and-physiology.jpg',
  },   
  {
    id: 8,
    title: 'ENDOCRINE SYSTEM QUIZ',
    description: 'The Ultimate Pattie and Bun Treat from Uber Eats! Pick your restaurant to order now.',
    imageUrl: 'https://1.bp.blogspot.com/-Wkns7pWk5P4/Ux12xNvG2NI/AAAAAAAAHmQ/ZsITpHqAML0/s1600/e-s.jpg',
  },   
];//array of contents has been declared  
function MultiActionAreaCard({ title, description, imageUrl }) {
  return (
    <Card sx={{ maxWidth: 355 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="100"
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          ATTEND QUIZ
        </Button>
      </CardActions>
      <CardActions>
        <Button size="small" color="primary">
          ADD QUESTIONS
        </Button>
      </CardActions>
    </Card>
  );//we have styled an individual card and content details
//we have declared the style or the syntax of a single card and we have added 2 buttons in each card
}


function CardGrid() {
  return (
    <Grid container spacing={2}>
      {cardData.map((card) => (
        <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
          <MultiActionAreaCard
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        </Grid>
      ))}
    </Grid>
  );
}
//each and every card has been added to the page and now represented as a grid and we have have mentioned the spacing and table of contents etc

export default CardGrid;
