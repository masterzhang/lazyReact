/**
 * @Description:
 * @author 云离
 * @date: 2018/12/31
 */
import {createStore,applyMiddleware, compose} from 'redux'
import rootReducer from '../redux/index'
import thunk from 'redux-thunk'
const middlewares = [thunk]

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}
export default compose(applyMiddleware(...middlewares))(createStore)(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
