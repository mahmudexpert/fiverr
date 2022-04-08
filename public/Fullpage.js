import Homepage from "./Homepage";
import HardBlue from "./HardBlue";

import Technology from "./Technology";
import HardMoney from "./HardMoney";
import Token from "./Token";

import ReactFullpage from "@fullpage/react-fullpage";

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed={1000}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Homepage />
          </div>
          <div className="section">
            <HardBlue />
          </div>
          <div className="section">
            <HardMoney />
          </div>
          <div className="section">
            <Technology />
          </div>
          <div className="section">
            <Token />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
