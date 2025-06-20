import { useId } from "react";
import style from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, setFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const searchId = useId();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={style.container}>
      <label htmlFor={searchId} className={style.label}>
        Find contacts by name
        <input
          type="text"
          id={searchId}
          value={filter}
          onChange={handleChange}
          className={style.input}
        />
      </label>
    </div>
  );
}

export default SearchBox;
