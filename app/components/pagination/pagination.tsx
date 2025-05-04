import { ChangeEvent } from "react";
import Styles from "./styles";
import {
  isPageGreaterThanTheFirstPage,
  isPageGreaterThanTheLastPage,
  isPageSmallerThanTheFirstPage,
  isPageSmallerThanTheLastPage,
} from "../../infrastructure/specifications/user_interface_specifications";
import { FIRST_PAGE } from "../../constants/user_interface_constants";

function Pagination(props: {
  currentPage: number;
  numberOfPages: number;
  onPreviousButtonClick: (updatedCurrentPage: number) => void;
  onNextButtonClick: (updatedCurrentPage: number) => void;
  onPagePaginationInputChange: (updatedCurrentPage: number) => void;
}) {
  const {
    currentPage,
    numberOfPages,
    onPreviousButtonClick,
    onNextButtonClick,
    onPagePaginationInputChange,
  } = props;

  return (
    <Styles>
      <div className="navigation_buttons">
        {isPageGreaterThanTheFirstPage(currentPage) ? (
          <button
            data-testid="pagination_previous_button"
            onClick={() => {
              onPreviousButtonClick(currentPage - 1);
            }}>
            {"<"} Previous
          </button>
        ) : (
          <></>
        )}
        {isPageSmallerThanTheLastPage(currentPage, numberOfPages) ? (
          <button
            data-testid="pagination_next_button"
            onClick={() => {
              onNextButtonClick(currentPage + 1);
            }}>
            Next {">"}
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="page_selection">
        <input
          data-testid="page_selector"
          type="number"
          min="1"
          value={currentPage}
          max={numberOfPages}
          className="page_selector"
          onChange={(event: ChangeEvent) => {
            let updatedCurrentPage = Number(
              (event.target as HTMLInputElement).value,
            );

            if (isPageSmallerThanTheFirstPage(updatedCurrentPage))
              updatedCurrentPage = FIRST_PAGE;
            if (isPageGreaterThanTheLastPage(updatedCurrentPage, numberOfPages))
              updatedCurrentPage = numberOfPages;

            onPagePaginationInputChange(updatedCurrentPage);
          }}
        />
        <h4 className="number_of_pages_label">of {numberOfPages}</h4>
      </div>
    </Styles>
  );
}

export default Pagination;
