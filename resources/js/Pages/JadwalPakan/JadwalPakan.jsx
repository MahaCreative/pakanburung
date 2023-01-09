import { Menu } from '@headlessui/react';
import React, { useState } from 'react'
import Table from '../../Components/Table'
import App from '../../Layout/App'
import Modal from '../../Components/Modal';
import UseModal from '../../CostumHook/Modal/UseModal'
import Create from './Create';
import Update from './Update';
import { Inertia } from '@inertiajs/inertia';
export default function JadwalPakan({ jadwal_pakan }) {
  const {open: addModalOpen, close:addModalClose, modal:addTrigger} = UseModal()
  const { open: editModalOpen, close: editModalClose, modal: editTrigger } = UseModal()
  const { open: deletModalOpen, close: deletModalClose, modal: deletTrigger } = UseModal()
  const [params, setParams] = useState([]);

  const modalEdit = (model) => {
    setParams(model)
    editModalOpen()
  }
  const modalDelete = (model) => {
    setParams(model);
    deletModalOpen()
  }
  const deleteHandler = () => {
    Inertia.delete(route('jadwal-pakan-delete',params),  {
      onSuccess: deletModalClose()
    })
  }

  return (
    <div className='px-9 py-2.5'>

      <div>
        <Modal size={'w-[90%] md:w-80% lg:w-[50%]'} trigger={addTrigger} closeModal={addModalClose} headerTitle={'Tambah Jadwal Pakan Burung'}>
          <Create close={ addModalClose} />
        </Modal>
        <Modal size={'w-[90%] md:w-80% lg:w-[50%]'} trigger={editTrigger} closeModal={editModalClose} headerTitle={'Edit Jadwal Pakan Burung'}>
          <Update model={params} close={ editModalClose} />
        </Modal>
        <Modal size={'w-[90%] md:w-80% lg:w-[50%]'} trigger={deletTrigger} closeModal={deletModalClose} headerTitle={'Delete Jadwal Pakan Burung'}>
          <p>Yakin Ingin Mengahpus Data</p>
          <div className="flex gap-3 items-center">
            <button onClick={deleteHandler} className='bg-slate-700 block text-white rounded-lg py-2 px-4 hover:shadow-sm hover:shadow-emerald-300'>Submit</button>
            <button onClick={deletModalClose} className='bg-red-600 block text-white rounded-lg py-2 px-4 hover:shadow-sm hover:shadow-red-300'>Close</button>
          </div>
        </Modal>
      </div>
      <div className="my-2 flex justify-between items-center font-electro">
      <button onClick={() => addModalOpen()} className='py-2.5 px-4 bg-slate-700 rounded-lg shadow-sm shadow-white text-white font-semibold'>Tambah</button>
        <p className='text-white text-xl'>Atur Jadwal Pakan Burung Anda,</p>
      </div>
      <Table className='my-3 shadow-sm shadow-white min-h-[300px] bg-white max-h-[720px] overflow-y-auto'> 
        <Table.Thead className={'bg-slate-700 text-white'}>
          <tr>
            <Table.Td>No</Table.Td>
            <Table.Td>Jam</Table.Td>
            <Table.Td>Aksi</Table.Td>
          </tr>
        </Table.Thead>
        <Table.Tbody>
          {jadwal_pakan ? (
            jadwal_pakan.map((item, key) => (
              <tr key={item.id} className='odd:hover:bg-emerald-300 even:hover:bg-emerald-200'>
                <Table.Td>{key +1}</Table.Td>
                <Table.Td>{item.jam}</Table.Td>
                <Table.Td>
                  <Menu>
                    <Table.Dropdown>
                      <Table.DropdownButton onClick={() => modalEdit(item)}>Edit</Table.DropdownButton>
                     <Table.DropdownButton onClick={() => modalDelete(item)}>Delete</Table.DropdownButton>
                    </Table.Dropdown>
                  </Menu>
                </Table.Td>
            </tr>
            
            ))
          ) : ('')}
        </Table.Tbody>
      </Table>
    </div>
  )
}

JadwalPakan.layout = (page) => <App children={page}/>