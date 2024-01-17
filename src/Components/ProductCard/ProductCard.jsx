/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import card from "../../assets/Card/card.png";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { Rating } from "primereact/rating";

const ProductCard = ({ product, setLoading, shopPage }) => {
  const [details, setDetails] = useState({});

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const { name, picture, price, _id, ratings } = product;

  const handleDetails = (id) => {
    setLoading(true);
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      });
  };

  return (
    <div
      className={`bg-white rounded-lg border border-stone-300 ${
        shopPage || "mx-[10px]"
      }`}
    >
      <div className="px-8 py-4">
        <img className="w-full h-40 rounded-md sm:h-48" src={picture} alt="" />
      </div>
      <footer className="bg-[#FAF5F9] rounded-lg border border-stone-300 py-[15px] px-[30px] flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h2 className="text-black text-lg font-medium font-['Inter'] leading-tight">
            {name.slice(0, 30)}
          </h2>
          {shopPage && (
            <h6 className="text-black text-lg font-medium font-['Inter'] leading-tight flex gap-2">
              Ratings:{" "}
              <Rating
                className="text-yellow-400 flex gap-1"
                value={ratings}
                readOnly
                cancel={false}
              />
            </h6>
          )}
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-pink-600 text-xl font-bold font-['Inter'] leading-tight">
            ${price}
          </h4>
          <Button
            className="!bg-pink-600 !text-white !text-base !font-medium !font-['Inter'] !leading-normal !rounded-md !px-3 !lg:px-5 !py-2"
            onClick={() => {
              setOverlay(<OverlayOne />);
              handleDetails(_id);
              onOpen();
            }}
          >
            Details
          </Button>
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
              <ModalHeader className="text-black text-lg font-medium font-['Inter'] leading-tight">
                {details.name}
              </ModalHeader>
              <ModalCloseButton className="!text-red-600 !text-xl !p-3" />
              <ModalBody>
                <div>
                  <img className="w-full py-4" src={details.picture} alt="" />
                  <div className="flex flex-col gap-3">
                    <h6 className="text-black text-lg font-medium font-['Inter'] leading-tight">
                      Price:{" "}
                      <span className="text-pink-600 text-xl font-bold font-['Inter'] leading-tight">
                        ${details.price}
                      </span>
                    </h6>
                    <h6 className="text-black text-lg font-medium font-['Inter'] leading-tight flex gap-2">
                      Ratings:{" "}
                      <Rating
                        className="text-yellow-400 flex gap-1"
                        value={details.ratings}
                        readOnly
                        cancel={false}
                      />
                    </h6>
                    <h6 className="text-black text-lg font-medium font-['Inter'] leading-tight">
                      Category: <span>{details.categoryID}</span>
                    </h6>
                    {details.user && (
                      <h6 className="text-black text-lg font-medium font-['Inter'] leading-tight">
                        Seller Name: <span>{details?.user}</span>
                      </h6>
                    )}
                    <p className="text-black text-md font-normal font-['Inter'] leading-tight">
                      Description: {details.description}
                    </p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="!bg-pink-600 !text-white !text-base !font-medium !font-['Inter'] !leading-normal !rounded-md !px-3 !lg:px-5 !py-2"
                  onClick={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </footer>
    </div>
  );
};

export default ProductCard;
