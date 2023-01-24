import { render } from "@testing-library/react";
import LectureItem from "../components/lecture/LectureItem";

describe("강의 아이템은", () => {
  it("썸네일을 가지고 있어야 한다", () => {
    const { getByAltText } = render(<LectureItem />);

    const Thumb = getByAltText("초격차 패키지");

    expect(Thumb).toBeInTheDocument();
  });

  it("뱃지를 가지고 있어야 한다", () => {
    const { getByText } = render(<LectureItem />);

    const Badge = getByText("평생소장");

    expect(Badge).toBeInTheDocument();
  });

  it("강의 제목을 렌더링 할 수 있어야 한다", () => {
    const { getByRole } = render(<LectureItem />);

    const Title = getByRole("heading", {
      name: "초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영",
    });

    expect(Title).toBeInTheDocument();
  });

  it("강의 설명을 렌더링 할 수 있어야 한다", () => {
    const { getByText } = render(<LectureItem />);

    const Description = getByText(
      "실무에서 자주 사용하는 기능을 담은 21개 프로젝트로 상상을 현실로 구현하세요"
    );

    expect(Description).toBeInTheDocument();
  });
});
