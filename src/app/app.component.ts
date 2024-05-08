import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPostState } from '../store/squares-state.model';
import { FetchInitPosts } from '../store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Selectable Squares';

  constructor(private store: Store<IPostState>) {
  }

  ngOnInit(): void {
    //Dispatch the action for fetching the posts
    this.store.dispatch(new FetchInitPosts());
  }

}
