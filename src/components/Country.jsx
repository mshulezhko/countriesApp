import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "./api/fetchData";
import { useNavigate } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();
  const url = `https://restcountries.com/v3.1/name/${name}`;

  useEffect(() => {
    fetchData(url).then((data) => setCountry(data));
  }, [url]);

  return (
    country[0] && (
      <div className="country-detail-wrap">
        <button onClick={() => navigate("/")}> {"<-"}Go Back</button>

        <div className="country-detail-block">
          <img
            className="main-img"
            src={country[0].flags.png}
            alt={country[0].flags?.alt}
          />
          <div className="country-detail-text-block">
            <h1>{country[0]?.name?.official}</h1>
            <div className="info">
              <div>
                {" "}
                <p>{}</p>
                <p>
                  Native Name: <span>{name}</span>
                </p>
                <p>
                  Population: <span>{country[0].population}</span>
                </p>
                <p>
                  Region: <span>{country[0].region}</span>
                </p>
                <p>
                  Languages:{" "}
                  <span>
                    {country[0].languages &&
                      Object.keys(country[0].languages).map((key) => (
                        <span key={key}>{country[0].languages[key] + " "}</span>
                      ))}
                  </span>
                </p>
              </div>
              <div>
                {" "}
                <p>
                  Sub Region: <span>{country[0].subregion}</span>
                </p>
                <p>
                  Capital: <span>{country[0].capital[0]}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Country;
