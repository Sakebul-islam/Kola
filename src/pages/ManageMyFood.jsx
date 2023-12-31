import useAuth from '../hooks/useAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import './ManageMyFood.css';

import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { format } from 'date-fns';

const ManageMyFood = () => {
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const [foods, setFoods] = useState([]);
  const [delet, setDelet] = useState(false);
  const columnHelper = createColumnHelper();
  const queryClient = useQueryClient();
  const location = useLocation();

  const url = `/api/v1/foods?userEmail=${user.email}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setFoods(res?.data);
      console.log(res);
    };
    fetchData();
  }, [axios, url, delet]);

  const data = useMemo(() => foods, [foods]);

  const columns = [
    columnHelper.accessor('_id', {
      header: 'ID',
      cell: (info) => (
        <span className='' title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
      accessorKey: '_id',
      footer: 'ID',
    }),
    columnHelper.accessor('foodName', {
      header: 'Food Name',
      cell: (info) => (
        <span className='' title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
      accessorKey: 'foodName',
      footer: 'Food Name',
    }),
    columnHelper.accessor('foodImage', {
      header: 'Food Image',
      cell: (info) => <img src={info?.getValue()} className='w-16'></img>,
      footer: 'Food Image',
      accessorKey: 'foodImage',
    }),
    columnHelper.accessor('foodQuantity', {
      header: 'Quantity',
      cell: (info) => (
        <span className='' title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
      footer: 'Quantity',
      accessorKey: 'foodQuantity',
    }),
    columnHelper.accessor('pickupLocation', {
      header: 'Pickup Loc.',
      cell: (info) => (
        <span className='' title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
      footer: 'Pickup Loc.',
      accessorKey: 'pickupLocation',
    }),
    columnHelper.accessor('expiredDateTime', {
      header: 'Exp DateTime',
      cell: (info) => (
        <span className='' title={info.getValue()}>
          {format(new Date(info.getValue()), 'MM/dd/yyyy hh:mm a', {
            timeZone: 'Asia/Dhaka',
          })}
        </span>
      ),
      footer: 'Exp DateTime',
      accessorKey: 'expiredDateTime',
    }),
    columnHelper.accessor('additionalNotes', {
      header: 'Notes',
      cell: (info) => (
        <span className='' title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
      footer: 'Notes',
      accessorKey: 'additionalNotes',
    }),
    columnHelper.accessor('donatorName', {
      header: 'Donator Name',
      cell: (info) => (
        <span className='' title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
      footer: 'Donator Name',
      accessorKey: 'donatorName',
    }),
    columnHelper.accessor('donatorImage', {
      header: 'Donator Image',
      cell: (info) => (
        <img
          src={info?.getValue()}
          className='rounded-full border-2 border-lime-500 w-16'
        ></img>
      ),
      footer: 'Donator Image',
      accessorKey: 'donatorImage',
    }),
    columnHelper.accessor('donatorEmail', {
      header: 'Donator Email',
      cell: (info) => (
        <span className='' title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
      footer: 'Donator Email',
      accessorKey: 'donatorEmail',
    }),
    columnHelper.accessor('foodStatus', {
      header: 'Food Status',
      cell: (info) => (
        <span className='capitalize' title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
      footer: 'Food Status',
      accessorKey: 'foodStatus',
    }),
    columnHelper.accessor('_id', {
      header: 'Action',
      cell: (info) => (
        <div className='flex flex-col w-full text-2xl gap-2'>
          <Link
            to={`/manage-my-food/edit/${info.getValue()}`}
            state={location.pathname}
            
          >
            <FiEdit className='w-full cursor-pointer' />
          </Link>
          <Link
            to={`/manage/${info.getValue()}`}
            state={location.pathname}
            className='text-sm p-0.5 rounded-md bg-gray-300'
          >
            Manage
          </Link>
          <MdDelete
            className='w-full cursor-pointer'
            onClick={() => deleteItem(info.getValue())}
          />
        </div>
      ),
      footer: 'Action',
      id: 'action',
    }),
  ];

  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  const { mutate: deleteItem } = useMutation({
    mutationKey: ['deleteFood'],
    mutationFn: async (id) => {
      return axios.delete(`/api/v1/foods/${id}`);
    },
    onSuccess: () => {
      toast.success('Delete Successfully');
      queryClient.invalidateQueries({ queryKey: ['deleteFood'] });
      setDelet(!delet);
    },
  });

  const table = (
    <table>
      <Helmet>
        <title>Kσʅα | Manage My Food </title>
      </Helmet>
      <thead>
        {tableInstance.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup?.id}>
            {headerGroup.headers.map((header) => (
              <th key={header?.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {tableInstance.getRowModel().rows.map((row) => (
          <tr key={row?.id}>
            {row.getVisibleCells()?.map((cell) => (
              <td key={cell?.id}>
                {flexRender(cell.column.columnDef.cell, cell?.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
  return (
    <div className='px-4 overflow-scroll'>
      <Helmet>
        <title>Kσʅα | Manage My Food </title>
      </Helmet>
      {data.length === 0 ? (
        <div className='text-center py-28 font-bold text-3xl'>
          No Data Found
        </div>
      ) : (
        table
      )}
    </div>
  );
};

export default ManageMyFood;
