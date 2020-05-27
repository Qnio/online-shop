import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

//this one needs to be a Class component because we need to store the state value
//of those menu items that we want to pass and create our menu items with

const Directory = ({ selections }) => (
  <div className='directory-menu'>
    {/*this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
        ))*/}

    {selections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  selections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
