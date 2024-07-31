import Image from "next/image";

export interface LoadMoreProps {}

export default function LoadMore({}: LoadMoreProps) {
  return (
    <section className="p-6">
      <div className="flex items-center justify-center">
        <Image src="./spinner.svg" alt="spinner" width={56} height={56} />
      </div>
    </section>
  );
}
