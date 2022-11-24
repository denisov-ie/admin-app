import {
  Button,
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "shared/components/Button";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumber } from "features/OrderPage/model/slices/paginationSlice";
import {
  getPageNumber,
  getPaginatedOrders,
} from "features/OrderPage/model/selectors";
import { clearSelection } from "features/OrderPage/model/slices/selectionSlice";
import styles from "./OrderTablePages.module.css";

function OrderTablePages() {
  const { pageCount } = useSelector(getPaginatedOrders);

  const dispatch = useDispatch();

  const pageNumber = useSelector(getPageNumber);

  const dots = {
    left: <span key="left">...</span>,
    right: <span key="right">...</span>,
  };

  const handleSelectPageClick = (index) => {
    dispatch(clearSelection());
    dispatch(setPageNumber({ pageNumber: index }));
  };

  const getPageButton = (index) => (
    <Button
      key={index}
      size={size.small}
      color={index === +pageNumber ? color.blue : color.blueReverse}
      onClick={() => handleSelectPageClick(index)}
    >
      {index + 1}
    </Button>
  );

  let resultPages = [];

  const userVisiblePageNumber = +pageNumber + 1;

  const leftBorderlinePageNumber = 3;

  const rightBorderlinePageNumber = pageCount - 2;

  const hasLeftDots = userVisiblePageNumber > leftBorderlinePageNumber;

  const hasRightDots = userVisiblePageNumber < rightBorderlinePageNumber;

  const hasBorderlinePage =
    userVisiblePageNumber === leftBorderlinePageNumber ||
    userVisiblePageNumber === rightBorderlinePageNumber;

  if (!hasLeftDots && !hasRightDots) {
    resultPages = [...Array(pageCount).keys()].map((index) =>
      getPageButton(index)
    );
  }

  if (!hasLeftDots && hasRightDots) {
    resultPages = [...Array(leftBorderlinePageNumber).keys()].map((index) =>
      getPageButton(index)
    );

    if (hasBorderlinePage) {
      resultPages.push(getPageButton(leftBorderlinePageNumber));
    }

    resultPages.push(dots.right);
    resultPages.push(getPageButton(pageCount - 1));
  }

  if (hasLeftDots && hasRightDots) {
    resultPages.push(getPageButton(0));
    resultPages.push(dots.left);

    resultPages = resultPages.concat(
      [pageNumber - 1, pageNumber, pageNumber + 1].map((index) =>
        getPageButton(index)
      )
    );

    resultPages.push(dots.right);
    resultPages.push(getPageButton(pageCount - 1));
  }

  if (hasLeftDots && !hasRightDots) {
    resultPages.push(getPageButton(0));
    resultPages.push(dots.left);

    if (hasBorderlinePage) {
      resultPages.push(getPageButton(rightBorderlinePageNumber - 2));
    }

    resultPages = resultPages.concat(
      [pageCount - 3, pageCount - 2, pageCount - 1].map((index) =>
        getPageButton(index)
      )
    );
  }

  return <div className={styles._}>{resultPages}</div>;
}

export default OrderTablePages;
