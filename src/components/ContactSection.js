import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faMapLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Grid from "@mui/material/Grid";
import Logo from '../assets/img/logo.png'

const ContactSection = () => {
  return (
    <section className='relative py-10 bg-transparent'>
      <div className='flex justify-evenly mx-auto bg-transparent'>
        <Grid className='px-10' container spacing={4}>
          <Grid item xs>
            <div className='w-50 content-start items-start'>
              <div className='text-white text-start'>
                <img
                  src={Logo}
                  alt='Logo'
                  className='mx-auto h-16 mb-4'
                />
                <p className='mt-3'>
                  <FontAwesomeIcon
                    className='text-2xl mr-2'
                    icon={faMapLocationDot}
                  />
                  Shop 009A, Level 4, Block A, Demo Park
                </p>
                <p className='mt-3'>
                  <FontAwesomeIcon
                    className='text-2xl mr-2'
                    icon={faPhoneVolume}
                  />
                  +1-613-555-0182
                </p>
                <p className='mt-3'>
                  <FontAwesomeIcon
                    className='text-2xl mr-2'
                    icon={faEnvelope}
                  />
                  contact@yourmail.com
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs>
            <div className='w-auto content-center items-center bg-transparent'>
              <div className='text-white'>
                <div className='text-white text-4xl font-bold'>My Account</div>
                <div className='text-start mt-3'>
                  <div className=''>
                    <a href='#' className='text-white'>
                      My Profile
                    </a>
                  </div>
                  <div className='mt-3'>
                    <a href='#' className='text-white'>
                      My Order History
                    </a>
                  </div>
                  <div className='mt-3'>
                    <a href='#' className='text-white'>
                      Order Tracking
                    </a>
                  </div>
                  <div className='mt-3'>
                    <a href='#' className='text-white'>
                      Shopping Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs>
            <div className='w-auto content-center items-center'>
              <div className='text-white'>
                <div className='text-white text-4xl font-bold'>
                  Shop Departments
                </div>
                <div className='text-start'>
                  <div className='mt-3'>
                    <a href='#' className='text-white'>
                      Computers & Accessories
                    </a>
                  </div>
                  <div className='mt-3'>
                    <a href='#' className='text-white'>
                      Smartphones & Tablets
                    </a>
                  </div>
                  <div className='mt-3'>
                    <a href='#' className='text-white'>
                      TV, Video & Audio
                    </a>
                  </div>
                  <div className='mt-3'>
                    <a href='#' className='text-white'>
                      Cameras, Photo & Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs>
          <div className='w-auto content-center items-center'>
          <div className='container mx-auto bg-transparent '>
            <div className='text-center'>
              <h2 className='text-4xl font-bold text-white mb-4'>Contact Us</h2>
              <p className='text-white'>Have questions? Reach out to us!</p>
            </div>
            <div>
              <div className='flex justify-center mt-4 text-3xl'>
                <a href='#' className='text-white mx-2'>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href='#' className='text-white mx-2'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href='#' className='text-white mx-2'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default ContactSection;
