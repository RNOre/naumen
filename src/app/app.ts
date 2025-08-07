import {Component, computed, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe, NgForOf} from '@angular/common';
import {UserItem} from './components/user-item/user-item';
import {UserService} from './shared/services/user-service';
import {UserInterface} from './shared/interfaces/user.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgForOf, UserItem, ReactiveFormsModule, JsonPipe],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  filter = new FormGroup({
    search: new FormControl(''),
    status: new FormControl<boolean | null>(null)
  })
  selectedUser!: UserInterface;

  constructor(public $userService: UserService) {

  }

  ngOnInit() {
  }

  getUserData(): UserInterface[] {
    return this.$userService
      .getFilteredUserList(
        this.filter.controls.search.value!,
        this.filter.controls.status.value?.toString()
      )();
  }


  protected readonly title = signal('naumen');
}
