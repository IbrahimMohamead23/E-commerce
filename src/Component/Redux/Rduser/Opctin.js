

const  isOpen = false;
const tistIsOpctin = (state = isOpen, action) => {

   switch(action.type){
     case 'OPEN':
      return state = true; 
      
      break;

      case 'CLOSE':
        return state = false;

        break;

        default:
              return state;
   }
}

export default tistIsOpctin;
