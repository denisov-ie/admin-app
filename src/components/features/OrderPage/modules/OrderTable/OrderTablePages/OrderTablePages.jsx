import {
  Button,
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "components/shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumber } from "components/features/OrderPage/model/slices/paginationSlice";
import {
  getPageNumber,
  getPaginatedOrders,
} from "components/features/OrderPage/model/selectors";
import styles from "./OrderTablePages.module.css";

function OrderTablePages() {
  const { pageCount } = useSelector(getPaginatedOrders);

  const dispatch = useDispatch();

  const handleSelectPageClick = (pageNumber) => {
    dispatch(setPageNumber({ pageNumber }));
  };

  const pageNumber = useSelector(getPageNumber);

  const dots = [<span key="start">...</span>, <span key="end">...</span>];

  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(
      <Button
        key={i}
        size={size.small}
        color={i === +pageNumber ? color.blue : color.blueReverse}
        onClick={() => handleSelectPageClick(i)}
      >
        {i + 1}
      </Button>
    );
  }

  const resultPages = [];

  if (pageCount <= 4) {
    for (let i = 0; i < 4; i++) {
      resultPages.push(pages[i]);
    }
  } else {
    resultPages.push(pages[0]);
    if (pageNumber >= 3) {
      resultPages.push(dots[0]);
    }
    if (pageNumber < 2) {
      resultPages.push(pages[1]);
      resultPages.push(pages[2]);
    } else if (pageNumber === pageCount - 1) {
      resultPages.push(pages[pageNumber - 2]);
      resultPages.push(pages[pageNumber - 1]);
      resultPages.push(pages[pageNumber]);
    } else {
      resultPages.push(pages[pageNumber - 1]);
      resultPages.push(pages[pageNumber]);
      resultPages.push(pages[pageNumber + 1]);
    }
    if (pageCount - pageNumber <= 3) {
      resultPages.push(pages[pageNumber + 2]);
    }
    if (pageNumber < pages.length - 3) {
      resultPages.push(dots[1]);
      resultPages.push(pages[pages.length - 1]);
    }
  }

  return <div className={styles._}>{resultPages}</div>;
}

export default OrderTablePages;
