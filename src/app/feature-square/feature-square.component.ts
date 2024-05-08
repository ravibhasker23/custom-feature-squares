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
  //select for fetching the posts data from the API
  posts$ = this.store.select(postsSelector);

  //select for fetching the current active post selected by the user
  activePost$ = this.store.select(activePostSelector);
  
  currentActivePost: number = 0;

  selectedIndex: number = 0;
  
  selectedValue = '';

  clicks = 0;
  
  constructor(private store: Store<IPostState>,
    @Inject(DOCUMENT) public document: Document,
  ){
  }


  /**
   * Fetching the current index selected and dispatching an action to keep the current selection in store.
   * @param selectedPost selected post by the user
   * @param currentIndex current index selected: combination of the row + column value; for e.g. row 1 and column 2 equals 1.2
   */
  onTogglePostData(selectedPost: any, currentIndex: any){
    if(this.selectedIndex === currentIndex){
      this.clicks++;
        switch (this.clicks) {
          case 1:
            this.selectedValue = 'User Id: ' + selectedPost.userId;
            break;
          case 2:
            this.selectedValue = 'Id: ' + selectedPost.id;
            break;
          case 3:
              this.selectedValue = 'Body: ' +selectedPost.body;
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

      this.selectedValue = 'User Id: ' + selectedPost.userId;
    }

  }
}

