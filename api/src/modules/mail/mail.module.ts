import { MailerModule, MailerOptions } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from 'common/config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        ({
          transport: {
            host: config.get('MAIL_HOST'),
            post: config.get('MAIL_PORT'),
            secure: true,
            auth: {
              user: config.get('MAIL_EMAIL'),
              pass: config.get('MAIL_PASSWORD'),
            },
          },
          defaults: {
            from: config.get('MAIL_EMAIL'),
          },
        } as MailerOptions),
    }),
  ],
})
export class MailModule {}
