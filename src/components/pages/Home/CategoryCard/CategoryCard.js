import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({displayCat}) => {
    console.log(displayCat);
    return (
        <div className="card shadow-xl bg-teal-100">
            <div className="card-body">
                <Link to={'/category/'} className="card-title justify-center">{displayCat.category}</Link>
            </div>
        </div>
    );
};

export default CategoryCard;