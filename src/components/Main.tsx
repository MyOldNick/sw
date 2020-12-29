import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
//store
import people from "../store/people";
//components
import HeroCard from "./HeroCard";
import BackButton from "./BackButton";
//styles
import "../styles/main.css";

const Main: React.FC = observer(
  (): JSX.Element => {
    useEffect(() => people.getPeople(), []);

    return (
      <div className="container">
        <div className="main__card-container">
          {people.people.map((el: any, index: any) => (
            <HeroCard
              key={index}
              name={el.name}
              gender={el.gender}
              birthYear={el.birth_year}
              index={index}
            />
          ))}
        </div>
        <BackButton />
      </div>
    );
  }
);

export default Main;
