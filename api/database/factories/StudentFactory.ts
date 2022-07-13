import Student from 'App/Models/Student'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Student, ({ faker }) => {
  const department = ['informatics', 'industry', 'electrical']
  const income = (Math.floor(Math.random() * (20 - 1)) + 1) * 1000000
  return {
    name: faker.name.findName(),
    department: department[Math.floor(Math.random() * department.length)],
    year: Math.floor((Math.random() * 100) % 5) + 2018,
    parent_statuses_id: Math.floor((Math.random() * 100) % 3)+1,
    parents_income: income,
    parents_expense: Math.round((income * ((Math.random() * (0.8 - 0.6)) + 0.6))/100000)*100000,
    grade_point_average: parseFloat(((Math.random() * (4 - 2)) + 2).toFixed(2)),
    organization_id: (Math.floor(Math.random() * 10) % 2) + 1,
  }
}).build()
