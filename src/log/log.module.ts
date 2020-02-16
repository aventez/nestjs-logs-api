import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { LogController } from './log.controller';
import { LogService } from './log.service';

@Module({
    imports: [],
    providers: [LogService],
    controllers: [
      LogController
    ],
    exports: [LogService]
})
export class LogModule {}