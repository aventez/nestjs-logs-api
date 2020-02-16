import { Controller, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import { LogService } from './log.service';

@Controller('logs')
export class LogController {
    constructor(private readonly logService: LogService) {}

    @Get('find/:pattern')
    async findMatches(@Param('pattern') pattern): Promise<string> {
        let result = null;

        try {
            result = await this.logService.findByPattern(pattern);
        } catch {}

        if( !result ) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
  
        return JSON.stringify(result);
    }
}