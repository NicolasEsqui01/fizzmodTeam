import styled from 'styled-components'
import { device } from '../../utils/mediaQuerys';


export const ProgressTotal = styled.div`
display: flex;
width: 90%;
height:20%;
border-radius:50px;
background-color:#fcaba9;
margin-top:5%
`

export const ProgressDone = styled.div`
${props => props.Done !==0 ?`width:${props.Done}%;`:null}
background-color: #FF4343;
opacity:1;
border-radius:50px;
`

export const ProgressTotal2 = styled.div`
display: flex;
width: 90%;
height:7%;
border-radius:50px;
background-color:#fcaba9;
margin-top:5%
`

export const ProgressDone2 = styled.div`
${props => props.Done !==0 ?`width:${props.Done}%;`:null}
background-color: #FF4343;
opacity:1;
border-radius:50px;
`