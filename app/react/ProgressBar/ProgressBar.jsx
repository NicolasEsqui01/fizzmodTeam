import React from 'react'
import { connect } from 'react-redux'
import {
    ProgressTotal,
    ProgressDone
} from './style'

/* {idSession.items.map((Element , indice) => <Barrita>{indice + 1}</Barrita>)} */
const ProgressBar = ({ Done, Total }) => {

    let porcentaje = (Done / Total) * 100 

    return (
        <ProgressTotal Total={Total} >
            <ProgressDone Done={porcentaje}>
            </ProgressDone>
        </ProgressTotal>
    )
}

const mapStateToProps = (state, ownProps) => {
    return ({
        Done: ownProps.Done,
        Total: ownProps.Total,
    })
}

export default connect(mapStateToProps, null)(ProgressBar)



