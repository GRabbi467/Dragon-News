import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData();
    const {title,author,image_url,details} = news;
    console.log(news);
    return (
        <div>
    <Card style={{}}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <p>{details}</p>
        </Card.Text>
      </Card.Body>
    </Card>        
        </div>
    );
};

export default News;