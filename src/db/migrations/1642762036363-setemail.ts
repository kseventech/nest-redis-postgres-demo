import {MigrationInterface, QueryRunner} from "typeorm";

export class setemail1642762036363 implements MigrationInterface {
    name = 'setemail1642762036363'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact_info" RENAME COLUMN "name" TO "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact_info" RENAME COLUMN "email" TO "name"`);
    }

}
