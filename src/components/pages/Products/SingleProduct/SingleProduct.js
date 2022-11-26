import React from "react";
import { useLoaderData } from "react-router-dom";

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
                    <th></th>
                    <th>Title</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Brand</td>
                    <td>{category}</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Location</td>
                    <td>{location}</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Seller Name</td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Year of use</td>
                    <td>{yearOfUse}</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Original Price</td>
                    <td>{originalPrice} Tk</td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td>Resale Price</td>
                    <td>{resalePrice} Tk</td>
                  </tr>
                </tbody>
              </table>

              <button className="btn btn-active my-4">Book Now</button>
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
