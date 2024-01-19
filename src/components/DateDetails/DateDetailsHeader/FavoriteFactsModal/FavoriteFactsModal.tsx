import React, { ReactNode, useEffect, useState } from 'react';
import './FavoriteFactsModal.css';
import { Fact } from '../../FactDisplay/FactDisplay';
import FavoriteFactItem from './FavoriteFactItem/FavoriteFactItem';
import { FavoriteFact } from '../../DateDetails';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const formatFactDate = (dateCode : string) => {
  const date = dateCode.substring(0, 2);
  const monthInd = Number(dateCode.substring(2, 4)) - 1;

  const dateSuffix = (date === "1" || date === "21" || date === "31" ? "st" :
                        (date === "2" || date == "22" ? "nd" : 
                          (date === "3" || date == "23" ? "rd" : "th")));
  return `${shortenMonthName(monthInd)} ${date}${dateSuffix}`;
}

const shortenMonthName = (monthInd : number) => {
  if (monthInd === 8) {
    return months[monthInd].substring(0, 4);
  } else {
    return months[monthInd].substring(0, 3);
  }
}

function FavoriteFactsModal(props: any) {
  const [allFacts, setAllFacts] = useState<{[key: string]: Fact[]}>({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/daily_facts.json");
        const data = await response.json();
        setAllFacts(data);
      } catch (error) {
        console.error("Error loading facts: ", error);
      }
    };

    fetchData();
  }, []);

  const handleRemoveFavoriteFact = (factListKey : string, factInd : number) => {
    // Remove from local storage
    const updatedFavoriteFacts = (props.favoriteFacts as FavoriteFact[]).filter((fact: FavoriteFact) => fact.factListKey !== factListKey || fact.factInd !== factInd);
    localStorage.setItem("favoriteFacts", JSON.stringify(updatedFavoriteFacts));
    props.setFavoriteFacts(updatedFavoriteFacts);
  };

  return (
    <div id="favoriteFactsModal">
      <div id="favoriteFactsModalHeader">
        <img id="favoriteFactsModalIcon" src="favorite_filled_icon.png"></img>
        <p id="favoriteFactsModalTitle">Favorite Facts</p>
      </div>

      <div id="favoriteFactsList">
        {
          Object.entries(
            months.reduce((monthAcc: {[key: string]: ReactNode[]}, monthName, monthIndex) => {
              const monthKey = (monthIndex + 1).toString().padStart(2, "0");

              const monthGroup = (props.favoriteFacts as FavoriteFact[])
                .filter((fact) => fact.factListKey.substring(2, 4) === monthKey)
                .reduce((dateAcc: {[key: string]: ReactNode[]}, fact) => {
                  const dateKey = fact.factListKey.substring(0, 2);

                  const key = `${fact.factListKey}-${fact.factInd}`;
                  if (!dateAcc[dateKey]) {
                    dateAcc[dateKey] = [];
                  }
                  if (allFacts[fact.factListKey]) {
                    dateAcc[dateKey].push(
                      <FavoriteFactItem
                        key={key}
                        fact={allFacts[fact.factListKey][fact.factInd]}
                        onRemoveFavoriteFact={() => handleRemoveFavoriteFact(fact.factListKey, fact.factInd)}
                      />
                    );
                  }

                  return dateAcc;
                }, {});

              monthAcc[monthName] = Object.entries(monthGroup).map(
                ([dateKey, dateGroup]) => (
                  <div key={`${monthKey}-${dateKey}`}>
                    <p className="favoriteFactModalSubheader">{`${formatFactDate(dateKey + monthKey)}`}</p>
                    {dateGroup}
                  </div>
                )
              );

              return monthAcc;
            }, {})
          ).map(([monthName, dateGroups]) => (
            <div key={monthName} className="favoriteFactModalMonthGroup">
              <p className="favoriteFactModalHeader">{monthName}</p>
              {dateGroups}
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default FavoriteFactsModal;
