import { Component, OnInit } from '@angular/core';

import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  self = this;
  inputValue: any;
  toDoListArray: any;
  isInput: any;
  constructor(private localStorageService: LocalStorageServiceService) {
    this.toDoListArray = localStorageService.getLocalStorageData('taskArray');
  }

  addValueToToDoArray = function (taskName: string) {};
  deleteValueInTaskArray = function (index: number) {};
  changeValueInTaskArray = function (index: number, value: string) {};
  showInput = function (index: number) {};

  ngOnInit(): void {
    this.inputValue = 'hello friend';

    this.addValueToToDoArray = function (taskName: string) {
      this.toDoListArray.push({ name: taskName });

      this.localStorageService.setObjectToLocalStorage(
        'taskArray',
        this.toDoListArray
      );
    };

    this.deleteValueInTaskArray = function (index: number) {
      this.toDoListArray.splice(index, 1);

      this.localStorageService.setObjectToLocalStorage(
        'taskArray',
        this.toDoListArray
      );
    };

    this.changeValueInTaskArray = function (index: number, value: string) {
      this.toDoListArray[index].name = value;
      this.isInput = -1;
      this.localStorageService.setObjectToLocalStorage(
        'taskArray',
        this.toDoListArray
      );
    };

    this.showInput = function (index: number) {
      this.isInput = index;
    };
  }
}
//localStorage.getItem('key');
//localStorage.setItem('key','value');
