import React from "react";
import { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import SecondHeader from "../../../components/Header/SecondHeader";
import Form from "react-bootstrap/Form";

const Profile = () => {
  return (
    <>
      <SecondHeader />
      <div className="container-xl px-4 mt-4">
        <div className="row mt-5 d-flex">
          <div className="col-xl-4 profile__info">
            {/* Profile picture card*/}
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                {/* Profile picture image*/}
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                {/* Profile picture help block*/}
                <div className="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                {/* Profile picture upload button*/}
                <button className="btn btn-outline-dark" type="button">
                  Upload new image
                </button>
                <Form.Group controlId="formFile" className="mb-3">
                  {/* <Form.Label>Default file input example</Form.Label> */}
                  <Form.Control type="file" />
                </Form.Group>
              </div>
            </div>
          </div>
          <div className="col">
            {/* Account details card*/}
            <div className="card mb-4 profile_info">
              <div className="card-header">Account Details</div>
              <div className="card-body p-4">
                <form>
                  {/* Form Group (username)*/}
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputUsername">
                      Username (how your name will appear to other users on the
                      site)
                    </label>
                    <input
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username"
                      defaultValue="username"
                    />
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (first name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">
                        First name
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                        defaultValue="Valerie"
                      />
                    </div>
                    {/* Form Group (last name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">
                        Last name
                      </label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        defaultValue="Luna"
                      />
                    </div>
                  </div>
                  {/* Form Row        */}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (organization name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputOrgName">
                        Organization name
                      </label>
                      <input
                        className="form-control"
                        id="inputOrgName"
                        type="text"
                        placeholder="Enter your organization name"
                        defaultValue="Start Bootstrap"
                      />
                    </div>
                    {/* Form Group (location)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLocation">
                        Location
                      </label>
                      <input
                        className="form-control"
                        id="inputLocation"
                        type="text"
                        placeholder="Enter your location"
                        defaultValue="San Francisco, CA"
                      />
                    </div>
                  </div>
                  {/* Form Group (email address)*/}
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmailAddress">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      id="inputEmailAddress"
                      type="email"
                      placeholder="Enter your email address"
                      defaultValue="name@example.com"
                    />
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (phone number)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">
                        Phone number
                      </label>
                      <input
                        className="form-control"
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your phone number"
                        defaultValue="555-123-4567"
                      />
                    </div>
                    {/* Form Group (birthday)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputBirthday">
                        Birthday
                      </label>
                      <input
                        className="form-control"
                        id="inputBirthday"
                        type="text"
                        name="birthday"
                        placeholder="Enter your birthday"
                        defaultValue="06/10/1988"
                      />
                    </div>
                  </div>
                  {/* Save changes button*/}
                  <button className="btn btn-warning" type="button">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
