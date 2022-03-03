import { DECREMENT, DECREMENT_5, INCREMENT, INCREMENT_5, RESET } from "../type";

export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });
export const increase_5 = () => ({ type: INCREMENT_5, payload: 5 });
export const decrease_5 = () => ({ type: DECREMENT_5, payload: 5 });
export const reset = () => ({ type: RESET });
