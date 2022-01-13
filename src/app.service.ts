import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { createClient } from 'redis';
import fs from 'fs'
import { join } from 'path';
import { MemoryDBClient, BatchUpdateClusterCommand, MemoryDB } from "@aws-sdk/client-memorydb";


@Injectable()
export class AppService {

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}
  async getHello() {
    const key = await this.cacheManager.set("key", 100 , {ttl: 0})
    return key
    
  }
}
