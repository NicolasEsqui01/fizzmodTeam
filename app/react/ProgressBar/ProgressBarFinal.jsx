import React from 'react'
import { connect } from 'react-redux'
import {
    ProgressTotal2,
    ProgressDone2
} from './style'

/* {idSession.items.map((Element , indice) => <Barrita>{indice + 1}</Barrita>)} */
const ProgressBar = ({Done,Total})=>{

    let porcentaje = (Done/Total)*100

    console.log(porcentaje)

return(
    <ProgressTotal2 Total={Total} >
        <ProgressDone2 Done={porcentaje}>
        </ProgressDone2>
    </ProgressTotal2>

)
}
const mapStateToProps = (state, ownProps)=>{
  console.log(ownProps)
    return({
        Done: ownProps.Done,
        Total: ownProps.Total
    })

}

export default connect(mapStateToProps, null)(ProgressBar)