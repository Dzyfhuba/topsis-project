import axios from "axios";
import React, { useState } from "react";
import Button from "../Components/Button";
import ButtonAnchor from "../Components/ButtonAnchor";
import Input from "../Components/Input";
import Hosts from "../Config/Hosts";
import Navbar from "../Containers/Navbar";

const Create = () => {
    const [name, setName] = useState(String)
    const [department, setDepartment] = useState(Number)
    const [year, setYear] = useState(Number)
    const [organizations_id, setOrganization_id] = useState(Number)
    const [parent_statuses_id, setParent_statuses_id] = useState(Number)
    const [parents_expense, setParents_expense] = useState(Number)
    const [parents_income, setParents_income] = useState(Number)
    const [grade_point_average, setGrade_point_average] = useState(Number)

    const handleChangeName = e => setName(e.target.value)
    const handleChangeDepartment = e => setDepartment(e.target.value)
    const handleChangeYear = e => setYear(e.target.value)
    const handleChangeOrganization = e => setOrganization_id(e.target.value)
    const handleChangeParentStatuses = e => setParent_statuses_id(e.target.value)
    const handleChangeParentsExpense = e => setParents_expense(e.target.value)
    const handleChangeParentsIncome = e => setParents_income(e.target.value)
    const handleChangeGradePointAverage = e => setGrade_point_average(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        const data = {name, department, year, organizations_id, parent_statuses_id, parents_expense, grade_point_average}

        axios.post(`${Hosts.main}/students`, data)
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log(error))
    }

    return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen py-20 px-4 md:px-24 bg-primary flex flex-col items-center justify-center">
        <form className="w-full">
          <Input
            label={"Nama"}
            type="text"
            name="name"
            className="text-neutral-700"
            placeholder="Masukkan Nama Pelajar"
            onChange={handleChangeName}
          />
          <Input
            label={"Jurusan"}
            type="text"
            name="department"
            className="text-neutral-700"
            placeholder="Masukkan Jurusan Pelajar"
            onChange={handleChangeDepartment}
          />
          <Input
            label={"Tahun Angkatan"}
            type="text"
            name="year"
            className="text-neutral-700"
            placeholder="Masukkan Tahun Angkatan Pelajar"
            onChange={handleChangeYear}
          />
          <Input
            label={"Keorganisasian"}
            type="text"
            name="organization"
            className="text-neutral-700"
            placeholder="Masukkan Keorganisasian Pelajar"
            onChange={handleChangeOrganization}
          />
          <Input
            label={"Gaji Orang Tua"}
            type="text"
            name="income"
            className="text-neutral-700"
            placeholder="Masukkan Gaji Orang Tua Pelajar"
            onChange={handleChangeParentsIncome}
          />
          <Input
            label={"Pengeluaran Bulanan"}
            type="text"
            name="expense"
            className="text-neutral-700"
            placeholder="Masukkan Pengeluaran Bulanan Pelajar"
            onChange={handleChangeParentsExpense}
          />
          <Input
            label={"IPK"}
            type="text"
            name="grade"
            className="text-neutral-700"
            placeholder="Masukkan IPK Pelajar"
            onChange={handleChangeGradePointAverage}
          />
          <div className="flex justify-center gap-3">
              <ButtonAnchor to={'/'} className='bg-neutral-400'>Cancel</ButtonAnchor>
              <Button type='submit'>Submit</Button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Create;
