import React, { useEffect, useState } from 'react';
import './FactDisplay.css';

interface Fact {
  year: string;
  fact: string;
}

// Formats current date as ddMM
// Used as key for fetching facts related to that date
function getFormattedDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // +1 as Months are zero-based
  const formattedDate = day + month;

  return formattedDate;
}

interface FavoriteFact {
  factListKey: string,
  factInd: number,
}

function FactDisplay() {
  const [factList, setFactList] = useState<Fact[] | null>(null);
  const [curFactInd, setCurFactInd] = useState(0);
  const [factFavorited, setFactFavorited] = useState(false);
  const [favoriteFacts, setFavoriteFacts] = useState<FavoriteFact[]>([]);
  
  const factListKey = getFormattedDate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/daily_facts.json");
        const data = await response.json();
        setFactList(data[factListKey]);
      } catch (error) {
        console.error('Error loading facts:', error);
      }
    };

    fetchData();

    setFavoriteFacts(JSON.parse(localStorage.getItem("favoriteFacts") || '[]'));
  }, []);

  const setRandomCurFactInd = () => {
    if (factList && factList.length > 0) {
      setCurFactInd(Math.floor(Math.random() * factList.length));
    }
  }

  useEffect(() => {
    setRandomCurFactInd();
  }, [factList]);

  useEffect(() => {
    // Check if fact is favorited or not
    const isFavorited = favoriteFacts.some(
      fact => { return fact.factInd === curFactInd && fact.factListKey === factListKey });
    setFactFavorited(isFavorited);
  }, [curFactInd]);

  const handleToggleFavoriteFact = () => {
    if (factFavorited) {
      // Remove from local storage
      const updatedFavoriteFacts = favoriteFacts.filter((fact: FavoriteFact) => fact.factListKey !== factListKey && fact.factInd !== curFactInd);

      localStorage.setItem("favoriteFacts", JSON.stringify(updatedFavoriteFacts));
      setFavoriteFacts(updatedFavoriteFacts);
      setFactFavorited(false);
    } else {
      // Add to local storage
      const updatedFavoriteFacts = [...favoriteFacts, {factListKey: factListKey, factInd: curFactInd}];
      localStorage.setItem("favoriteFacts", JSON.stringify(updatedFavoriteFacts));
      setFavoriteFacts(updatedFavoriteFacts);
      setFactFavorited(true);
    }
  }

  return (
    <div>
      {factList && (
          <div id="factContainer">
            <p id="factDate"><em>On this date in <strong>{factList[curFactInd].year}</strong>,</em></p>
            <div id="factRow">
              <img 
                id="factFavorite" 
                src={"favorite_" + (factFavorited ? "filled" : "outline") + "_icon.png"} 
                onClick={() => handleToggleFavoriteFact()}
                className={(factFavorited ? "factFavorited" : "factUnfavorited")}></img>
              <p id="fact">{factList[curFactInd].fact}</p>
              <img id="factRefresh" src="refresh_icon.png" onClick={() => setRandomCurFactInd()}></img>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default FactDisplay;
