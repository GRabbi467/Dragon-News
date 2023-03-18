import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaBookmark,FaShareAlt,FaEye,FaStar} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const NewsCard = ({news}) => {
    const {_id,title,author,details,image_url,total_view,rating} = news;
    
    return (
    <div>
    <Card className="mb-5">
      <Card.Header className='d-flex  justify-content-between  align-items-center'>
       <div className='d-flex'>
           <Image
           className='me-3'
           roundedCircle
           src = {author.img}
           style={{height:'60px'}}
           ></Image>

           <div className=''>
            <p className='mb-0'>{author?.name}</p>
            <p className='mb-0'> {author?.published_date}</p>
           </div>
       </div>
       <div>
       <FaBookmark/>
       <FaShareAlt/>
       </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
         {
            details.length > 250 ?
            <p>{details.slice(0,250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
            :
            <p>{details}</p>

         }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
         <div>
         {total_view} <FaEye></FaEye>
         </div>
         
         <div>
         <FaStar className='me-2'/>{rating.number}
         </div>
        </Card.Footer>
    </Card>

            
    </div>
    );
};

export default NewsCard;