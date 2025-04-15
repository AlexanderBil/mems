import React, { useState } from 'react';
import { Button, Form, Input } from '@heroui/react';
import { MemesType } from '../../types/types';

const UpdateDataForm = ({
  memeInfo,
  setMemesData,
  memesData,
  onClose,
}: {
  memeInfo: MemesType | null;
  setMemesData: React.Dispatch<React.SetStateAction<MemesType[]>>;
  memesData: MemesType[];
  onClose: () => void;
}) => {
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = React.useState<boolean | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    const regex = new RegExp(/\.(jpg|jpeg|png|webp|avif|gif)$/);

    if (data.img !== '' && !regex.test(data.img as string)) {
      setErrors({ img: 'Error url' });
      setSubmitted(false);
      return;
    } else {
      setErrors({});
      setSubmitted(true);
    }

    let result = Object.fromEntries(Object.entries(data).filter(([, v]) => v));

    let newObj = { ...memeInfo, ...result } as MemesType;

    const filteredData = [...memesData].reduce<MemesType[]>((acc, item) => {
      if (item.id === newObj.id) {
        acc.push(newObj);
      } else {
        acc.push(item);
      }
      return acc;
    }, []);

    setMemesData(filteredData);
    localStorage.setItem('memes', JSON.stringify(filteredData));
  };

  return (
    <div>
      <h2 className="text-center font-medium underline">
        Change the fields as you wish
      </h2>
      <Form
        className="w-full px-6"
        validationErrors={errors}
        onSubmit={onSubmit}
      >
        <Input
          label="Name"
          labelPlacement="outside"
          name="name"
          placeholder="Change name"
          className="py-2 font-bold"
          minLength={3}
          maxLength={100}
        />
        <Input
          label="Image"
          labelPlacement="outside"
          name="img"
          placeholder="Change image url"
          className="py-2 font-bold"
        />
        <Input
          label="Likes"
          labelPlacement="outside"
          name="likes"
          placeholder="Change likes"
          className="py-2 font-bold"
          minLength={1}
          maxLength={2}
        />
        <Button
          color="primary"
          type="submit"
          className="mt-2 mb-4"
        >
          Update
        </Button>
        {submitted ? (
          <div className="text-small mt-2 mb-4 text-emerald-500">
            Data was updated
          </div>
        ) : null}
      </Form>
    </div>
  );
};

export default UpdateDataForm;
