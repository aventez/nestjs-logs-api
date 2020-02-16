import { Controller, Get, Param, HttpException, HttpStatus, Query, UseFilters } from '@nestjs/common';
import { LogService } from './log.service';

@Controller('logs')
export class LogController {
    constructor(private readonly logService: LogService) {}

    @Get('find')
    async findMatches(@Query() query): Promise<string> {
        if( query.pattern === undefined ) throw new HttpException('You have to enter correct pattern.', HttpStatus.BAD_REQUEST);

        return JSON.stringify(await this.logService.findByPattern(query.pattern, query.minDate, query.maxDate));
    }
}