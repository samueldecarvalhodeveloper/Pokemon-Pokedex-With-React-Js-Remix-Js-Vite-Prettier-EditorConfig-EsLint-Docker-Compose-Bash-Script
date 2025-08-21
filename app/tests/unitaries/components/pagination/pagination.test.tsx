import { describe, test, expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import {
  FIRST_PAGE,
  PAGINATED_POKEMON_MATRIX,
} from "../../../../constants/user_interface_constants";
import Pagination from "../../../../components/pagination/pagination";

describe("Test Component Pagination", () => {
  test("Test If Next Button Is Shown On Page Being Smaller Than Pages Limit And Dispatches On Click Event", () => {
    let currentPage: number = FIRST_PAGE;

    const { getByRole } = render(
      <Pagination
        currentPage={FIRST_PAGE}
        numberOfPages={PAGINATED_POKEMON_MATRIX}
        onPreviousButtonClick={() => {}}
        onNextButtonClick={(updatedCurrentPage: number) => {
          currentPage = updatedCurrentPage;
        }}
        onPagePaginationInputChange={() => {}}
      />,
    );

    fireEvent.click(getByRole("button"));

    expect(currentPage).toEqual(FIRST_PAGE + 1);
  });

  test("Test If Previous Button Is Shown On Page Being Greater Than First Page And Dispatches On Click Event", () => {
    let currentPage: number = PAGINATED_POKEMON_MATRIX;

    const { getByRole } = render(
      <Pagination
        currentPage={PAGINATED_POKEMON_MATRIX}
        numberOfPages={PAGINATED_POKEMON_MATRIX}
        onPreviousButtonClick={(updatedCurrentPage: number) => {
          currentPage = updatedCurrentPage;
        }}
        onNextButtonClick={() => {}}
        onPagePaginationInputChange={() => {}}
      />,
    );

    fireEvent.click(getByRole("button"));

    expect(currentPage).toEqual(PAGINATED_POKEMON_MATRIX - 1);
  });

  test("Test If Page Pagination Input Dispatches On Change Event", () => {
    let currentPage: number = PAGINATED_POKEMON_MATRIX;

    const { container } = render(
      <Pagination
        currentPage={PAGINATED_POKEMON_MATRIX}
        numberOfPages={PAGINATED_POKEMON_MATRIX}
        onPreviousButtonClick={() => {}}
        onNextButtonClick={() => {}}
        onPagePaginationInputChange={(updatedCurrentPage: number) => {
          currentPage = updatedCurrentPage;
        }}
      />,
    );

    fireEvent.change(container.querySelector("input") as HTMLInputElement, {
      target: { value: FIRST_PAGE + 1 },
    });

    expect(currentPage).toEqual(FIRST_PAGE + 1);
  });

  test("Test If Page Pagination Input Places First Page Value If Value Is Smaller Than First Page", () => {
    let currentPage: number = PAGINATED_POKEMON_MATRIX;

    const { container } = render(
      <Pagination
        currentPage={PAGINATED_POKEMON_MATRIX}
        numberOfPages={PAGINATED_POKEMON_MATRIX}
        onPreviousButtonClick={() => {}}
        onNextButtonClick={() => {}}
        onPagePaginationInputChange={(updatedCurrentPage: number) => {
          currentPage = updatedCurrentPage;
        }}
      />,
    );

    fireEvent.change(container.querySelector("input") as HTMLInputElement, {
      target: { value: FIRST_PAGE - 1 },
    });

    expect(currentPage).toEqual(FIRST_PAGE);
  });

  test("Test If Page Pagination Input Places Last Page Value If Value Is Greater Than Last Page", () => {
    let currentPage: number = PAGINATED_POKEMON_MATRIX;

    const { container } = render(
      <Pagination
        currentPage={PAGINATED_POKEMON_MATRIX}
        numberOfPages={PAGINATED_POKEMON_MATRIX}
        onPreviousButtonClick={() => {}}
        onNextButtonClick={() => {}}
        onPagePaginationInputChange={(updatedCurrentPage: number) => {
          currentPage = updatedCurrentPage;
        }}
      />,
    );

    fireEvent.change(container.querySelector("input") as HTMLInputElement, {
      target: { value: PAGINATED_POKEMON_MATRIX + 1 },
    });

    expect(currentPage).toEqual(PAGINATED_POKEMON_MATRIX);
  });
});
