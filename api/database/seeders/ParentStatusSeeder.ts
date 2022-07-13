import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ParentStatus from 'App/Models/ParentStatus'
import moment from 'moment'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await ParentStatus.createMany([
      {
        status: 'fatherless',
      },
      {
        status: 'motherless',
      },
      {
        status: 'commplete',
      },
    ])
  }
}
