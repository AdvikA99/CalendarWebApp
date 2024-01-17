import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './DetailsView.css';

interface Fact {
  year: string;
  fact: string;
}

interface FactsDictionary {
  [key: string]: Fact[];
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

function DetailsView() {
  const [factList, setFactList] = useState<Fact[] | null>(null);
  const [curFactInd, setCurFactInd] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/daily_facts.json");
        const data = await response.json();
        const date = getFormattedDate();
        setFactList(data[date]);
      } catch (error) {
        console.error('Error loading facts:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (factList && factList.length > 0) {
      setCurFactInd(Math.floor(Math.random() * factList.length));
    }
  }, [factList]);

  return (
    <div id="detailsSection">
      {factList && (
          <div>
            <p>year: {factList[curFactInd].year}</p>
            <p>fact: {factList[curFactInd].fact}</p>
          </div>
        )
      }
    </div>
  );
}

export default DetailsView;
