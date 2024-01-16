/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import products_bg from "../../assets/Product-Section/Product-bg.png";
import {
  Button,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick/lib/slider";
import { IoCreateOutline } from "react-icons/io5";
import { Rating } from "primereact/rating";

// Slider Config
const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  appendDots: (dots) => (
    <div
      style={{
        bottom: "-60px",
        padding: "10px",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const handleCars = () => {
    setLoading(true);
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  };

  const handleTrucks = () => {
    setLoading(true);
    fetch("http://localhost:5000/trucks")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  };

  const handleAirPlane = () => {
    setLoading(true);
    fetch("http://localhost:5000/airplane")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  };

  const handleBikes = () => {
    setLoading(true);
    fetch("http://localhost:5000/bikes")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  };

  const handleAddNewToy = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const picture = form.photo.value;
    const categoryID = form.category.value;
    const user = form.user.value;
    const email = form.email.value;
    const ratings = value;
    const description = form.description.value;

    const newToy = {
      name,
      price,
      picture,
      categoryID,
      user,
      email,
      ratings,
      description,
    };

    fetch("http://localhost:5000/addnewtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setProducts(prevState => [...prevState, newToy]);
          setLoading(false);
          toast({
            title: "Toy Add SuccessFull",
            status: "success",
            position: "top",
            duration: 9000,
            isClosable: true,
          });
          form.reset();
          onClose()
        }
        else{
          setLoading(false);
          toast({
            title: "SameThing is Wrong Places Try Again",
            status: "error",
            position: 'top',
            duration: 9000,
            isClosable: true,
          })
        }
      });
  };
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${products_bg}')` }}
    >
      <div className="container mx-auto px-5 py-7">
        <div className="text-center">
          <h4 className="text-pink-600 text-base font-semibold font-['Inter'] leading-normal">
            Trending Products
          </h4>
          <h2 className="text-gray-900 text-4xl font-bold font-['Nunito'] leading-[44px] mt-[12px] mb-[20px]">
            Popular Product
          </h2>
          <p className="text-gray-500 text-lg font-normal font-['Inter'] leading-7">
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </p>
        </div>
        <div className="py-5">
          <Tabs variant="soft-rounded">
            <TabList className="flex flex-wrap items-center !justify-center gap-5">
              <Tab
                onClick={handleCars}
                _selected={{ color: "white", bg: "pink.500" }}
              >
                Cars
              </Tab>
              <Tab
                onClick={handleTrucks}
                _selected={{ color: "white", bg: "pink.500" }}
              >
                Trucks
              </Tab>
              <Tab
                onClick={handleAirPlane}
                _selected={{ color: "white", bg: "pink.500" }}
              >
                Air Plane
              </Tab>
              <Tab
                onClick={handleBikes}
                _selected={{ color: "white", bg: "pink.500" }}
              >
                Bikes
              </Tab>
            </TabList>

            {/* Add New Toy */}
            <div className="text-center md:text-end mt-4 md:mt-0">
              <Button
                className="!bg-pink-600 !text-white !text-base !font-medium !font-['Inter'] !leading-normal !rounded-md !px-3 !lg:px-5 !py-2"
                onClick={onOpen}
              >
                <IoCreateOutline className="w-8 h-6" /> Add New Toy
              </Button>
            </div>
            {/* Modal */}
            <Modal
              size={"4xl"}
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              isCentered
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <form onSubmit={handleAddNewToy}>
                  <ModalHeader>Add New Toy</ModalHeader>
                  <ModalCloseButton className="!text-red-600 !text-xl !p-3" />
                  <ModalBody pb={6}>
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Row 1 */}
                      <InputGroup>
                        <label
                          className="bg-gray-300 text-center px-3 flex items-center font-medium text-gray-600 !py-0 text-md rounded-tl-md rounded-bl-md"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          className="!text-lg"
                          name="name"
                          type="text"
                          placeholder="Toy Name"
                          required
                        />
                      </InputGroup>
                      <InputGroup>
                        <label
                          className="bg-gray-300 text-center px-3 flex items-center font-medium text-gray-600 !py-0 text-md rounded-tl-md rounded-bl-md"
                          htmlFor="Price"
                        >
                          Price
                        </label>
                        <Input
                          id="Price"
                          className="!text-lg"
                          type="number"
                          name="price"
                          placeholder="$"
                          required
                        />
                      </InputGroup>

                      <InputGroup>
                        <label
                          className="bg-gray-300 text-center px-3 flex items-center font-medium text-gray-600 !py-0 text-md rounded-tl-md rounded-bl-md"
                          htmlFor="Photo"
                        >
                          Photo
                        </label>
                        <Input
                          id="Photo"
                          className="!text-lg"
                          type="url"
                          name="photo"
                          placeholder="Photo URL"
                          required
                        />
                      </InputGroup>

                      <Select
                        name="category"
                        size="md"
                        placeholder="Select Category"
                        required
                      >
                        <option value="cars">Cars</option>
                        <option value="airplanes">Air Planes</option>
                        <option value="trucks">Trucks</option>
                        <option value="bikes">Bikes</option>
                      </Select>

                      <InputGroup>
                        <label
                          className="bg-gray-300 text-center px-3 flex items-center font-medium text-gray-600 !py-0 text-md rounded-tl-md rounded-bl-md"
                          htmlFor="user"
                        >
                          User
                        </label>
                        <Input
                          id="user"
                          className="!text-lg"
                          name="user"
                          type="text"
                          placeholder="User Name"
                          required
                        />
                      </InputGroup>
                      <InputGroup>
                        <label
                          className="bg-gray-300 text-center px-3 flex items-center font-medium text-gray-600 !py-0 text-md rounded-tl-md rounded-bl-md"
                          htmlFor="Email"
                        >
                          Email
                        </label>
                        <Input
                          id="Email"
                          className="!text-lg"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </InputGroup>

                      <div className="flex gap-3 md:col-span-2">
                        <label
                          className="bg-gray-300 text-center px-3 flex items-center font-medium text-gray-600 !py-2 text-md rounded-tl-md rounded-bl-md"
                          htmlFor="rating"
                        >
                          Rating
                        </label>
                        <Rating
                          className="!flex gap-2"
                          value={value}
                          cancel={false}
                          onChange={(e) => setValue(e.value)}
                          pt={{
                            onIcon: { className: "text-orange-400 w-6 h-6" },
                            offIcon: {
                              className: "w-6 h-6",
                            },
                          }}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Textarea
                          name="description"
                          required
                          placeholder="Toy Description ..."
                        />
                      </div>
                    </div>
                  </ModalBody>

                  <ModalFooter>
                    <button
                      disabled={value ? false : true}
                      className={`bg-pink-600 text-white text-lg font-medium font-['Inter'] leading-normal rounded-md px-4 lg:px-6 py-2 mr-6 ${value ? '' : 'cursor-not-allowed opacity-50'}`}
                      type="submit"
                    >
                      Save
                    </button>
                    <Button type="button" onClick={onClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </form>
              </ModalContent>
            </Modal>

            {/* Modal End */}

            {/* Loading */}
            {loading ? (
              <div className="text-center mt-10">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              </div>
            ) : (
              ""
            )}

            <TabPanels className="py-8">
              {/* Cars Category */}
              <TabPanel>
                <Slider {...settings}>
                  {products.map((product) => (
                    <ProductCard
                      key={product._id}
                      setLoading={setLoading}
                      product={product}
                    ></ProductCard>
                  ))}
                </Slider>
              </TabPanel>
              {/* Trucks Category */}
              <TabPanel>
                <Slider {...settings}>
                  {products.map((product) => (
                    <ProductCard
                      key={product._id}
                      setLoading={setLoading}
                      product={product}
                    ></ProductCard>
                  ))}
                </Slider>
              </TabPanel>
              {/* Air Plane Category */}
              <TabPanel>
                <Slider {...settings}>
                  {products.map((product) => (
                    <ProductCard
                      key={product._id}
                      setLoading={setLoading}
                      product={product}
                    ></ProductCard>
                  ))}
                </Slider>
              </TabPanel>
              {/* Bikes Category */}
              <TabPanel>
                <Slider {...settings}>
                  {products.map((product) => (
                    <ProductCard
                      key={product._id}
                      setLoading={setLoading}
                      product={product}
                    ></ProductCard>
                  ))}
                </Slider>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
