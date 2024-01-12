import { Skeleton } from "@/components/ui/skeleton";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

export default function SkeletonLoader() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-full border-r">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-4 w-full mt-4" />
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-4 w-full mt-4" />
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-4 w-full mt-4" />
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-4 w-full mt-4" />
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-4 w-full mt-4" />
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-4 w-full mt-4" />
        <Skeleton className="h-4 w-full mt-2" />
      </div>

      {/* Main content */}
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <div className="h-16 border-b">
          <Skeleton className="h-4 w-64 mx-4 mt-6" />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4 p-4">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-[150px]" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[80%]" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-8 w-full rounded-md" />
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-[150px]" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[80%]" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-8 w-full rounded-md" />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
