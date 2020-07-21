/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';

const img ={
  'width':'100%',
  'height':'30%'
};


export default function NotFound() {
  return <img style={img} src='https://wpsites.net/wp-content/uploads/2018/08/404-error-template-genesis.png'/>
}
