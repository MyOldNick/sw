import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
//store
import people from "../store/people";
import secondaryinfo from "../store/secondaryInfo";
//types
import {PeopleType} from '../types/types'
//components
import BackButton from './BackButton'
//styles
import "../styles/heroPage.css";

const HeroPage: React.FC = observer(
  (): JSX.Element => {
    const { id }: any = useParams();
    const data: PeopleType = people.people[id];

    const { home, starships, vehicles } = secondaryinfo.info;

    const array = [
      { url: data.homeworld, name: "home" },
      { url: data.starships, name: "starships" },
      { url: data.vehicles, name: "vehicles" },
    ];

    useEffect(() => {
      array.forEach((el: any) => secondaryinfo.getInfo(el.url, el.name));

      return () => secondaryinfo.clearState()
    }, []);

    return (
      <div className="container">
        <div className="hero-page">
          <h3>{data.name}</h3>
          <p>Gender: {data.gender}</p>
          <p>Birth Year: {data.birth_year}</p>
          <p>Home: {home}</p>
          <div>
            <strong>Starships:</strong>
            {starships.length <= 0 ? <p>Not have</p> : starships.map((el: any, index: any) => (
              <p key={index}>{el.name}</p>
            ))}
          </div>
          <div>
            <strong>Vehicles:</strong>
            {vehicles.length <= 0 ? <p>Not have</p> : vehicles.map((el: any, index: any) => (
              <p key={index}>{el.name}</p>
            ))}
          </div>
          <BackButton/>
        </div>
      </div>
    );
  }
);

export default HeroPage;
