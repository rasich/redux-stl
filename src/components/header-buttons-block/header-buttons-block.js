import React from 'react';
import {Link} from "react-router-dom";

import Button from '@material-ui/core/Button';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const HeaderButtonsBlock = ({pathname, length, onSort}) => {
  if (!length) {
    return null
  }
  if (pathname) {
    return (
      <Button 
        variant="contained" 
        color="primary"
        onClick={onSort}
      >
        <SortByAlphaIcon/>
      </Button>
    )
  }
  return (
    <Button 
      variant="contained" 
      color="primary"
    >
      <Link className='link' to='/' style={{height: '24px'}}>
        <ArrowBackIcon htmlColor="#ffffff"/>
      </Link>
    </Button>
  )
}

export default HeaderButtonsBlock;