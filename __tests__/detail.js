import { render } from "@testing-library/react";
import Index from "../pages";

describe("App", () => {
  it("강의 목록이 렌더링 되어야 한다", () => {
    const { getByTitle } = render(<Index />);

    const lectureList = getByTitle("lectureList");

    expect(lectureList).toBeInTheDocument();
  });
});
