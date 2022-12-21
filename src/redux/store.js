import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { youtubeMusicApi } from './services/youtubeMusic';

export const store = configureStore({
  reducer: {
    [ youtubeMusicApi.reducerPath ]: youtubeMusicApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(youtubeMusicApi.middleware)
});
 