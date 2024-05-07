import { ActionTypes } from "./squares.actions";
import { IAction, IPostState } from "./squares-state.model";
import { Action } from "@ngrx/store";

export const initState: IPostState = {
    loading: false,
    userId: null,
    posts: [],
    error: null,
    activePost: '',
}

export function squaresPostReducer(
    state = initState,
    action: IAction
): IPostState{
    switch(action.type){
        case ActionTypes.FETCH_INIT_POSTS: {
            console.log(action.type)
            state = initState;
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case ActionTypes.FETCH_INIT_POSTS_SUCCESS: {
            state = initState;
            return {
                ...state,
                loading: false,
                error: null,
                posts: groupUserIds(action.payload),
            }
        }
        case ActionTypes.FETCH_INIT_POSTS_ERROR: {
            state = initState;
            return {
                ...state,
                loading: false,
                error: action,
                posts: null,
            }
        }
        case ActionTypes.SET_CURRENT_ACTIVE_POST: {
            let activePost: any = {};
        
            activePost[action.payload.index] = action.payload.post;

            return {
                ...state,
                activePost: { ...activePost },
            }
        }
        default:
            return state;
    }
}

function groupUserIds(posts: any){
    
    let groupedUserIds = posts.reduce(
        (result:any, currentValue:any) => { 
          (result[currentValue['userId']] = result[currentValue['userId']] || []).push(currentValue);
          return result;
        }, {});

    groupedUserIds = Array.from(Object['values'](groupedUserIds));

    return groupedUserIds;
}