import { IAction } from './squares-state.model';

export enum ActionTypes {
    FETCH_INIT_POSTS = '[POSTS] Fetch init posts data',
    FETCH_INIT_POSTS_SUCCESS = '[POSTS] Fetch init posts data success',
    FETCH_INIT_POSTS_ERROR = '[POSTS] Fetch init posts data error',
    SET_CURRENT_ACTIVE_POST = '[POSTS] Set the current active post',
    RESET_CURRENT_ACTIVE_POST = '[POSTS] Reset the last sent active post',
}

export class FetchInitPosts implements IAction {
    //Initial call for fetching the posts linked with a side effect fetchInitPosts$
    readonly type: ActionTypes = ActionTypes.FETCH_INIT_POSTS;
}

export class FetchInitPostsSuccess implements IAction {
    // Action for on completion of fetching the API data
    readonly type: ActionTypes = ActionTypes.FETCH_INIT_POSTS_SUCCESS;
    constructor(public payload: any){}
}

export class FetchInitPostsError implements IAction {
    // Action for on error of fetching the API data
    readonly type: ActionTypes = ActionTypes.FETCH_INIT_POSTS_ERROR;
    constructor(public payload: any){}
}

export class SetCurrentActivePost implements IAction {
    // Action for on storing the current active post in state
    readonly type: ActionTypes = ActionTypes.SET_CURRENT_ACTIVE_POST;
    constructor(public payload: { index: string, post: any}){
    }
}