import React, { useEffect, useState } from "react";
import { Card } from "./card/card";
import "./cards.css";

import statut from "./pictures/statut.png";
import license from "./pictures/license.png";
import licensAatestation from "./pictures/licensAtestation.png";
import structure from "./pictures/structure.png";
import personnel from "./pictures/personnel.png";
import listProf from "./pictures/listProf.png";
import licenseVolume from "./pictures/licenseVolume.png";
import language from "./pictures/language.png";
import vacant from "./pictures/vacant.png";
import materialSup from "./pictures/materialSup.png";
import dormettory from "./pictures/dormettory.png";
import resultEducation from "./pictures/resultEducation.png";
import annualReport from "./pictures/annualReport.png";
import ruleEnter from "./pictures/ruleEnter.png";
import specCondition from "./pictures/specCondition.png";
import priceEducation from "./pictures/priceEducation.png";
import extraList from "./pictures/extraList.png";
import studentsRul from "./pictures/studentsRul.png";
import planAntiBull from "./pictures/planAntiBull.png";
import antiBullClaim from "./pictures/antiBullClaim.png";
import rulAntiBull from "./pictures/rulAntiBull.png";
import wallet from "./pictures/wallet.png";
import financeReport from "./pictures/financeReport.png";
import financeHelp from "./pictures/financeHelp.png";

export const Cards = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const apiUrl = "dataBase/db.json";
  const imgIcons = [
    statut,
    license,
    licensAatestation,
    structure,
    personnel,
    listProf,
    licenseVolume,
    language,
    vacant,
    materialSup,
    dormettory,
    resultEducation,
    annualReport,
    ruleEnter,
    specCondition,
    priceEducation,
    extraList,
    studentsRul,
    planAntiBull,
    antiBullClaim,
    rulAntiBull,
    wallet,
    financeReport,
    financeHelp,
  ];

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="cards-container">
        {items.map((item, i) => (
          <Card
            img={imgIcons[i]}
            title={item.title}
            key={item.id}
            linkDoc={item.linkDoc}
          />
        ))}
      </div>
    );
  }
};
