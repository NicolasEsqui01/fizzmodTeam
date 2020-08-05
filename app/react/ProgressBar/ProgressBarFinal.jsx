import React from 'react'
import { connect } from 'react-redux'
import {
    ProgressTotal2,
    ProgressDone2
} from './style'

/* {idSession.items.map((Element , indice) => <Barrita>{indice + 1}</Barrita>)} */
const ProgressBar = ({Done,Total})=>{

    let porcentaje = ((Done+1)/Total)*100



return(
    <ProgressTotal2 Total={Total} >
        <ProgressDone2 Done={porcentaje}>
        </ProgressDone2>
    </ProgressTotal2>

)
}
const mapStateToProps = (state, ownProps)=>{

    return({
        Done: ownProps.Done,
        Total: ownProps.Total
    })

}

export default connect(mapStateToProps, null)(ProgressBar)