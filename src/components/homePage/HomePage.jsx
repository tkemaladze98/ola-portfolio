import React from "react";
import "../../styles/homePage.scss";
import { IoHandLeftSharp } from "react-icons/io5";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>
        Welcome to Shota Tkemaladze portfolio{" "}
        <IoHandLeftSharp className="hand" />
      </h1>
      <p>
        მე ვარ შოთა ტყემალაძე, დამწყები Front-end დეველოპერი და ახლა თქვენ
        იმყოფევით ჩემი პრტფოლიოს მთავარ გვერდზე
      </p>
      <p>თქვენ აქ გაიგებთ ყველა საჭირო დეტალს ჩემ შესახებ</p>
      <p>
        გთხოვთ გამოიყენოთ სანავიგაციო მენიუ და გადახვიდეთ თქვენთვის სასურველ
        გვერდზე
      </p>
    </div>
  );
};

export default HomePage;
