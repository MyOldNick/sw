import React from "react";
import { Link } from "react-router-dom";
//types
import {HeroCardProps} from '../types/types'
//styles
import "../styles/card.css";
//antd
import { Card } from "antd";
import { Button, Popover } from "antd";

const HeroCard: React.FC<HeroCardProps> = ({
  name,
  gender,
  birthYear,
  index,
}): JSX.Element => {
  const content = (
    <div>
      <p>Gender: {gender}</p>
      <p>BirthYear: {birthYear}</p>
      <Link to={`info/${index}`}>
        <Button>More</Button>
      </Link>
    </div>
  );

  return (
    <div className="card">
      <Card title={name} bordered={true} style={{ width: 300 }}>
        <div>
          <Popover
            placement="bottom"
            title={name}
            content={content}
            trigger="click"
          >
            <Button>Information</Button>
          </Popover>
        </div>
      </Card>
    </div>
  );
};

export default HeroCard;
