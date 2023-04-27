import React from "react";

const JogaTypes = () => {
  return (
    <div style={{ marginTop: "200px" }} className="main-container">
      <h1 style={{ textAlign: "center" }}>
        RODZAJE JOGI – WYBIERZ JOGĘ DLA SIEBIE
      </h1>
      <p>
        Ta forma aktywności ruchowej swoją tradycją sięga czasów starożytnych
        Indii. Współcześnie joga jest popularna nie tylko jako idealna forma
        medytacji i wyciszenia, a więc również poprawy ogólnego nastroju, ale
        zwłaszcza jako sport poprawiający elastyczność tkanek i koordynację
        ruchową oraz wzmacniający całe ciało! To także forma ruchu, którą można
        uprawiać przez cały rok – w końcu samodzielna joga w domu może przynieść
        takie same efekty jak zajęcia w zorganizowanej grupie. Kiedy pojawiają
        się pytania o rodzaje jogi, okazuje się, że sprawa nie jest taka prosta,
        jak mogłoby się wydawać. Zatem jaki rodzaj jogi wybrać, by osiągnąć
        wymarzony cel?
        <ol>
          <li>Hatha Joga</li>
          <p>
            Skupia się na połączeniu oddechu z asanami (pozycjami jogi) w celu
            zwiększenia siły i elastyczności ciała.
          </p>
          <li>
            Vinyasa Joga
            <p>
              {" "}
              Skupia się na płynnym przepływie oddechu i ruchu, w którym każda
              pozycja jogi jest synchronizowana z konkretnym ruchem ciała.
            </p>
          </li>
          <li>
            Ashtanga Joga{" "}
            <p>
              Składa się z szeregu stałych sekwencji asan, które łączą się w
              ciągły, dynamiczny ruch.{" "}
            </p>
          </li>
          <li>
            Iyengar Joga{" "}
            <p>
              Skupia się na precyzyjnym wykonywaniu asan za pomocą rekwizytów,
              takich jak bloki, pasy i krzesła, aby pomóc uczniom w lepszym
              zrozumieniu i ulepszaniu swojej praktyki.{" "}
            </p>
          </li>
          <li>
            Kundalini Joga{" "}
            <p>
              {" "}
              Skupia się na praktykowaniu asan, medytacji, oddechu i mantr, aby
              rozwijać świadomość duchową i energię kundalini.
            </p>
          </li>
          <li>
            Bikram Joga{" "}
            <p>
              {" "}
              Jest to rodzaj jogi wykonywanej w nagrzanym pomieszczeniu,
              składającej się z dwudziestu sześciu pozycji jogi i dwóch ćwiczeń
              oddechowych.{" "}
            </p>
          </li>
          <li>
            Jivamukti Joga{" "}
            <p>
              {" "}
              Łączy asany, medytację, muzykę, filozofię i etykę, aby rozwijać
              harmonię między ciałem, umysłem i duchem.{" "}
            </p>
          </li>
        </ol>
      </p>
    </div>
  );
};

export default JogaTypes;
