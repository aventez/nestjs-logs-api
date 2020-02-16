import { Module } from '@nestjs/common';
import { LogModule } from './log/log.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    LogModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
