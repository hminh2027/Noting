import { NoteModule } from './modules/note/note.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth';
import { ConfigModule, ConfigService } from './common/config';
import { DatabaseModule } from './common/database/database.module';
import { TagModule } from 'modules/tag/tag.module';

@Module({
  imports: [DatabaseModule, ConfigModule, AuthModule, NoteModule, TagModule],
})
export class AppModule {
  static port: string | number;
  static isDev: boolean;

  constructor(private readonly config: ConfigService) {
    AppModule.port = config.get('APP_PORT') ?? 3001;
    AppModule.isDev = config.get('APP_ENV') === 'development' ? true : false;
  }
}
