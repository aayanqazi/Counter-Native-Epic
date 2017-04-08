export default class CounterAction {

    static INCREMENT = "INCREMENT";
    static DECREMENT = "DECREMENT";

    static increment(){
        return { 
            type: 'INCREMENT'
        }
    }

    static decrement(){
        return { 
            type: 'DECREMENT' 
        }
    }

}