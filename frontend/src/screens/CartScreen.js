import React, { useEffect } from 'react';
import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { addToCartAction } from '../actions/cartAction';

const CartScreen = ({ match, location }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  console.log({ cartItems });
  useEffect(() => {
    if (productId) {
      dispatch(addToCartAction(productId, qty));
    }
  }, [productId, qty, dispatch]);

  return <Row>Cart</Row>;
};

export default CartScreen;
