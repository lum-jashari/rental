import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import formsReducer from "./OrderForm";

export const store = configureStore({
    reducer: {
        orderform: formsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
