import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgStyle} from '@angular/common';
import {UserItem} from './components/user-item/user-item';
import {UserService} from './shared/services/user-service';
import {UserInterface} from './shared/interfaces/user.interface';
import {debounceTime} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [FormsModule, UserItem, ReactiveFormsModule, NgStyle],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const isInsideSelect = target.closest('.searchBlock-select');

    if (!isInsideSelect) {
      this.showStatus = false;
    }
  }

  filter = new FormGroup({
      search: new FormControl('', {updateOn: 'change'}),
      status: new FormControl('all', {updateOn: 'change'})
    },
  )
  selectedUser!: UserInterface;
  userList: UserInterface[] = [];
  showStatus = false;

  constructor(public $userService: UserService) {

  }

  ngOnInit() {
    this.getUserData();

    this.filter.controls.search.valueChanges.pipe(
      debounceTime(100),
    ).subscribe(() => {
      this.getUserData();
    })
    this.filter.controls.status.valueChanges.subscribe(() => {
      this.getUserData();
    })
  }

  getUserData() {
    this.userList = this.$userService
      .getFilteredUserList(
        this.filter.controls.search.value!,
        this.filter.controls.status.value!
      )();
  }
}
