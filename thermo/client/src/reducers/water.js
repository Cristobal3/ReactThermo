function water(state, action) {
    if (state === undefined) {
        console.log('1st step no state"')
      return { 
    
        chosen: 0,
        customInterp: 0,

      };
    }
   
    switch (action.type) {
      case "customInterp":  
      console.log('2nd stage reducer about ot work') 
      console.log(state)     
        return {
            ...state,
            customInterp: state.customInterp + parseInt(action.customInterp),
            // messages: state.messages.concat({
            //     messages: action.message.greeting,
                
            
            
        }  
        case "steamInterp" :
        return {
            ...state,
            chosen: state.chosen + parseInt(action.chosen),
        }                                
      default:
        return state;
    }
  }
   
  export default water;