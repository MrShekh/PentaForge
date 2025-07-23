/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import { Fade } from 'react-awesome-reveal';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as emailjs from '@emailjs/browser';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'elements/Form';
import Button from 'elements/Button';

export const DiscussForm = (actions) => {
  const {
    data,
    resetForm,
  } = actions;

  const submitEmail = () => {
    const {
      name,
      company,
      email,
      phone,
      projectIdea,
    } = data;

    const templateParams = {
      name,
      company,
      email,
      phone,
      projectIdea,
    };

    if (name && company && email && phone && projectIdea) {
      emailjs
        .send(
          'service_ln8jhw2',       // ✅ Your EmailJS Service ID
          'template_pvgo6k8',      // ✅ Your EmailJS Template ID
          templateParams,
          '8lWCkKKHwBABlpkuq',     // ✅ Your Public Key (Client-Side Safe)
        )
        .then(() => {
          toast.success('Success! We&apos;ll get back to you soon. Thank you!');
          resetForm();
        })
        .catch((error) => {
          toast.error(`Error sending email: ${error.text}`);
        });
    } else {
      toast.error('Please fill out all fields.');
    }
  };

  return (
    <section className="flex flex-col container mx-auto mt-10 justify-center">
      <Fade direction="down" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">
          Let&apos;s Discuss
        </h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12">
          Please fill out the form below to discuss your project and we&apos;ll get back to you in less than 24 hours.
        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your name"
              onChange={actions.onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Your company"
              onChange={actions.onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email address"
              onChange={actions.onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              placeholder="Your contact number"
              onChange={actions.onChange}
            />
          </div>

          <div className="mx-auto">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Explain your project idea"
              onChange={actions.onChange}
            />
          </div>

          <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 focus:outline-none"
            type="button"
            onClick={submitEmail}
          >
            Submit
          </Button>
        </div>
      </Fade>

      <ToastContainer />
    </section>
  );
};
