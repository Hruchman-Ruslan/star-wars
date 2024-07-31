"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

import { IStarWars } from "@/types/star-wars";
import { getStarWars } from "@/actions/getStarWars";

import CardList from "./card/card-list";

export interface LoadMoreProps {
  initialData: IStarWars[];
}

export default function LoadMore({ initialData }: LoadMoreProps) {
  const { ref, inView } = useInView();
  const [data, setData] = useState<IStarWars[]>(initialData);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const loadMoreData = async () => {
      if (inView) {
        try {
          const res = await getStarWars(page);
          setData((prevData) => [...prevData, ...res]);
          setPage((prevPage) => prevPage + 1);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      }
    };

    loadMoreData();
  }, [inView, page]);

  return (
    <section className="p-6">
      <CardList card={data} />
      <div className="flex items-center justify-center" ref={ref}>
        <Image src="./spinner.svg" alt="spinner" width={56} height={56} />
      </div>
    </section>
  );
}
