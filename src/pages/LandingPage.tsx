import React from "react";
import landingPageImage from "../images/main_page.jpg";
import Footer from "../components/Footer";
const LandingPage = () => {
  return (
    <main style={{ marginTop: "60px" }}>
      {/* <figure>
        <img src={landingPageImage} width="100%" className="landingPageImage" />
        <figcaption className="blend">
          <h1> TO JEST POTĘŻNY TEKST NA ZDJĘCIU </h1>
          <h1> TO JEST POTĘŻNY TEKST NA ZDJĘCIU </h1>
          <h1> TO JEST POTĘŻNY TEKST NA ZDJĘCIUfdsfdsfdsfds </h1>
        </figcaption>
          </figure> */}
      <>
        <div style={{ position: "relative", display: "block" }}>
          <img
            src={landingPageImage}
            width="100%"
            className="landingPageImage"
          />
          <div className="blend">
            <p className="header-text"> Odnajdź spokój </p>
          </div>
        </div>
      </>
      <div className="main-container">
        <h1 style={{ textAlign: "center" }}> Dlaczego zacząć uprawiać jogę?</h1>
        <section className="landing-page-single-section-right">
          <p className="landing-page-single-section-text">
            Joga poprawia wiele aspektów ludzkiego życia. Przede wszystkim, jak
            każda aktywność fizyczna, joga powoduje polepszenie naszej
            wydolności, możliwości kondycyjnych, a zwłaszcza wpływa pozytywnie
            na elastyczność, gibkość ciała, także jego siła. W miarę rozwoju w
            praktyce jogi stajemy się bardziej świadomi własnego ciała i jego
            możliwości. Ponadto efekty jogi to także zwiększenie świadomości
            własnego oddechu, bowiem rytm oddychania jest jedną z kluczowych
            zasad prawidłowego praktykowania tego rodzaju aktywności. Odpowiedni
            sposób oddychania podczas wykonywania różnego rodzaju pozycji w
            jodze może po pierwsze zdecydowanie ułatwić nam ułożenie ciała, ale
            i pozwala nam się lepiej zrelaksować. Tak, zrelaksować, bowiem
            kolejnym efektem „ubocznym” stosowania jogi jest uspokojenie,
            wyciszenie naszej psychiki.
          </p>
        </section>
        <h1 style={{ textAlign: "center" }}> Jakie są rodzaje jogi?</h1>
        <section className="section-with-button">
          <div className="first-section">
            <p>
              W jodze możemy wyróżnić kilka technik jogowania, dlatego każdy
              znajdzie coś dla siebie.
              <br />
              Wyróżniamy style mniej lub bardziej dynamiczne. Poniżej została
              przedstawiona lista kilku najpopularniejszych styli:
            </p>

            <ul style={{ margin: 0 }}>
              <li>Viniasa</li>
              <li>Ashatange</li>
              <li> Test</li>
            </ul>
          </div>
          <div className="second-section">
            {" "}
            <h3 style={{ marginBottom: "100px" }}>
              Chcesz dokładnie poznać czym różnią <br />
              się rodzaje jogi?
            </h3>{" "}
            <button> Pokaż mi!</button>
          </div>
          {/* <p className="landing-page-single-section-text">
            Wyróżnia się wiele rodzajów jogi, jeżeli chcesz je poznać to klinij
            w ten button! grid z obrazkami na dole może?
          </p>
          <p className="landing-page-single-section-text">
            Wyróżnia się wiele rodzajów jogi, jeżeli chcesz je poznać to klinij
            w ten button! grid z obrazkami na dole może?
          </p> */}
        </section>

        <h1 style={{ textAlign: "center" }}>
          {" "}
          Czy dzięki jodze można schudnąć?
        </h1>
        <section className="section-container">
          <p className="">
            Dzięki jodze możesz wymodelować swoją sylwetkę i pozbyć się zbędnych
            kilogramów. Regularna praktyka usprawnia, rozciąga i wzmacnia ciało,
            wpływa na poprawę funkcjonowania narządów wewnętrznych, a w
            konsekwencji usprawnia metabolizm. Joga pozwala na budowanie
            samoakceptacji, co ma szczególne znaczenie dla równowagi
            emocjonalnej i zachowania prawidłowych relacji z jedzeniem. Jogę
            można praktykować wszędzie, ale pierwsze kroki warto stawiać pod
            czujnym okiem doświadczonego nauczyciela – zapraszamy do naszego
            studia, gdzie w cudownej atmosferze zadbasz o swoją figurę i
            sprawność fizyczną oraz pozwolisz umysłowi na głęboki reset i
            relaks.
          </p>
        </section>

        <h1 style={{ textAlign: "center" }}>
          {" "}
          Joga jest dla młodych, ja się nie nadaję..
        </h1>
        <section className="landing-page-single-section-right">
          <p className="landing-page-single-section-text">
            Absolutnie nie masz racji! Płeć jest nieważna, ale również większego
            znaczenia nie ma wiek. Oczywiście im człowiek starszy, tym więcej
            wysiłku trzeba włożyć w precyzyjnie wykonanie poszczególnych
            pozycji, ale nie ma przeciwskazań, aby rozpocząć swoją przygodę z
            jogą na emeryturze. Badania naukowe dowodzą, że osoby decydujące się
            nawet na niewielką aktywność fizyczną w późnym wieku cieszą się
            zdecydowanie lepszym zdrowiem i nie cierpią z powodu tradycyjnych
            chorób wieku podeszłego. Głównie chodzi tutaj o dolegliwości
            związane z układem sercowo-naczyniowym, ale również znacznie obniża
            się ryzyko wystąpienia nowotworów. Osoby starsze powinny jednak
            skonsultować się z lekarzem i przede wszystkim zacząć ćwiczyć jogę
            pod okiem doświadczonego nauczyciela, który ma odpowiednią wiedzę z
            zakresu anatomii i fizjologii człowieka.
          </p>
        </section>
      </div>
    </main>
  );
};

export default LandingPage;
