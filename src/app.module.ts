import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './user/users.module';
import { IndividualCardModule } from './individual-card/individual-card.module';
import { ProductModule } from './product/product.module';
import { PriceModule } from './price/price.module';
import { CartModule } from './cart/cart.module';
import { RatingModule } from './rating/rating.module';
import { FavoriteModule } from './favorite/favorite.module';
import { RewiewModule } from './rewiew/rewiew.module';
import { NewspaperModule } from './newspaper/newspaper.module';
import { PictureModule } from './picture/picture.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadModels: true,
      synchronize: false,
    }),
    UsersModule,
    IndividualCardModule,
    ProductModule,
    PriceModule,
    CartModule,
    RatingModule,
    FavoriteModule,
    RewiewModule,
    NewspaperModule,
    PictureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
