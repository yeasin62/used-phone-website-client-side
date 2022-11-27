import React from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";

const SingleProduct = () => {
  const phone = useLoaderData();
  const {
    email,
    productImage,
    name,
    location,
    resalePrice,
    originalPrice,
    yearOfUse,
    productName,
    category,
    isVerifiedSeller,
    postedOn
  } = phone;

  return (
    <div class="md:w-3/4 p-4 text-center bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 my-20 mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">{productName}</h1>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Published on:</td>
                    <td>{postedOn}</td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td>{category}</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>{location}</td>
                  </tr>
                  <tr>
                    <td>Seller Name</td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td>Year of use</td>
                    <td>{yearOfUse}</td>
                  </tr>
                  <tr>
                    <td>Original Price</td>
                    <td>{originalPrice} Tk</td>
                  </tr>
                  <tr>
                    <td>Resale Price</td>
                    <td>{resalePrice} Tk</td>
                  </tr>
                </tbody>
              </table>

              <label htmlFor="popupDetails" className="btn btn-active my-4">Book Now</label>
              <BookingModal phone={phone}></BookingModal>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <img src={productImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
