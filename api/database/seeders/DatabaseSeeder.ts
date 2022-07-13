import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import StudentFactory from 'Database/factories/StudentFactory'
import OrganizationSeeder from './OrganizationSeeder'
import ParentStatusSeeder from './ParentStatusSeeder'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await StudentFactory.createMany(100)
  }
}
