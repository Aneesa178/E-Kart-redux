import React from 'react'
import { Row,Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { removeFromWishlist } from '../slices/wishlistSlice';
import { addToCart } from '../slices/cartSlice';


function Wishlist() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer);
  const dispatch = useDispatch();
  console.log("==Wishlist Array==");
  console.log(wishlistArray);
  return (
    <>
    <Row className='m-5 p-5' style={{marginTop:"400px"}}>
    <Link to={'/'} style={{textDecoration:"none",color:"blue"}} className='m-3'><i class="fa-solid fa-arrow-left m-2"></i>Back to Home</Link>
    {
        wishlistArray?.length>0?
        wishlistArray?.map((item)=>(
          <Col className='mb-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.thumbnail} style={{height:"200px"}}/>
            <Card.Body>
              <Card.Title>{item?.title}</Card.Title>
              <Card.Text>
                <p>{item.description.slice(0,50)}...</p>
                <p>Price: {item.price}</p>
        
              </Card.Text>
      
                <div className='d-flex align-items-center justify-content-between'>
                <Button variant="outline-danger" onClick={()=>dispatch(removeFromWishlist(item.id))}><i class="fa-solid fa-trash"></i></Button>
                <Button variant="outline-success" onClick={()=>dispatch(addToCart(item))}><i class="fa-solid fa-cart-plus"></i></Button>
                </div>
            </Card.Body>
          </Card>

        </Col>

        ))
        :
        <p>No item to display</p>
        }

    </Row>
    wishlist
    </>
  )
}

export default Wishlist