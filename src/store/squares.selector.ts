import { createSelector } from '@ngrx/store';
import { IPostState } from './squares-state.model';

export const selectFeature = (state: IPostState) => state;

//selector for fetching the posts
export const postsSelector = createSelector(
  selectFeature,
  (state: IPostState) => state.posts
);

//selector for fetching the current selected post
export const activePostSelector = createSelector(
  selectFeature,
  (state: IPostState) => state.activePost,
  (activePost) => activePost
);