import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CatsState, RootState } from "../../types";
import { getCatsStart } from "../../redux/catState";

const IMG_DEFAULT =
  "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg";

const CatsList = (): JSX.Element => {
  const dispatch = useDispatch();
  const state = useSelector<RootState, CatsState>((state) => state.cats);

  useEffect(() => {
    dispatch(getCatsStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="Gallery">
        {state.isLoading && <h4>Loading...</h4>}
        {state.error && <h4>{state.error}</h4>}
        {state.cats.map((cat) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img
                src={cat?.image?.url || IMG_DEFAULT}
                alt={cat.name}
                width={200}
                height={200}
              />
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>{cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button>view more cats</button>
    </>
  );
};

export default CatsList;
