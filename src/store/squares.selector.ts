import { createSelector } from '@ngrx/store';
import { IPostState } from './squares-state.model';

export const selectFeature = (state: IPostState) => state;

export const postsSelector = createSelector(
  selectFeature,
  (state: IPostState) => state.posts
);

export const activePostSelector = createSelector(
  selectFeature,
  (state: IPostState) => state.activePost,
  (activePost) => activePost
);