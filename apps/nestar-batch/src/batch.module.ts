import { Module } from '@nestjs/common';
import { BatchService } from './batch.service';
import { ConfigModule } from '@nestjs/config';
import { BatchController } from './batch.controller';
import { DatabaseModule } from './database/database.module';

@Module({
	imports: [ConfigModule.forRoot(), DatabaseModule],
	controllers: [BatchController],
	providers: [BatchService],
})
export class BatchModule {}
