import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';


@Injectable()
export class AppService {

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}
  async getHello() {
    const key = await this.cacheManager.set("my-key", 100 , {ttl: 0})
    return key
    
  }
}
