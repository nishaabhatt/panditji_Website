import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "../Button";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import apolloClient from "../../../lib/apolloClient";
import { gql } from "@apollo/client";

const NavBar = ({data}) => {
   console.log(data);
  const [nav, setNav] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectCity, setSelectCity] = useState(false);
  const [cityTab, setCityTab] = useState("Select city");

  let router = useRouter();

  useEffect(() => {
    // setNav(!nav);
    setNav(!nav);
  },[]);



  const handleNav = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  // const handleCityClose = () => {
  //   setSelectCity(false);
  // };

 
  // const handleSelectCity = async (city) => {
  //   setCityTab(city);
  //   localStorage.setItem("city", city);
  //   setSelectCity(false);

  //   router.push(`/pujaServices?city=${city}`);
  // };

  return (
    <section>
      <header className="bg-gradient-to-r from-primary to-primaryDark h-20 w-full flex justify-between items-center px-10 ">
        <Link href="/">
          <Image
            src="/assets/images/homeassets/car-img-1.png"
            alt="callpanditji"
            width={70}
            height={70}
            className="cursor-pointer"
          />
        </Link>
        <nav className="hidden lg:block">
          <ul className="lg:flex gap-10  ">
            <Link href="/">
              <li className="btn-primary cursor-pointer">Home</li>
            </Link>
            <Link href="/pujaServices">
              <li className="btn-primary cursor-pointer">Pooja Services</li>
            </Link>
            <Link href="/contact">
              <li className="btn-primary cursor-pointer">Enquiry</li>
            </Link>
           <Link href="/download">
            <li className="btn-primary cursor-pointer">Aarti</li>
           </Link>
          </ul>
        </nav>
        <div className="flex">
          {/* <div
            className=" flex justify-center items-center cursor-pointer bg-white px-10 py-4 rounded-lg font-bold mr-5"
            onClick={() => setSelectCity(true)}
          >
            {localStorage.getItem("city") ? cityTab : "Select City"}
          </div>
          <Dialog open={selectCity} onClose={handleCityClose} maxWidth="md">
            <div className="flex px-5 justify-between items-center ">
              <h2 className="text-center border-green-900 text-3xl font-bold pt-5">
                Choose your location
              </h2>
              <RxCross1
                size={25}
                onClick={() => setSelectCity(false)}
                className="cursor-pointer"
              />
            </div>
            <DialogContent className="flex flex-wrap justify-center">
              {data.map((city, i) => {
                return (
                  <div key={i}
                    
                    className="h-48 rounded-lg text-center m-5 gap-3 shadow-lg hover:brightness-50 cursor-pointer"
                    onClick={() => handleSelectCity(city.name)}
                    
                  >
                    <div className="h-48 w-48">
                      <Image
                        src={city.text.image1.url}
                        alt="city"
                        width={100}
                        height={100}
                        objectFit="cover"
                        className=" w-full h-full rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{city.name}</h3> 
                  </div>
                );
               })} 
            </DialogContent>
          </Dialog> */}
          <Button
            hide="hidden"
            show="block"
            name={"Register as Pandit Jii"}
            handleFunction={() => setModalOpen(true)}
          />
          <Dialog open={modalOpen} onClose={handleClose}>
            <div className="flex px-5 justify-between items-center">
              <DialogTitle>
                Enter your details to register as Pandit jii
              </DialogTitle>
              <RxCross1
                size={25}
                onClick={() => setModalOpen(false)}
                className="cursor-pointer"
              />
            </div>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Full Name"
                type="text"
                fullWidth
                variant="outlined"
              />
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
              />
              <TextField
                autoFocus
                margin="dense"
                id="phone"
                label="Contact Number"
                type="text"
                fullWidth
                variant="outlined"
              />
              <TextField
                autoFocus
                margin="dense"
                id="address"
                label=" Your Address"
                type="text"
                fullWidth
                variant="outlined"
              />
              <TextField
                autoFocus
                margin="dense"
                id="pincode"
                label="Pin Code"
                type="teq"
                fullWidth
                variant="outlined"
              />
            </DialogContent>
            <div className="flex justify-center items-center py-3">
              <button className="btn-primary">Submit</button>
            </div>
          </Dialog>
        </div>
        <div className="block lg:hidden" onClick={handleNav}>
          {nav ? (
            <RxHamburgerMenu className="lg:hidden text-secondary text-4xl" />
          ) : (
            <RxCross1 className="lg:hidden text-secondary text-4xl" />
          )}
        </div>
      </header>
      {nav ? (
        ""
      ) : (
        <nav className="bg-primary lg:hidden flex justify-center items-center">
          <ul className="w-full">
            <Link href="/">
              <li className="navbtn-primary cursor-pointer">Home</li>
            </Link>
            <Link href="/pujaServices">
              <li className="navbtn-primary cursor-pointer">Pooja Services</li>
            </Link>
            <Link href="/download">
              <li className="navbtn-primary cursor-pointer">Aartis</li>
            </Link>

            <li className="navbtn-primary cursor-pointer">Enquiry</li>
            <div className="text-center py-4">
              <Button
                name={"Register as Pandit Jii"}
                handleFunction={() => setModalOpen(true)}
              />
            </div>
          </ul>
        </nav>
      )}
    </section>
  );
};

export default NavBar;
