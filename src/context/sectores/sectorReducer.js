import { OBTENER_SECTORES, SECTOR_ACTUAL } from '../../types'

export default (state, action) => {
    switch(action.type){
        case OBTENER_SECTORES:
            return {
                ...state,
                sectores: action.payload
            }
        case SECTOR_ACTUAL:
            return{
                ...state,
                sector:state.sectores.filter(sector => {
                    return sector.id === action.payload
                })
            }
        default:
            return state;
    }
}