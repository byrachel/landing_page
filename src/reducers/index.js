import { combineReducers } from 'redux';

// import de tous les reducers présents dans le dossier reducer
import { dataForm } from './dataForm';

const rootReducer = combineReducers({
    dataForm
})

export default rootReducer;