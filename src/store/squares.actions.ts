import { createAction, props } from '@ngrx/store';
import { IAction, IPostState } from './squares-state.model';

export enum ActionTypes {
    FETCH_INIT_POSTS = '[POSTS] Fetch init posts data',
    FETCH_INIT_POSTS_SUCCESS = '[POSTS] Fetch init posts data success',
    FETCH_INIT_POSTS_ERROR = '[POSTS] Fetch init posts data error',
    SET_CURRENT_ACTIVE_POST = '[POSTS] Set the current active post',
    RESET_CURRENT_ACTIVE_POST = '[POSTS] Reset the last sent active post',
}

export class FetchInitPosts implements IAction {
    readonly type: ActionTypes = ActionTypes.FETCH_INIT_POSTS;
}

export class FetchInitPostsSuccess implements IAction {
    readonly type: ActionTypes = ActionTypes.FETCH_INIT_POSTS_SUCCESS;
    constructor(public payload: any){}
}

export class FetchInitPostsError implements IAction {
    readonly type: ActionTypes = ActionTypes.FETCH_INIT_POSTS_ERROR;
    constructor(public payload: any){}
}

export class SetCurrentActivePost implements IAction {
    
    readonly type: ActionTypes = ActionTypes.SET_CURRENT_ACTIVE_POST;
    constructor(public payload: { index: string, post: any}){
    }
}