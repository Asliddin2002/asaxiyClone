import React from "react";
import "./header.css";

const categories = [
  { id: 1, name: "News" },
  { id: 2, name: "New" },
  { id: 3, name: "Discount" },
  { id: 4, name: "Books" },
  { id: 5, name: "Furniture" },
  { id: 6, name: "Phone and Gadgets" },
  { id: 7, name: "Air conditioner" },
];

export default function Category() {
  return (
    <div className="categories">
      <div className="container wraper">
        <div className="category">
          <i className="fa-solid fa-bars"></i>All categories
        </div>
        {categories.map((category) => (
          <div key={category.id} className="category">
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
}
