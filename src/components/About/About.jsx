import React from "react";
import "../../styles/about.scss";
import profileImage from "../../assets/images/287334533_439244244696063_6866670843920114320_n.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="image-container">
        <img src={profileImage} alt="" />
      </div>
      <div className="text-container">
        <p>
          მე ვარ შოთა ტყემალაძე,23 წლის. შესწავლილი მაქვს და კვლავაც ვიღრმავებ
          ცოდნას Front-end მიმართულებით.
        </p>
        <p>
          2021 წელს გავიარე IT Academy Step Georgia_ს 6 თვიანი Front-end web
          პროგრამირების კურსი.
        </p>
        <p>
          კურსის ფარგლებში მე შევისწავლე შემდეგი ენები თუ
          ტექნოლოგიები:HTML,CSS,Javscript,Bottstrap,Jquery,Angular,Typescript.
        </p>
        <p>
          კურსის დასრულების შემდეგ გადავწყვიტე ცოდნის გარღმავება და დავიწყე
          სწავლა ორიენტ ლოჯიკის აკადემიაში (OL Academy). ამ აკადემიაში
          შევისწავლე რეაქტის ბიბლიოთეკა.
        </p>
        <p>
          გარდა კომიუტერული მიმართულებისა ასევე მაქვს არასრული განათლება
          მიღებული ეკნომიკაში,ვსწავლობდი თბილისის ი.ჯავახიშვილის სახელობის
          უნივერსიტეტში.
        </p>
        <p>
          უნივერსიტეტიდან ამაჟამად ვარ თავისუფალი რადგანაც ავიღე აკადემიური და
          ვეუფლები პროგრამირებას,როგორც ზემოთ მოგახსენეთ.
        </p>
      </div>
    </div>
  );
};

export default About;
