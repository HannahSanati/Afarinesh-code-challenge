import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { UserApiService } from "../../api/user-api.service";
import { ActivatedRoute } from "@angular/router";
import { User } from "../../api/user-api.model";
import { map } from "rxjs";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-user-profile",
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    CommonModule,
  ],
  templateUrl: "./user-profile.component.html",
  styleUrl: "./user-profile.component.scss",
  providers: [UserApiService],
})
export class UserProfileComponent {
  data!: User;
  constructor(private api: UserApiService, private route: ActivatedRoute) {
    this.getData();
  }

  public getData() {
    this.api
      .getData()
      .pipe(
        map(
          (item) => item.filter(
            (element) => element.id == this.route.snapshot.params["id"]
          )[0]
        )
      )
      .subscribe({
        next: (data) => {
          console.log(data);
          this.data = data;
        },
      });
  }
}
