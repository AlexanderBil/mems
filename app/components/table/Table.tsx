'use client';

import React, { useCallback, useEffect, useState } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  useDisclosure,
} from '@heroui/react';

import ModalComponent from '../modal/ModalComponent';
import { MemesType } from '../../types/types';

type ColumnsType = { name: string; key: keyof MemesType }[];

const columns: ColumnsType = [
  {
    name: 'ID',
    key: 'id',
  },
  {
    name: 'NAME',
    key: 'name',
  },
  {
    name: 'IMG',
    key: 'img',
  },
  {
    name: 'LIKES',
    key: 'likes',
  },
  {
    name: 'ACTIONS',
    key: 'actions',
  },
];

const TableComponent = ({ memes }: { memes: MemesType[] }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [memeInfo, setMemeInfo] = useState<MemesType | null>(null);
  const [memesData, setMemesData] = useState<MemesType[]>([]);

  useEffect(() => {
    if (localStorage.getItem('memes') === null) {
      setMemesData(memes);
    }
    const savedMemes = localStorage.getItem('memes');
    savedMemes && setMemesData(JSON.parse(savedMemes));
  }, []);

  const memeInfoHandler = useCallback((meme: MemesType) => {
    setMemeInfo(meme);
  }, []);

  const renderCell = React.useCallback(
    (meme: MemesType, columnKey: keyof MemesType) => {
      const cellValue = meme[columnKey];

      switch (columnKey) {
        case 'id':
          return (
            <div className="flex flex-col mobile:max-w-[50px]">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );
        case 'name':
          return (
            <div className="flex flex-col mobile:w-16">
              <p className="text-bold text-sm capitalize break-all">
                {cellValue}
              </p>
            </div>
          );
        case 'img':
          return (
            <div className="flex flex-col mobile:w-16">
              <p className="text-bold text-sm break-all">
                <a href={cellValue as string} target="_blank">
                  {cellValue}
                </a>
              </p>
            </div>
          );
        case 'actions':
          return (
            <div className="relative flex items-center gap-2 mobile:w-16">
              <Button
                className="bg-green-500 sm:inline-block w-7 h-7 "
                onPress={() => {
                  onOpen(), memeInfoHandler(meme);
                }}
                color="primary"
              >
                Edit
              </Button>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [],
  );

  if (!memesData.length) {
    return <p className="font-bold text-amber-50">Loading Data...</p>;
  }

  return (
    <div>
      <Table className="table-auto">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              align={column.key === 'actions' ? 'center' : 'start'}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody className="bg-gray-300" items={memesData}>
          {(item: MemesType) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(item, columnKey as keyof MemesType)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <ModalComponent
        memeInfo={memeInfo}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setMemesData={setMemesData}
        memesData={memesData}
      />
    </div>
  );
};

export default TableComponent;
