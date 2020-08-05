import axios from "axios";
import { headers, headersTotal, headers2 } from '../headers'

const totalSessiones = (totalSessions) => ({
  type: "GET_SESSIONS",
  totalSessions,
});

const totalPending = (totalSessionsPending) => ({
  type: "TOTAL_PENDING",
  totalSessionsPending,
});

const totalPicking = (totalSessionsPicking) => ({
  type: "TOTAL_PICKING",
  totalSessionsPicking,
});

const StatusPending = (sessions)=>({
  type: "GET_SESSIONS_PENDING",
  sessions,
})

const StatusPicking = (sessions)=>({
  type: "GET_SESSIONS_PICKING",
  sessions,
})

export const fetchSessions = () => (dispatch) => {
  let sessions = 0;
  let pending = 0;
  let picking = 0;
  return axios
    .get(`https://picking.janis.in/api/session?filters[status][0]=picking&filters[myPendingSessions]=mine&sortBy=dateCreated&sortDirection=desc`, headersTotal())
    .then((list) => {
      picking = list.data.length;
      dispatch(totalPicking(picking))
      dispatch(StatusPicking(list.data))})
    .then(()=>{
     axios.get(`https://picking.janis.in/api/session?filters[status][0]=pending&sortBy=dateCreated&sortDirection=desc`, headers2())
      .then((list) => {
      pending = list.data.length;
      sessions = pending + picking;
      dispatch(totalPending(pending))
      dispatch(totalSessiones(sessions))
      dispatch(StatusPending(list.data))
      })
    })
};

export const ChangePending = () => dispatch =>{
  return axios
  .get(`https://picking.janis.in/api/session?filters[status][0]=pending&sortBy=dateCreated&sortDirection=desc`, headers2())
  .then((list) => {
      dispatch(StatusPending(list.data))}
      );
};

export const ChangePicking = (qtyTotal) => dispatch =>{
  return axios
  .get(`https://picking.janis.in/api/session?filters[status][0]=picking&filters[myPendingSessions]=mine&sortBy=dateCreated&sortDirection=desc`, headersTotal())
  .then((list) => {
      dispatch(StatusPicking(list.data))}
      );
};
