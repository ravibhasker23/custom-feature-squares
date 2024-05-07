import { Action } from "@ngrx/store";

export interface IPostState {
    loading: boolean;
    userId: number | null;
    posts: any | null;
    error: any | null;
    activePost: any | null;
}


export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IError {
    errorMsg: string;
    errorCode: string;
}

export interface IAction extends Action{
    payload?: any;
}