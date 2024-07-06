import { Skeleton } from "./ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="w-auto">
      <div className="h-96 flex flex-col justify-between">
        <div className="flex flex-col space-y-1.5 p-6">
          <Skeleton className="h-6 w-50 rounded-full" />
          <Skeleton className="h-4 w-20 rounded-full"></Skeleton>
        </div>
        <div className="p-6 pt-0">
          <Skeleton className="w-50 h-40 rounded-xl"></Skeleton>
        </div>
        <div className="flex items-center p-6 pt-0">
          <div className="flex items-center">
            <Skeleton className="w-[110px] h-[25px]"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function LoadingCards({ num }: { num?: number }) {
  const cards = [];
  if (!num) {
    return;
  }
  for (let i = 0; i < num; i++) {
    cards.push(<SkeletonCard key={i} />);
  }
  return (
    <div className="w-full grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cards}
    </div>
  );
}
