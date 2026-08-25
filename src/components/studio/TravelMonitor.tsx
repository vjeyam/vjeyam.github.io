import { Html } from "@react-three/drei";
import { useState } from "react";

import "../../styles/TravelMonitor.css";

type MonitorView = "off" | "booting" | "albums" | "album" | "photo";

type TravelMonitorProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
};

const canadaPhotos = [
  "/easter-eggs/travel/canada/canada01.jpg",
  "/easter-eggs/travel/canada/canada02.jpg",
  "/easter-eggs/travel/canada/canada03.jpg",
  "/easter-eggs/travel/canada/canada04.jpg",
  "/easter-eggs/travel/canada/canada05.jpg",
  "/easter-eggs/travel/canada/canada06.jpg",
  "/easter-eggs/travel/canada/canada07.jpg",
  "/easter-eggs/travel/canada/canada08.jpg",
  "/easter-eggs/travel/canada/canada09.jpg",
  "/easter-eggs/travel/canada/canada10.jpg",
  "/easter-eggs/travel/canada/canada11.jpg"
];

export default function TravelMonitor({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
}: TravelMonitorProps) {
  const [view, setView] = useState<MonitorView>("off");
  const [activePhoto, setActivePhoto] = useState(0);

  const powerOn = () => {
    setView("booting");

    window.setTimeout(() => {
      setView("albums");
    }, 650);
  };

  const nextPhoto = () => {
    setActivePhoto((current) => (current + 1) % canadaPhotos.length);
  };

  const previousPhoto = () => {
    setActivePhoto(
      (current) =>
        (current - 1 + canadaPhotos.length) % canadaPhotos.length,
    );
  };

  const turnOff = () => {
    setView("off");
    setActivePhoto(0);
  };

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Html
        transform
        center
        distanceFactor={1.5}
        position={[0, 0, 0]}
        wrapperClass="travel-monitor-wrapper"
        style={{
            pointerEvents: "auto",
        }}
      >
        <div className="travel-monitor">
          <div className="travel-monitor__scanlines" />

          {view === "off" && (
            <button
              className="travel-monitor__off"
              onClick={powerOn}
              aria-label="Turn on travel monitor"
            >
              <span className="travel-monitor__status-light" />

              <div>
                <p>AUX DISPLAY</p>
                <strong>STANDBY</strong>
              </div>

              <span className="travel-monitor__power-label">
                CLICK TO POWER
              </span>
            </button>
          )}

          {view === "booting" && (
            <div className="travel-monitor__boot">
              <div className="travel-monitor__boot-flash" />

              <p>STUDIO OS</p>

              <strong>LOADING PERSONAL ARCHIVE</strong>

              <div className="travel-monitor__boot-bar">
                <span />
              </div>
            </div>
          )}

          {view === "albums" && (
            <div className="travel-monitor__app">
              <header className="travel-monitor__header">
                <div>
                  <p>STUDIO OS</p>
                  <h4>Photos</h4>
                </div>

                <button
                  className="travel-monitor__power-button"
                  onClick={turnOff}
                  aria-label="Turn off monitor"
                >
                  ⏻
                </button>
              </header>

              <div className="travel-monitor__section-title">
                <span>Albums</span>
                <small>1 collection</small>
              </div>

              <button
                className="travel-monitor__album"
                onClick={() => setView("album")}
              >
                <img src={canadaPhotos[0]} alt="" />

                <div className="travel-monitor__album-info">
                  <strong>Canada</strong>
                  <span>{canadaPhotos.length} photos</span>
                </div>
              </button>
            </div>
          )}

          {view === "album" && (
            <div className="travel-monitor__app">
              <header className="travel-monitor__header">
                <button
                    className="travel-monitor__back"
                    onClick={() => setView("albums")}
                    aria-label="Back to albums"
                >
                    ← Albums
                </button>

                <div className="travel-monitor__album-heading">
                    <p>TRAVEL LOG</p>
                    <h4>Canada</h4>
                </div>

                <button
                    className="travel-monitor__power-button"
                    onClick={turnOff}
                    aria-label="Turn off monitor"
                >
                    ⏻
                </button>
              </header>

              <div className="travel-monitor__photo-grid">
                {canadaPhotos.map((photo, index) => (
                  <button
                    key={photo}
                    className="travel-monitor__thumbnail"
                    onClick={() => {
                      setActivePhoto(index);
                      setView("photo");
                    }}
                  >
                    <img
                      src={photo}
                      alt={`Canada travel photo ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {view === "photo" && (
            <div className="travel-monitor__viewer">
              <img
                src={canadaPhotos[activePhoto]}
                alt={`Canada travel photo ${activePhoto + 1}`}
                className="travel-monitor__viewer-image"
              />

              <div className="travel-monitor__viewer-top">
                <button
                  onClick={() => setView("album")}
                  aria-label="Back to Canada album"
                >
                  ← Canada
                </button>

                <span>
                  {activePhoto + 1} / {canadaPhotos.length}
                </span>

                <button
                  className="travel-monitor__viewer-power"
                  onClick={turnOff}
                  aria-label="Turn off monitor"
                >
                  ⏻
                </button>
              </div>

              <div className="travel-monitor__viewer-controls">
                <button
                  onClick={previousPhoto}
                  aria-label="Previous travel photo"
                >
                  ←
                </button>

                <button
                  onClick={nextPhoto}
                  aria-label="Next travel photo"
                >
                  →
                </button>
              </div>
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}