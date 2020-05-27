import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

//item
// {
//   id: 1,
//   name: 'Brown Brim',
//   imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
//   price: 25
// }

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  //1. we are creating an addItem function that will go to CollectionItem "addItem: "
  //2. whenever we call this function it will receive 'item' as a parameter and will pass this
  //   parameter to our addItem() action creator function which give us an object where type is equal to ADD_TYPE
  //   and payload is equal to 'item' that is passed in
  //3. after that it will dipach() whole object to our STORE an it will go through Redux flow
  addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);
