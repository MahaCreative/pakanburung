import React, { useCallback, useEffect, useState } from 'react'
import App from '../../Layout/App'
import Table from '../../Components/Table'
import Pagination from '../../Components/Pagination'
import { debounce } from 'lodash'
import { Inertia } from '@inertiajs/inertia'
export default function DataStok(props) {
    const [params, setParams] = useState({paginate:'', search:""})
    const { data: datastok, meta, links } = props.datastok
    
    // Fitur Live Search
    const reload = useCallback(
        debounce((query) => {
            Inertia.get(
                route('data-stok'),
                query,
                { preserveState: true },
                150
            );
        }),
        []
    )
    useEffect(() => reload(params), [params])


  return (
      <div className='px-9 py-2.5'>
          {/* <p className='italic text-base text-white'>Data Suhu Terkini</p> */}
          <div className='flex gap-3'>
              <select className='border-white border rounded-lg py-1.5 px-4 focus:outline-none focus:ring focus:ring-emerald-500 hover:ring hover:ring-offset-2 hover:ring-emerald-400 text-emerald-400 ' name="paginate" onChange={(e) => setParams({ ...params, paginate: e.target.value })} id="">
                  <option value="0">All</option>
                  <option value="10">10</option>
                  <option value="50">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
              </select>
              <input type="text" className='border-white border rounded-lg py-1.5 px-4 focus:outline-none focus:ring focus:ring-emerald-500 hover:ring hover:ring-offset-2 hover:ring-emerald-400 text-emerald-400 '
                  name="search" placeholder='Search Berdasarkan Tanggal'
                  onChange={(e) => setParams({ ...params, search: e.target.value })} />
          </div>
          <Table className='my-2 shadow-sm shadow-white min-h-[300px] bg-white max-h-[720px] overflow-y-auto'> 
            <Table.Thead className={'bg-slate-700 text-white'}>
            <tr>
                <Table.Td>No</Table.Td>
                <Table.Td>Tanggal</Table.Td>
                <Table.Td>Jam</Table.Td>
                <Table.Td>Stok</Table.Td>
            </tr>
            </Table.Thead>
            <Table.Tbody>
            {datastok ? (
                datastok.map((item, key) => (
                <tr key={key} className='odd:hover:bg-emerald-300 even:hover:bg-emerald-200'>
                    <Table.Td>{key +1}</Table.Td>
                    <Table.Td>{item.tanggal}</Table.Td>
                    <Table.Td>{item.jam}</Table.Td>
                    <Table.Td>{item.stok} %</Table.Td>     
                </tr>
                
                ))
            ) : ('')}
        </Table.Tbody>
          </Table>
          <div className="flex justify-center">
              <Pagination meta={meta} links={links} />
          </div>
    </div>
  )
}

DataStok.layout = (page) => <App children={page}/>