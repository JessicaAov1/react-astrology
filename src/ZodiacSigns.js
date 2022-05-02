import React, { useState } from "react";
import axios from "axios";
import "./ZodiacSigns.css";
import Horoscope from "./Horoscope";

export default function ZodiacSigns() {
  const [loaded, setLoaded] = useState(false);
  const [horoscope, setHoroscope] = useState("");
  const [sign, setSign] = useState("");

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

    setHoroscope({
      dates: response.data_range,
      currentDate: response.current_date,
      description: response.description,
      compatibility: response.compatibility,
      mood: response.mood,
      color: response.color,
      number: response.lucky_number,
      time: response.lucky_time,
    });
    console.log(response);
    return null;
  }

  function load() {
    console.log(horoscope);

    const apiKey = `35bfae6140msha17e1fd70338171p1f1e46jsnbf9f2c957be6`;
    const apiUrl = `https://aztro.sameerkumar.website/?sign=${sign}&day=today&appid=${apiKey}`;
    axios.request(apiUrl).then(displayHoroscope);
    return null;
  }
  function handleSubmit(response) {
    setHoroscope(response);
    load();
  }
  function updateSign(event) {
    setSign(event);
    console.log(sign);
    handleSubmit();
  }

  const zodiacSigns = (
    <div className="ZodiacSigns">
      <div className="row py-2 block"></div>
      <div className="row py-2 block">
        <div className="col-md-3 py-2 ">
          <div className="sign-capricorn">
            <img
              src="https://img.icons8.com/dotty/80/000000/capricorn.png"
              alt="capricorn"
            />
            <br />
            <a
              href="/"
              className="capricorn"
              rel="noreferrer"
              onClick={handleSubmit}
            >
              Capricorn
            </a>
          </div>
        </div>
        <div className="col-md-3 py-2 aquarius">
          <div className="sign-aquarius">
            <img
              src="https://img.icons8.com/dotty/80/000000/aquarius.png"
              alt="aquarius"
            />
            <br />
            <a
              href="/"
              className="Aquarius"
              rel="noreferrer"
              onClick={updateSign}
            >
              Aquarius
            </a>
          </div>
        </div>
        <div className="col-md-3 py-2  pisces">
          <div className="sign-pisces">
            <img
              src="https://img.icons8.com/dotty/80/000000/pisces.png"
              alt="pisces"
            />
            <br />
            <a
              href="/"
              className="Pisces"
              rel="noreferrer"
              onClick={updateSign}
            >
              Pisces
            </a>
          </div>
        </div>
        <div className="col-md-3 py-2 aries">
          <div className="sign-aries">
            <img
              src="https://img.icons8.com/dotty/80/000000/aries.png"
              alt="aries"
            />
            <br />
            <a
              href="/"
              className="Aries"
              rel="noreferrer"
              onClick={handleSubmit}
            >
              Aries
            </a>
          </div>
        </div>
        <div className="row py-2 block">
          <div className="col-md-3 py-2 taurus">
            <div className="sign-taurus">
              <img
                src="https://img.icons8.com/dotty/80/000000/taurus.png"
                alt="taurus"
              />
              <br />
              <a
                href="/"
                className="Taurus"
                rel="noreferrer"
                //  onClick={updateSign}
              >
                Taurus
              </a>
            </div>
          </div>
          <div className="col-md-3 py-2 gemini">
            <div className="sign-gemini">
              <img
                src="https://img.icons8.com/dotty/80/000000/gemini.png"
                alt="gemini"
              />
              <br />
              <a
                href="/"
                className="Gemini"
                rel="noreferrer"
                //  onClick={updateSign}
              >
                Gemini
              </a>
            </div>
          </div>
          <div className="col-md-3 py-2 cancer">
            <div className="sign-cancer">
              <img
                src="https://img.icons8.com/dotty/80/000000/cancer.png"
                alt="cancer"
              />
              <br />
              <a
                href="/"
                className="Cancer"
                rel="noreferrer"
                // onClick={updateSign}
              >
                Cancer
              </a>
            </div>
          </div>
          <div className="col-md-3 py-2 leo">
            <div className="sign-leo">
              <img
                src="https://img.icons8.com/dotty/80/000000/leo.png"
                alt="leo"
              />
              <br />
              <a
                href="/"
                className="Leo"
                rel="noreferrer"
                target="_blank"
                //  onClick={updateSign}
              >
                Leo
              </a>
            </div>
          </div>
        </div>
        <div className="row py-2 block">
          <div className="col-md-3 py-2virgo">
            <div className="sign-virgo">
              <img
                src="https://img.icons8.com/dotty/80/000000/virgo.png"
                alt="virgo"
              />
              <br />
              <a
                href="/"
                className="Virgo"
                rel="noreferrer"
                // onClick={updateSign}
              >
                Virgo
              </a>
            </div>
          </div>
          <div className="col-md-3 py-2 libra">
            <div className="sign-libra">
              <img
                src="https://img.icons8.com/dotty/80/000000/libra.png"
                alt="libra"
              />
              <br />
              <a
                href="/"
                className="Libra"
                rel="noreferrer"
                // onClick={updateSign}
              >
                Libra
              </a>
            </div>
          </div>
          <div className="col-md-3 py-2 scorpio">
            <div className="sign-scorpio">
              <img
                src="https://img.icons8.com/dotty/80/000000/scorpio.png"
                alt="scorpio"
              />
              <br />
              <a
                href="/"
                className="Scorpio"
                rel="noreferrer"
                onClick={handleSubmit}
              >
                Scorpio
              </a>
            </div>
          </div>
          <div className="col-md-3 py-2 sagittarius">
            <div className="sign-sagittarius">
              <img
                src="https://img.icons8.com/dotty/80/000000/sagittarius.png"
                alt="sagittarius"
              />
              <br />
              <a
                href="/"
                className="Sagittarius"
                rel="noreferrer"
                // onClick={updateSign}
              >
                Sagittarius
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  if (loaded)
    return (
      <div>
        <div className="signs">{zodiacSigns}</div>
        <div className="Horoscope">
          <div className="row flex-row">
            <div className="col-md-12 text-align-center ">
              <Horoscope data={horoscope} />
            </div>
          </div>
        </div>
      </div>
    );
  else {
    return (
      <div>
        <div className="signs">{zodiacSigns}</div>
      </div>
    );
  }
}
