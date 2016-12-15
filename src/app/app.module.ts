
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { UiPanelComponent } from './ui/ui-panel/ui-panel.component';
import { UiButtonComponent } from './ui/ui-button/ui-button.component';
import { SearchPipe } from './list/search.pipe';
import { ListItemComponent } from './list/list-item/list-item.component';

import { UserManagerService } from './shared/user-manager.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UiConfirmComponent } from './ui/ui-confirm/ui-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    UiPanelComponent,
    UiButtonComponent,
    SearchPipe,
    ListItemComponent,
    NavBarComponent,
    UiConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
