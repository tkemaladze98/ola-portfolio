import React from "react";
import "../../styles/about.scss";
import profileImage from "../../assets/images/287334533_439244244696063_6866670843920114320_n.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="image-container">
        <img src={profileImage} alt="" />
      </div>
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
        კურსის დასრულების შემდეგ გადავწყვიტე ცოდნის გარღმავება და ამჟამად
        ვსწავლობ OL-Academy_ში, რეაქტის ბიბლიოთეკის გამოყენებას.
      </p>
      <p>
        გარდა კომიუტერული მიმართულებისა ასევე მაქვს არასრული განათლება მიღებული
        ეკნომიკაში,ვსწავლობდი თბილისის ი.ჯავახიშვილის სახელობის უნივერსიტეტში.
      </p>
      <p>
        უნივერსიტეტიდან ამაჟამად ვარ თავისუფალი რადგანაც ავიღე აკადემიური და
        ვეუფლები პროგრამირებას,როგორც ზემოთ მოგახსენეთ.
      </p>
    </div>
  );
};

export default About;
