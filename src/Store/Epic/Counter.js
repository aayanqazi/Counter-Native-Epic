import { Observable } from "rxjs";
import CounterAction from '../Action/Counter'

class CounterEpic {

    increment = (action$) =>
        action$.ofType(CounterAction.INCREMENT_ASYNC)
            .switchMap(({ payload }) => {
                return Observable.of({
                    type: CounterAction.INCREMENT,
                    payload: null
                });
            })

    decrement = (action$) =>
        action$.ofType(CounterAction.DECREMENT_ASYNC)
            .switchMap(({ payload }) => {
                return Observable.of({
                    type: CounterAction.DECREMENT,
                    payload: null
                });
            })
}
export let counterEpic = new CounterEpic();