import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PostModule, MongooseModule.forRoot('mongodb://localhost/foroUniversitario', {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
