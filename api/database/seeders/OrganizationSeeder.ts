import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Organization from 'App/Models/Organization'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Organization.createMany([
      {
        joined: true,
      },
      {
        joined: false,
      },
    ])
  }
}
