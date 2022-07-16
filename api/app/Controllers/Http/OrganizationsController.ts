// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Organization from 'App/Models/Organization'

export default class OrganizationsController {
  public async get ({response}) {
    try {
      const organizations = await Organization.all()
      return response.send({
        error: false,
        status: 'success',
        data: organizations,
      })
    } catch (error) {
      return response.log({
        error: true,
        status: 'error',
        data: error,
      })
    }
  }
}
