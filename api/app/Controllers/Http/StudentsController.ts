// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from '@ioc:Adonis/Lucid/Database'
import Student from 'App/Models/Student'

export default class StudentsController {
  public async index ({response, request}){
    try {
      const students = await Database.from('students')
        .join('parent_statuses', 'students.parent_statuses_id', '=', 'parent_statuses.id')
        .join('organizations', 'students.organizations_id', '=', 'organizations.id')
        .select('students.*')
        .select('parent_statuses.status')
        .select('organizations.joined')

      return response.send({
        students,
      })
    } catch (error) {
      return response.send({
        error,
      })
    }
  }
}
