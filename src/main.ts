import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import RabbitmqServer from './rabbitmq-server';

let data: Array<object> = [];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const server = new RabbitmqServer('amqp://admin:admin@localhost:5672');
  await server.start();
  await server.consume('service', message =>
    data.push(message.content),
  );
}
bootstrap();

export let data1 = data