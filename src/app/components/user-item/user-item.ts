import {Component, Input} from '@angular/core';
import {UserInterface} from '../../shared/interfaces/user.interface';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-user-item',
  imports: [
    NgStyle
  ],
  templateUrl: './user-item.html',
  standalone: true,
  styleUrl: './user-item.scss'
})
export class UserItem {
  @Input() data!: UserInterface;
  @Input() isSelected = false;
}
