export const reducer_function_example = `
    /* reducer example */
    export const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'ACTION_TYPE':
                return {
                    ...state,
                    property: action.payload
                };
            default:
                return state;
        }
    };


    `;
export const action_in_redux = `
    /* action example */
    export const action = (payload) => {
        return {
            type: 'ACTION_TYPE',
            payload
        };
    };
    `;
export const connect_function_example = `
    /* connect example */
    const mapStateToProps = (state) => {
        return {
            property: state.property
        };
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            action: (payload) => dispatch(action(payload))
        };
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Component);
    `;
export const create_store_example = `
    /* create store example */
    const store = createStore(reducer);
    `;
export const create_redux_action_example = `
    /* create redux action example */
    export const action = (payload) => {
        return {
            type: 'ACTION_TYPE',
            payload
        };
    }
    `;
export const dispatch_action_example = `
    /* dispatch action example */
    const dispatch = useDispatch();
    const action = (payload) => {
        return {
            type: 'ACTION_TYPE',
            payload
        };
    }
    
    dispatch(action(payload));
    `;
export const thunk_asynchronours_actions_example = `
    /* thunk asynchronous actions example */
    export const action = (payload) => {
        return (dispatch) => {
            dispatch({ type: 'ACTION_TYPE', payload });
        };
    }
    `;

export const combine_reducers_example = `
    /* combine reducers example */
    const rootReducer = combineReducers({
        reducer1,
        reducer2,
        reducer3 
    });
    `;
export const redux_mock_store_example = `
    /* redux mock store example */
    const store = mockStore(initialState);

    `;
export const server_side_rendering_example = `
    /* server side rendering example */
    import { Provider } from 'react-redux';
    import { createStore } from 'redux';
    import { renderToString } from 'react-dom/server';
    import { StaticRouter } from 'react-router-dom';

    const store = createStore(reducer);

    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>
        </Provider>
    );
    `;
export const nexted_objexts_state_example = `
    /* nested object state example */
    const initialState = {
        property1: {
            property2: {
                property3: 'value'
            }
        }
    };

    export const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'ACTION_TYPE':
                return {
                    ...state,
                    property1: {
                        ...state.property1,
                        property2: {
                            ...state.property1.property2,
                            property3: action.payload
                        }
                    }
                };
            default:
                return state;
        }
    }
    `;
