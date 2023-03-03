import "./App.scss";

function App() {
  return (
    <>
      <header>
        <div className="three-includes">
          <p>Coffee house</p>
          <p>Our coffee</p>
          <p>For your pleasure</p>
        </div>
        <center>
          <div className="text-center">
            <h1 className="our">Our Coffee</h1>
          </div>
        </center>
      </header>
      <section>
        <center>
          <div className="container">
            <img className="girl" src="/icons/girl.svg" alt="" />
            <div className="text">
              <h2>About our beans</h2>
              <img className="beans" src="/icons/Beans.svg" alt="" />
              <p className="extremely">
                Extremity sweetness difficult behaviour he of. On disposal of as
                landlord horrible. Afraid at highly months do things on at.
                Situation recommend objection do intention so questions. As
                greatly removed calling pleased improve an. Last ask him cold
                feel met spot shy want. Children me laughing we prospect
                answered followed. At it went is song that held help face.
              </p>
            </div>
          </div>
          <div className="center-line">
            <img src="/icons/Line.svg" alt="" />
          </div>
        </center>

        <center>
          <div className="all_inclusive">
            <div className="inputs_name">
              <p className="looking">Lookiing for</p>
              <div className="inps">
                <input
                  className="typing_here"
                  type="text"
                  placeholder="start typing here..."
                />
              </div>
              <div className="left_filters">
                <p className="filter">Or filter</p>

                <button className="brazil">
                  <p className="item_name">Brazil</p>
                </button>
                <button className="brazil">
                  <p className="item_name">Kenya</p>
                </button>
                <button className="brazil">
                  <p className="item_name">Columbia</p>
                </button>
              </div>
            </div>

            <div className="grids">
              <div className="universal">
                <img className="coffee_img" src="/img/71qBQnpQFYL.svg" alt="" />
                <div className="centr">
                  <p className="aromastico">AROMISTICO Coffee 1 kg</p>
                  <div className="flex-end">
                    <p className="br">Brazil</p>
                    <p className="item_price">6.99$</p>
                  </div>
                </div>
              </div>

              <div className="universal">
                <img className="coffee_img" src="/img/71qBQnpQFYL.svg" alt="" />
                <div className="centr">
                  <p className="aromastico">AROMISTICO Coffee 1 kg</p>
                  <div className="flex-end">
                    <p className="br">Brazil</p>
                    <p className="item_price">6.99$</p>
                  </div>
                </div>
              </div>

              <div className="universal">
                <img className="coffee_img" src="/img/71qBQnpQFYL.svg" alt="" />
                <div className="centr">
                  <p className="aromastico">AROMISTICO Coffee 1 kg</p>
                  <div className="flex-end">
                    <p className="br">Brazil</p>
                    <p className="item_price">6.99$</p>
                  </div>
                </div>
              </div>

              <div className="universal">
                <img className="coffee_img" src="/img/71qBQnpQFYL.svg" alt="" />
                <div className="centr">
                  <p className="aromastico">AROMISTICO Coffee 1 kg</p>
                  <div className="flex-end">
                    <p className="br">Brazil</p>
                    <p className="item_price">6.99$</p>
                  </div>
                </div>
              </div>

              <div className="universal">
                <img className="coffee_img" src="/img/71qBQnpQFYL.svg" alt="" />
                <div className="centr">
                  <p className="aromastico">AROMISTICO Coffee 1 kg</p>
                  <div className="flex-end">
                    <p className="br">Brazil</p>
                    <p className="item_price">6.99$</p>
                  </div>
                </div>
              </div>

              <div className="universal">
                <img className="coffee_img" src="/img/71qBQnpQFYL.svg" alt="" />
                <div className="centr">
                  <p className="aromastico">AROMISTICO Coffee 1 kg</p>
                  <div className="flex-end">
                    <p className="br">Brazil</p>
                    <p className="item_price">6.99$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </center>

        <footer>
          <center>
            <div className="center-inclusive-main">
              <div className="flexxing">
                <img src="/icons/small_beans.svg" alt="" />
                <div className="mains">
                  <p className="coffee_house">Coffee house</p>
                  <p className="coffee_house">Our coffee</p>
                  <p className="coffee_house">For your pleasure</p>
                </div>
              </div>

              <div className="beans_img">
                <img src="/icons/Beans.svg" alt="" />
              </div>
              
            </div>
          </center>
        </footer>
      </section>
    </>
  );
}

export default App;
