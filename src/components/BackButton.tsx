import React from "react";
import { Link } from "react-router-dom";
//styles
import '../styles/backButton.css'
//antd
import { Button } from "antd";

const BackButton: React.FC = (): JSX.Element => {
  return (
    <Link to="/">
      <Button  className="back-button">BACK</Button>
    </Link>
  );
};

export default BackButton;
