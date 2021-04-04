import { configureStore } from '@reduxjs/toolkit';
import infoReducer from '../features/InfoList/infoSlice';


const rootReducer = {
  infos: infoReducer
}

export default configureStore({
  reducer: rootReducer
});
