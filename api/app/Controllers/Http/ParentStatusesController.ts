// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ParentStatus from 'App/Models/ParentStatus'

export default class ParentStatusesController {
  public async get ({response}) {
    try {
      const parentStatuses = await ParentStatus.all()
      return response.send({
        error: false,
        status: 'success',
        data: parentStatuses,
      })
    } catch (error) {
      return response.send({
        error: true,
        status: 'success',
        data: error,
      })
    }
  }
}
