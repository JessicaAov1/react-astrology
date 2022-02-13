import React from "react";
import "./ZodiacSigns.css";

export default function ZodiacSigns() {
  return (
    <div className="ZodiacSigns">
      <div className="row">
        <div className="col-3 ">
          <div className="sign-capricorn">
            <button type="button" class="btn btn-secondary btn-sm">
              <img
                src="https://img.icons8.com/dotty/80/000000/capricorn.png"
                alt="capricorn"
              />
            </button>
          </div>
        </div>
        <div className="col-3 aquarius">
          <div className="sign-aquarius">
            <button type="button" class="btn btn-secondary btn-sm">
              <img
                src="https://img.icons8.com/dotty/80/000000/aquarius.png"
                alt="aquarius"
              />
            </button>
          </div>
        </div>
        <div className="col-3 pisces">
          <div className="sign-pisces">
            <button type="button" class="btn btn-secondary btn-sm">
              <img
                src="https://img.icons8.com/dotty/80/000000/pisces.png"
                alt="pisces"
              />
            </button>
          </div>
        </div>
        <div className="col-3 aries">
          <div className="sign-aries">
            <button type="button" class="btn btn-secondary btn-sm">
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
              <button type="button" class="btn btn-secondary btn-sm">
                <img
                  src="https://img.icons8.com/dotty/80/000000/taurus.png"
                  alt="taurus"
                />
              </button>
            </div>
          </div>
          <div className="col-3 gemini">
            <div className="sign-gemini">
              <button type="button" class="btn btn-secondary btn-sm">
                <img
                  src="https://img.icons8.com/dotty/80/000000/gemini.png"
                  alt="gemini"
                />
              </button>
            </div>
          </div>
          <div className="col-3 cancer">
            <div className="sign-cancer">
              <button type="button" class="btn btn-secondary btn-sm">
                <img
                  src="https://img.icons8.com/dotty/80/000000/cancer.png"
                  alt="cancer"
                />
              </button>
            </div>
          </div>
          <div className="col-3 leo">
            <div className="sign-leo">
              <button type="button" class="btn btn-secondary btn-sm">
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
              <button type="button" class="btn btn-secondary btn-sm">
                <img
                  src="https://img.icons8.com/dotty/80/000000/virgo.png"
                  alt="virgo"
                />
              </button>
            </div>
          </div>
          <div className="col-3 libra">
            <div className="sign-libra">
              <button type="button" class="btn btn-secondary btn-sm">
                <img
                  src="https://img.icons8.com/dotty/80/000000/libra.png"
                  alt="libra"
                />
              </button>
            </div>
          </div>
          <div className="col-3 scorpio">
            <div className="sign-scorpio">
              <button type="button" class="btn btn-secondary btn-sm">
                <img
                  src="https://img.icons8.com/dotty/80/000000/scorpio.png"
                  alt="scorpio"
                />
              </button>
            </div>
          </div>
          <div className="col-3 sagittarius">
            <div className="sign-sagittarius">
              <button type="button" class="btn btn-secondary btn-sm">
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
}
