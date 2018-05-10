function water(state, action) {
    if (state === undefined) {
        console.log('1st step no state"')
      return { 
    
        total: 0
      };
    }
   
    switch (action.type) {
      case "message":  
      console.log('2nd stage reducer about ot work') 
      console.log(state)     
        return {
            ...state,
            total: state.total + parseInt(action.total),
            // messages: state.messages.concat({
            //     messages: action.message.greeting,
                
            
            
        }  
                                          
      default:
        return state;
    }
  }
   
  export default water;