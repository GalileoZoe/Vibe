import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PromptModule } from './prompt/prompt.module';
import { SessionModule } from './session/session.module';
import { TextModule } from './text/text.module';
import { NotificationModule } from './notification/notification.module';
import { SettingsModule } from './settings/settings.module';
import { TipModule } from './tip/tip.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/vibe'),
    // MongooseModule.forRoot(
    //   `mongodb+srv://${encodeURIComponent('GalileoZoe')}:${encodeURIComponent('GalileoZoe<3$;')}@vibes.ndacb81.mongodb.net/?retryWrites=true&w=majority&appName=Vibes`
    // ),
    
    UserModule,
    PromptModule,
    SessionModule,
    TextModule,
    NotificationModule,
    TipModule,
    SettingsModule,
    LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
