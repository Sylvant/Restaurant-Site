
function submenuReducer(state, action){
  switch(action.type){
    case 'hide':
      return null
    case 'show':
      const {id, position, linkSize}=action.payload
      return {id, position, linkSize}
    default:
      console.log('dispatched unknown action')
  }
}

export default submenuReducer