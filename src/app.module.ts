import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './user/users.module';
import { IndividualCardModule } from './individual-card/individual-card.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'database',
      autoLoadModels: true,
      synchronize: false,
    }),
    UsersModule,
    IndividualCardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
