import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { listProducts } from '../actions/productsAction';
import Product from '../components/Product';

const HomeScreen = ({ isLoading, products, error, listProducts }) => {
  useEffect(() => {
    listProducts();
  }, [listProducts]);

  return (
    <div>
      <h1>Latest products</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Row>
          {products &&
            products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
        </Row>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.productsList.loading,
    products: state.productsList.products,
    error: state.productsList.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listProducts: () => dispatch(listProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
