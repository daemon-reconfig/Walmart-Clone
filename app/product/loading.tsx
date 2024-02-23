import { Skeleton } from "@/components/ui/skeleton"

function Loading() {
  return (
    <div className="p-10 w-full flex flex-col lg:flex-row items-center lg:items-start justify-center space-x-4 mx-auto space-y-4 19:space-y-8">
        <div className="flex spacex-4">
            <div className="hidden 1g:inline space-y-4"> 
                <Skeleton className="u-[100px] h-[108px) rounded-md" />
                <Skeleton className="w- [100px] h-[100px] rounded-ed" />
                <Skeleton className="w-[100px] h-[100px] rounded-md" />
            </div>
            <Skeleton className="inline lgihidden w-1200px) h-(200px) rounded-ed" />
            <Skeleton className="hidden tg:inline lg:w-[400px) 19:h-[300px] rounded-ed" />
        </div>
        <div className="w-[400px) h-1500px) sm:w-1520px) sm:h-[780px] rounded-nd space-y-2 border p-2 animate-pulse">
            <Skeleton className="w-1380px] h-[40px] smtw-[508px] rounded-ad" />
            <Skeleton className="w- [380px] h-[40px ) sm:w-[300px) rounded-ed" />
            <Skeleton className="w-[388px] h-(385px] sm:h-[650px] sm:w-[500px] rounded-md" />

        </div>
    </div>
  )
}

export default Loading;

