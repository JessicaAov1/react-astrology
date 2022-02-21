import React, { useState } from "react";
import axios from "axios";
import "./ZodiacSigns.css";

export default function ZodiacSigns() {
  const [loaded, setLoaded] = useState(false);
  const [horoscope, setHoroscope] = useState(null);

  var request = require("request");

  var options = {
    url: "https://aztro.sameerkumar.website/?sign=scorpio&day=today",
    method: "POST",
  };

  function callback(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body);
    }
  }

  request(options, callback);
  function displayHoroscope(response) {
    setLoaded(true);
    console.log(response);
    return null;
  }

  function load() {
    console.log(horoscope);
    const apiKey = `35bfae6140msha17e1fd70338171p1f1e46jsnbf9f2c957be6`;
    const apiUrl = `https://aztro.sameerkumar.website/?sign=aries&day=today&appid=${apiKey}`;
    axios.request(apiUrl).then(displayHoroscope);
    return null;
  }
  function handleResponse(response) {
    setHoroscope(response);
    load();
  }

  if (loaded)
    return (
      <div className="ZodiacSigns">
        <div className="row">
          <div className="col-3 ">
            <div className="sign-capricorn">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleResponse}
              >
                <img
                  src="https://img.icons8.com/dotty/80/000000/capricorn.png"
                  alt="capricorn"
                />
              </button>
            </div>
          </div>
          <div className="col-3 aquarius">
            <div className="sign-aquarius">
              <button type="button" className="btn btn-secondary btn-sm">
                <img
                  src="https://img.icons8.com/dotty/80/000000/aquarius.png"
                  alt="aquarius"
                />
              </button>
            </div>
          </div>
          <div className="col-3 pisces">
            <div className="sign-pisces">
              <button type="button" className="btn btn-secondary btn-sm">
                <img
                  src="https://img.icons8.com/dotty/80/000000/pisces.png"
                  alt="pisces"
                />
              </button>
            </div>
          </div>
          <div className="col-3 aries">
            <div className="sign-aries">
              <button type="button" className="btn btn-secondary btn-sm">
                <img
                  src="https://img.icons8.com/dotty/80/000000/aries.png"
                  alt="aries"
                />
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3 taurus">
              <div className="sign-taurus">
                <button type="button" className="btn btn-secondary btn-sm">
                  <img
                    src="https://img.icons8.com/dotty/80/000000/taurus.png"
                    alt="taurus"
                  />
                </button>
              </div>
            </div>
            <div className="col-3 gemini">
              <div className="sign-gemini">
                <button type="button" className="btn btn-secondary btn-sm">
                  <img
                    src="https://img.icons8.com/dotty/80/000000/gemini.png"
                    alt="gemini"
                  />
                </button>
              </div>
            </div>
            <div className="col-3 cancer">
              <div className="sign-cancer">
                <button type="button" className="btn btn-secondary btn-sm">
                  <img
                    src="https://img.icons8.com/dotty/80/000000/cancer.png"
                    alt="cancer"
                  />
                </button>
              </div>
            </div>
            <div className="col-3 leo">
              <div className="sign-leo">
                <button type="button" className="btn btn-secondary btn-sm">
                  <img
                    src="https://img.icons8.com/dotty/80/000000/leo.png"
                    alt="leo"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3 virgo">
              <div className="sign-virgo">
                <button type="button" className="btn btn-secondary btn-sm">
                  <img
                    src="https://img.icons8.com/dotty/80/000000/virgo.png"
                    alt="virgo"
                  />
                </button>
              </div>
            </div>
            <div className="col-3 libra">
              <div className="sign-libra">
                <button type="button" className="btn btn-secondary btn-sm">
                  <img
                    src="https://img.icons8.com/dotty/80/000000/libra.png"
                    alt="libra"
                  />
                </button>
              </div>
            </div>
            <div className="col-3 scorpio">
              <div className="sign-scorpio">
                <button type="button" className="btn btn-secondary btn-sm">
                  <img
                    src="https://img.icons8.com/dotty/80/000000/scorpio.png"
                    alt="scorpio"
                  />
                </button>
              </div>
            </div>
            <div className="col-3 sagittarius">
              <div className="sign-sagittarius">
                <button type="button" className="btn btn-secondary btn-sm">
                  <img
                    src="https://img.icons8.com/dotty/80/000000/sagittarius.png"
                    alt="sagittarius"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else {
    load();
    return null;
  }
}
