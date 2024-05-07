import { Component, Inject } from '@angular/core';
import { IPostState } from '../../store/squares-state.model';
import { Store } from '@ngrx/store';
import { SetCurrentActivePost, activePostSelector, postsSelector } from '../../store';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-feature-square',
  templateUrl: './feature-square.component.html',
  styleUrl: './feature-square.component.css'
})
export class FeatureSquareComponent{
  posts$ = this.store.select(postsSelector);

  activePost$ = this.store.select(activePostSelector);
  
  currentActivePost: number = 0;

  selectedIndex: number = 0;
  
  selectedValue = '';

  clicks = 0;
  
  constructor(private store: Store<IPostState>,
    @Inject(DOCUMENT) public document: Document,
  ){
  }


  onTogglePostData(selectedPost: any, currentIndex: any){
    if(this.selectedIndex === currentIndex){
      this.clicks++;
        switch (this.clicks) {
          case 1:
            this.selectedValue = selectedPost.id;
            break;
          case 2:
            this.selectedValue = selectedPost.body;
            break;
          case 3:
              this.selectedValue = selectedPost.userId;
          break;
          case 4:
            this.selectedValue = selectedPost.title;
            this.clicks = 0;
          break;
        
          default:
            break;
        }
    }else{
      this.clicks = 0;
      this.selectedIndex = currentIndex;
      this.currentActivePost = selectedPost.id;
      this.store.dispatch(new SetCurrentActivePost({index: currentIndex, post: selectedPost}));

      this.clicks++;

      this.selectedValue = selectedPost.id;
    }

  }
}

