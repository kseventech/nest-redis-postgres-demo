import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager'

@Injectable()
export class AppService {

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}
  async getHello() {

    const a = [{a:1}, {a:2}]

    const redis = await this.cacheManager.set("keysss", a , {ttl: 0});
    return redis
    
  }
}
