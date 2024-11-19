import { NgModule, CSP_NONCE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { VaultComponent } from './vault/vault.component';
import { UserService } from './common/User/user.service';
import { Utils } from './common/Utils/utils';
import { LogoutComponent } from './logout/logout.component';
import { Crypto } from './common/Crypto/crypto';
import { FooterComponent } from './footer/footer.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QrCodeTOTP } from './common/qr-code-totp/qr-code-totp.service';
import { LocalVaultV1Service } from './common/upload-vault/LocalVaultv1Service.service';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BnNgIdleService } from 'bn-ng-idle'; 
import { ChangelogComponent } from './changelog/changelog.component';

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        LoginComponent,
        VaultComponent,
        LogoutComponent,
        FooterComponent,
        PagenotfoundComponent,
        PrivacyPolicyComponent,
        ChangelogComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        FontAwesomeModule,
        ClipboardModule,
        ZXingScannerModule], providers: [UserService, Utils, Crypto, QrCodeTOTP, LocalVaultV1Service, BnNgIdleService, {
            provide: CSP_NONCE,
            useValue: 'random-nonce-placeholder'
        }, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
