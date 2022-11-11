import { SharedNoteModule } from './modules/shared-note/shared-note.module';
import { SnapshotModule } from './modules/snapshot/snapshot.module';
import { AttachmentModule } from './modules/attachment/attachment.module';
import { NoteModule } from './modules/note/note.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth';
import { ConfigModule, ConfigService } from './common/config';
import { DatabaseModule } from './common/database/database.module';
import { TagModule } from 'modules/tag/tag.module';
import { CategoryModule } from './modules/category/category.module';
import { CommentModule } from 'modules/comment/comment.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule,
    AuthModule,
    NoteModule,
    TagModule,
    CategoryModule,
    SharedNoteModule,
    CommentModule,
    SnapshotModule,
    AttachmentModule,
  ],
})
export class AppModule {
  static port: string | number;
  static isDev: boolean;

  constructor(private readonly config: ConfigService) {
    AppModule.port = config.get('APP_PORT') ?? 3001;
    AppModule.isDev = config.get('APP_ENV') === 'development' ? true : false;
  }
}
