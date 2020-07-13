import React from 'react';
import {
  Container,
  LIzquierdo,
  LDerecho,
  Oval,
  Indicadores,
  Puntos,
  OvalInt,
  Pickers,
  Qty,
  Orders,
  Icos24,
  Box
} from './style';
import box from '../../images/24x24/box.svg'

export default () => (
  <Container>
  	
	    <LIzquierdo>
	      <Oval>
	        <OvalInt>
	          <Pickers>4 PICKERS</Pickers>
	          <Qty>28</Qty>
	          <Orders>ORDENES</Orders>
	        </OvalInt>
	      </Oval>
	      <Indicadores>
	      	<Icos24>
	      		<img src={box}/>
	      		<p>7</p>
	      		<p>X PICKER</p>
	      	</Icos24>
	      </Indicadores>
	      <Puntos></Puntos>
	    </LIzquierdo>
    
    <LDerecho>Derecho</LDerecho>
  </Container>
);
