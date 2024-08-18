import { Component, OnInit } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { UserApiService } from "../../api/user-api.service";
import { User } from "../../api/user-api.model";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { finalize } from "rxjs";
@Component({
  selector: "app-user-list",
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: "./user-list.component.html",
  styleUrl: "./user-list.component.scss",
  providers: [UserApiService],
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = [
    "name",
    "username",
    "email",
    "phone",
    "website",
    "showMore",
  ];
  dataSource!: User[];
  loading: boolean = false;

  constructor(private api: UserApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.api
      .getData()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (data) => {   
          this.dataSource = data;
        },
      });
  }
}
