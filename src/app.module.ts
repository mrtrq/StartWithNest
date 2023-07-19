import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

// a decorator
@Module({
  imports: [ProductsModule],

  // the meat of the app, handle incoming requests and give responses
  controllers: [AppController],

  // provide certain functionality
  providers: [AppService],
})
export class AppModule {}
