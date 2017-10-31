import {
  FILTER_CHANGE_LIMIT,
  FILTER_CHANGE_SORTBY,
  FILTER_CHANGE_ORDER,
  FILTER_CHANGE_VESSEL_LIST,
  FILTER_CHANGE_ARRIVING_WITHIN,
  FILTER_CHANGE_DEPARTING_WITHIN,
  FILTER_CLEAR_TIME,
  FILTER_ONLY_FUTURE_PORTCALLS,
  FILTER_CHANGE_PORTCALL_LIST,
  FILTER_CHANGE_UPDATED_AFTER,
  FILTER_CLEAR,
} from '../actions/types';

const INITIAL_STATE = {
  limit: 20,       // interger > 0
  sort_by: 'LAST_UPDATE',    // LAST_UPDATE | ARRIVAL_DATE
  order: 'DESCENDING',       // DESCENDING | ASCENDING
  vesselList: 'all',             // name of a vessel list in settingsreducer, or "all" to not use filter
  portCallList: 'all',          // name of a port call list in settingsreducer, or "all" to not use filter
  arrivingWithin: 0,
  departingWithin: 0,
  onlyFetchActivePortCalls: false,
  updatedAfter: 0,
};

const filterReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FILTER_CHANGE_LIMIT:
      return { ... state, limit: action.payload, updatedAfter: 0 };
    case FILTER_CHANGE_SORTBY:
      return { ... state, sort_by: action.payload, updatedAfter: 0 };
    case FILTER_CHANGE_ORDER:
      return { ... state, order: action.payload, updatedAfter: 0 };
    case FILTER_CHANGE_VESSEL_LIST:
      return { ...state, vesselList: action.payload, updatedAfter: 0 }
    case FILTER_CHANGE_ARRIVING_WITHIN:
      return { ...state, arrivingWithin: action.payload, departingWithin: 0, updatedAfter: 0 }
    case FILTER_CHANGE_DEPARTING_WITHIN:
      return { ...state, departingWithin: action.payload, arrivingWithin: 0, updatedAfter: 0 }
    case FILTER_CLEAR_TIME:
      return { ...state, departingWithin: 0, arrivingWithin: 0, updatedAfter: 0}
    case FILTER_ONLY_FUTURE_PORTCALLS:
      return { ...state, onlyFetchActivePortCalls: action.payload, updatedAfter: 0 }
    case FILTER_CHANGE_UPDATED_AFTER:
      return { ...state, updatedAfter: action.payload };
    case FILTER_CLEAR: 
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default filterReducer;