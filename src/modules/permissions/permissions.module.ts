import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Permission } from 'entities/permisson.entity'

import { PermissionsController } from './permissions.controller'
import { PermissionsService } from './permissions.service'

@Module({
  imports: [TypeOrmModule.forFeature([Permission])],
  providers: [PermissionsService],
  controllers: [PermissionsController],
})
export class PermissionsModule {}
