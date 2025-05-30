import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@heroui/react';


import { MemesType } from '../../types/types';
import UpdateDataForm from '../updateDataForm/UpdateDataForm';

const ModalComponent = ({
  isOpen,
  onOpenChange,
  memeInfo,
  setMemesData,
  memesData,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  memeInfo: MemesType | null;
  setMemesData: React.Dispatch<React.SetStateAction<MemesType[]>>;
  memesData: MemesType[];
}) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="align-start">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Meme details
              </ModalHeader>
              <ModalBody>
                <div className="w-full break-all">
                  {' '}
                  <span className="font-bold">ID:</span> {memeInfo?.id}
                </div>
                <div className="w-full break-all">
                  <span className="font-bold">Name:</span> {memeInfo?.name}
                </div>
                <div className="w-full break-all">
                  <span className="font-bold">Image:</span> {memeInfo?.img}
                </div>
                <div className="w-full break-all">
                  <span className="font-bold">Likes:</span> {memeInfo?.likes}
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
              <UpdateDataForm
                memeInfo={memeInfo}
                setMemesData={setMemesData}
                memesData={memesData}
                onClose={onClose}
              />
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalComponent;
