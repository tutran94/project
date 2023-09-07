import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
@Component({
    selector: 'app-home',
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    ToDo = [{ "name": "Task 1", "content": "Analyze the new requirements gathered from the customer" }, { "name": "Task 3", "content": "Improve application performance" }, { "name": "Task 3", "content": "Arrange a web meeting with the customer to get new requirements" }, { "name": "Task 4", "content": "Fix the issues reported in the IE browser" }]
    InProgress = [{ "name": "Task 5", "content": "Fix the issues reported by the customer" }, { "name": "Task 6", "content": "Fix the issues reported in Safari browser" }, { "name": "Task 7", "content": "Test the application in the IE browser" }, { "name": "Task 8", "content": "Analyze SQL server 2008 connection" }]

    InReview = [{ "name": "Task 1", "content": "Analyze the new requirements gathered from the customer" }, { "name": "Task 2", "content": "Improve application performance" }, { "name": "Task 3", "content": "Arrange a web meeting with the customer to get new requirements" }, { "name": "Task 4", "content": "Fix the issues reported in the IE browser" }]
    Done = [{ "name": "Task 5", "content": "Fix the issues reported by the customer" }, { "name": "Task 6", "content": "Fix the issues reported in Safari browser" }, { "name": "Task 7", "content": "Test the application in the IE browser" }, { "name": "Task 8", "content": "Analyze SQL server 2008 connection" }]


}