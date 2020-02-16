import { Injectable } from '@nestjs/common';
import * as lineReader from 'line-reader';
import * as safeRegex from 'safe-regex';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LogService {
    constructor(private readonly configService: ConfigService) {}

    async findByPattern(pattern: string): Promise<string[]>
    {
        return new Promise(async (resolve, reject) => {
            if( !safeRegex(pattern) ) reject('Expression may be evil.');
            let result = [];
            let filePath = this.configService.get<string>('LOG_DIR');

            lineReader.eachLine(filePath, async (line: string, last: boolean) => {
                try {
                    if(line.match(pattern)) result.push(line);
                    
                    if(last) resolve(result);
                } catch {
                    reject('Unexpected error occurred.');
                }
            });
        });
    }
}