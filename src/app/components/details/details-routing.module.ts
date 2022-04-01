import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DetailsComponent } from "./details.component";

const routes = [
{
    path: ':id',
    component: DetailsComponent
}
];


@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DetailsRoutingModule {}