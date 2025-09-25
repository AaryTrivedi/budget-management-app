export default function coinsReducer(state: any, action: any) {
    switch (action.type) {
        case 'fetched':
            return action.data;
        default:
            return state;
    }
}