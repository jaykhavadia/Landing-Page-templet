import React, { useState } from "react";
import ContactSection from "./ContactSection";
import watch from "../assets/img/watches.png";
import watch1 from "../assets/img/watch1.png";
import watch2 from "../assets/img/watch2.png";
import watch3 from "../assets/img/watch3.png";
import watch4 from "../assets/img/watch4.png";
import clock from "../assets/img/product-01.jpg";
import glasses from "../assets/img/product-02.jpg";
import { ProductCard } from "./common/productCard";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const LandingPage = () => {
  // State to manage button colors
  const [buttonColor, setButtonColor] = useState("blue");

  // Function to handle color change
  const handleColorChange = (color) => {
    setButtonColor(color);
  };

  return (
    <div className='bg-gradient-to-b from-black to-blue-500  h-auto'>
      <div className='p-10'>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <div>
              <img className='h-full w-full' src={watch} alt='' />
            </div>
          </Grid>
          <Grid
            className='flex w-full text-white items-center justify-end'
            item
            xs={8}
          >
            <div className=''>
              <div className='font-normal'>
                <span className='text-8xl'>
                  Smart<span className='font-bold'>Watches</span>
                </span>
                <br />
                <span className='flex justify-end text-2xl'>
                  Starting from ₹1699*
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className=''>
        <div className='py-12 bg-transparent'>
          <div className='container mx-auto'>
            <h2 className='text-3xl font-semibold text-center text-white mb-8'>
              Our Products
            </h2>
            <div className='px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <ProductCard title='LOVELY MOON' image={watch1} />
              <ProductCard title='HOT SUN' image={watch2} />
              <ProductCard title='SHINING STAR' image={watch3} />
              <ProductCard title='BLACK DRAGON' image={watch4} />
            </div>
          </div>
        </div>
      </div>
      <div className='p-10'>
        <Grid
          className='flex items-center justify-center '
          container
          spacing={2}
          columns={16}
        >
          <Grid
            className='flex text-white items-center justify-center'
            item
            xs={8}
          >
            <div className='pr-16'>
              <div className='font-normal'>
                <span className='text-[#3758f9] text-3xl flex justify-start font-bold'>
                  Start From $50
                </span>
                <span className='mt-3 flex justify-end text-5xl font-bold'>
                  New Arrival From Creative Clock Collections
                </span>
                <span className='mt-2 mb-10 flex justify-end text-md font-thin'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                  enim sequi, explicabo blanditiis, voluptatum excepturi
                  distinctio fugit molestias quasi iure dolores dolorum ab esse,
                  id quibusdam cumque. Provident, eveniet unde!
                </span>
                <Button  variant='contained'>Contained</Button>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div>
              <img className='' src={clock} alt='' />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className='p-10'>
        <Grid
          className='flex items-center justify-center '
          container
          spacing={2}
          columns={16}
        >
          <Grid item>
            <div>
              <img className='' src={glasses} alt='' />
            </div>
          </Grid>
          <Grid
            className='flex text-white items-center justify-center'
            item
            xs={8}
          >
            <div className='pl-16'>
              <div className='font-normal'>
                <span className='text-[#3758f9] text-3xl flex justify-start font-bold'>
                  Start From $50
                </span>
                <span className='mt-3 flex justify-end text-5xl font-bold'>
                  New Arrival From Creative Clock Collections
                </span>
                <span className='mt-2 mb-10 flex justify-end text-md font-thin'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                  enim sequi, explicabo blanditiis, voluptatum excepturi
                  distinctio fugit molestias quasi iure dolores dolorum ab esse,
                  id quibusdam cumque. Provident, eveniet unde!
                </span>
                <Button variant="contained" size="large">Contained</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className='my-10' >
        <div className=' text-white'>
          <span className='mt-3 flex items-center justify-center text-3xl font-bold'>
            Shop By Category
          </span>
          <span className='mt-3 flex items-center justify-center'>
            There are many variations of passages of Lorem Ipsum available
          </span>
          <span className=' flex items-center justify-center'>
            but the majority have suffered alteration in some form.
          </span>
          <div className='px-36 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <ProductCard
              title='GOLD'
              description='2 Products Available'
              image={watch2}
            />
            <ProductCard
              title='SILVER'
              description='8 Products Available'
              image={watch1}
            />
              <ProductCard
                title='BLACK'
                description='5 Products Available'
                image={watch4}
              />
            <ProductCard
              title='WHITE'
              description='3 Products Available'
              image={watch3}
            />
          </div>
        </div>
        <div className='mt-5 flex items-center justify-center' >
          <Button color='inherit' variant="contained" size="large">Explore All Category</Button>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default LandingPage;
