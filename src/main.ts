import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { SentryService } from '@ntegral/nestjs-sentry';
import { AppModule } from './app.module';
import { InternalServerExcetpion } from './common/exception/internal.server.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  const sentryInstance = SentryService.SentryServiceInstance()
  app.useGlobalFilters(new InternalServerExcetpion(httpAdapter,sentryInstance));
  await app.listen(3000);
}
bootstrap();
