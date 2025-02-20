import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TopicCreator from "@/components/TopicCreator";
import { redis } from "@/lib/redis";
import { Star } from "lucide-react";
import { createTopic } from "./actions";
import { useMutation } from "@tanstack/react-query"
import { serverHooks } from "next/dist/server/app-render/entry-base";

export default async function Home() {

  const servedRequest=await redis.get("")

  

  return (
    <section className="min-h-screen bg-grid-zinc-50">
      <MaxWidthWrapper className="relative pb-24 pt-10 sm:pb-32 lg:pt-24 xl:pt-32 lg:pb-52">
        <div className="hidden lg:block absolute inset-0 top-8">
          {/* circle */}
        </div>
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center flex flex-col items-center">
            <h1 className="relative leading-sung w-fit tracking-tight text-balance mt-16 font-bold text-gray-900 text-5xl md:text-6xl">
              What do you{" "}
              <span className="whitespace-nowrap">
                th
                <span className="relative">
                  i
                  <span className="absolute inset-x-0 -top-2 -translate-x-3">
                    <Icons.brain className="h-7 w-7 md:h-8 md:w-8"></Icons.brain>
                  </span>
                </span>
                nk{" "}
              </span>
              about...
            </h1>
            <TopicCreator />
            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="flex flex-col justify-between items-center sm:items-start lg:items-center">
                <div className="flex gap-0.5">
                  <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
                  <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
                  <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
                  <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
                  <Star className="h-4 w-4 text-green-600 fill-green-600"></Star>
                </div>
                <p>
                  <span className="font-semibold">{Math.ceil(Number(servedRequest))}</span> served request
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
