const initialState = {
  sessions = []
}

export default function reducer (state = initialState, action){
switch(action.type){

    case 'TRAEME_LAS_SESSIONES':
        return {...state, sessions: action.sessions}
       
       
 default: return state;
};

}
