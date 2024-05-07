import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPostState } from '../store/squares-state.model';
import { FetchInitPosts, postsSelector } from '../store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'custom-feature-squares';

  constructor(private store: Store<IPostState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new FetchInitPosts());
  }

}
