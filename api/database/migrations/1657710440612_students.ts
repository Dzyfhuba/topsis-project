import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'students'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name')
      table.string('department')
      table.integer('year')
      table.integer('parent_statuses_id').unsigned().references('id').inTable('parent_statuses')
      table.bigInteger('parents_expense')
      table.bigInteger('parents_income')
      table.float('grade_point_average')
      table.integer('organizations_id').unsigned().references('id').inTable('organizations')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
