import React from 'react'
import Session from './Session'
import { connect } from 'react-redux'
import { map } from 'lodash'


const SessionConteiner = ()=>{


return (
    <Session/>
)

}

export default connect(null, null)(SessionConteiner)

/* mapStateToProps, mapDispatchToProps */