import React from 'react';
import { Div } from './style'

export default ({handleSubmit , handleChange , valor}) =>{
    return (
        <Div>
            <form onSubmit={handleSubmit}>
                <label>Codigo Manual</label>
                <br/>
                <input type="text" name='codigo' placeholder='ingresar el codigo' onChange={handleChange} value={valor}/>
                <input type="submit" value="ingresar"/>
            </form>
        </Div>
    )
};
