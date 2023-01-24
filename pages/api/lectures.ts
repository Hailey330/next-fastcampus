// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const mockCategory = {
  id: 0,
  name: "프로그래밍",
};

const mockTags = [
  {
    id: 0,
    title: "평생소장",
  },
  {
    id: 1,
    title: "AWS",
  },
  {
    id: 2,
    title: "DevOps",
  },
];

const lecturesData = {
  lectureList: [
    {
      id: 0,
      category: mockCategory,
      title: "초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영",
      tags: mockTags,
      description:
        "실무에서 자주 사용하는 기능을 담은 21개 프로젝트로 상상을 현실로 구현하세요",
      thumb: "/thumb.jpg", // s3, cloud storage, cdn
      isHot: true,
      isNew: true,
    },
    {
      id: 1,
      category: mockCategory,
      title: "초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영",
      tags: mockTags,
      description:
        "실무에서 자주 사용하는 기능을 담은 21개 프로젝트로 상상을 현실로 구현하세요",
      thumb: "/thumb.jpg", // s3, cloud storage, cdn
      isHot: true,
      isNew: true,
    },
    {
      id: 2,
      category: mockCategory,
      title: "초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영",
      tags: mockTags,
      description:
        "실무에서 자주 사용하는 기능을 담은 21개 프로젝트로 상상을 현실로 구현하세요",
      thumb: "/thumb.jpg", // s3, cloud storage, cdn
      isHot: true,
      isNew: true,
    },
  ],
};

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(lecturesData);
}
