import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: String

  @column()
  public department: String

  @column()
  public year: Number

  @column()
  public parent_statuses_id: Number

  @column()
  public parents_expense: Number

  @column()
  public parents_income: Number

  @column()
  public grade_point_average: Number

  @column()
  public organization_id: Number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
