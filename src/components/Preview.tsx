import React from "react";
import { Link } from "react-router-dom";
//styles
import "../styles/preview.css";
//antd
import { Button } from 'antd';
//images
import BabyYoda from "../images/BabyYoda.png";

const Preview: React.FC = (): JSX.Element => {
  return (
    <div className="container">
      <div className="preview__content">
        <div className="preview__image">
          <img src={BabyYoda} alt="BabyYoda"></img>
        </div>
        <Link to="/main">
           <Button type="primary" size="large" className="preview__button">START</Button>
        </Link>
      </div>
    </div>
  );
};

export default Preview;
