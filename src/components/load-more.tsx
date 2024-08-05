"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

import { IStarWars } from "@/types/star-wars";
import { getStarWars } from "@/actions/getStarWars";

import CardList from "./card/card-list";

// Interface to loading more
export interface LoadMoreProps {
  initialData: IStarWars[];
}

// Component for loading more data on scroll
export default function LoadMore({ initialData }: LoadMoreProps) {
  const { ref, inView } = useInView();
  const [data, setData] = useState<IStarWars[]>(initialData);
  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMoreData = async () => {
      // Check if component is in view and loading is in progress
      if (inView && isLoading) {
        try {
          const res = await getStarWars(page);
          if (res.length === 0) {
            setIsLoading(false); // Set loading to false when no more data is available
          } else {
            setData((prevData) => [...prevData, ...res]); // Append new data to existing data
            setPage((prevPage) => prevPage + 1); // Increment the page number
          }
        } catch (error) {
          // Log error if data fetching fails
          console.error("Failed to fetch data:", error);
        }
      }
    };

    loadMoreData();
  }, [inView, page, isLoading]);

  return (
    <section className="p-6">
      <CardList card={data} />
      <div className="flex items-center justify-center" ref={ref}>
        {isLoading ? (
          // Show spinner while loading
          <Image src="./spinner.svg" alt="spinner" width={56} height={56} />
        ) : (
          // Show message when all data has been loaded
          <p className="font-semibold text-xl text-yellow-400 shadow-md">
            All data has been loaded.
          </p>
        )}
      </div>
    </section>
  );
}
