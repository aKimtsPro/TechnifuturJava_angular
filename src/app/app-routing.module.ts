import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumerComponent } from './components/consumer/consumer.component';
import { DemoRecapComponent } from './components/demo-recap/demo-recap.component';
import { ExoRecapComponent } from './components/exo-recap/exo-recap.component';

const routes: Routes = [
  { path: "demo", component: DemoRecapComponent },
  { path: "exo", component: ExoRecapComponent },
  { path: "consume", component: ConsumerComponent },
  { path: "", redirectTo: '/demo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
