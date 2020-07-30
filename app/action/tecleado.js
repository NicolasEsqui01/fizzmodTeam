import { headers } from '../headers';

const setInput = (input)=>({
  type:'SET_INPUT',
  input

})

export const InfoInput = (info)=> dispatch =>{
 
    return dispatch(setInput(info))

}