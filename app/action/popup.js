 
 const Activar = (numero)=>({
  type:'ACTIVATION',
  numero
 })

 const Desactivar = ()=>({
 type:'DESACTIVATION',
 numero : 0
 })

 export const Activacion = (n) => dispatch =>{
   return dispatch(Activar(n))

 }

 export const Desactivacion = () => dispatch =>{
    return dispatch(Desactivar())
 
  }