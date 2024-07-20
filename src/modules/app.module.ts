import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from 'config/schema.config';
import { DatabaseModule } from './database/database.module';
import { LoggerMiddlware } from 'middleware/logger.middleware';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,
    envFilePath: [`.env.${process.env.STAGE}`],
    validationSchema: configValidationSchema,
  }),
  DatabaseModule,
  UsersModule,
],
  controllers: [],
  providers: [],
})
export class AppModule  implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddlware).forRoutes({path: '*', method: RequestMethod.ALL})
  }
}
