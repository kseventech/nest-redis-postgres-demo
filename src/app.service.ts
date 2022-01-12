import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { createClient } from 'redis';
import fs from 'fs'
import { join } from 'path';
import { MemoryDBClient, BatchUpdateClusterCommand, MemoryDB } from "@aws-sdk/client-memorydb";


@Injectable()
export class AppService {

  constructor(
   //  @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}
  async getHello() {

   // const a = new MemoryDB({
   //    region: "us-east-1",
   //    credentials: {
   //       accessKeyId: "process.env.AWS_ACCESS_KEY_ID",
   //       secretAccessKey: "process.env.AWS_SECRET_ACCESS_KEY",
   //     },
   // })
   // const client = new MemoryDBClient({ 
   //    region: "us-east-1",
   //    credentials: {
   //       accessKeyId: "process.env.AWS_ACCESS_KEY_ID",
   //       secretAccessKey: "process.env.AWS_SECRET_ACCESS_KEY",
   //     },
   //  });
   // const params = {
   //    /** input parameters */
   //  };
   //  const command = new BatchUpdateClusterCommand({
   //    ServiceUpdate: {ServiceUpdateNameToApply: ''},
   //    ClusterNames: ['']
   //  });
   //  const data = await client.send(command);

   //    const Certificate = join(__dirname ,'..', '..' ,'/ca.crt')
   //    const Certificate_body = join(__dirname, '..', '..', '/server.crt')
   //    const Certificate_key = join(__dirname, '..', '..', '/server.key')
   //    const client = await createClient({
   //       // username: 'user1',
   //       // password: 'testtesttesttest',
   //       name: 'redis-cluster',
   //       url: 'clustercfg.redis-cluster.iibcmm.memorydb.us-east-1.amazonaws.com:6379',
   //       socket: {
   //          tls: true,
   //          key:  fs.readFileSync(Certificate_key, {encoding: 'ascii'}),
   //          cert: fs.readFileSync(Certificate_body, {encoding: 'ascii'}),
   //          ca: fs.readFileSync(Certificate,{encoding :'ascii'})
   //       }
   //    });


   //  client.on('error', (err) => console.log('Redis Client Error', err));

   //  await client.connect();
  
   //  await client.set('key', 'value');
   //  const value = await client.get('key');

   //  return value
    
  }
}
