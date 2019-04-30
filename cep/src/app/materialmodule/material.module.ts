import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatSidenavModule, MatToolbarModule,
         MatIconModule, MatButtonModule, MatListModule,
         MatMenuModule, 
         MatGridListModule,
         MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
  ],
  exports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }