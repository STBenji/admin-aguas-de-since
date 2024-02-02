import { Card as CardN, Skeleton } from '@nextui-org/react'

export default function Loading() {
  return (
    <section className='grid h-screen place-content-center'>
      <h1>.</h1>
      <article className='grid gap-4 mt-6 md:grid-cols-3'>
        <CardN
          className='flex w-[32rem] h-[12rem] gap-4 bg-white border border-gray-500 cursor-pointer rounded-xl max-w-[22rem]'
          radius='lg'>
          <Skeleton className='rounded-lg'>
            <div className='h-24 rounded-lg bg-default-300'></div>
          </Skeleton>
          <section className='flex flex-col items-start w-full gap-2 text-xl min-w-[12rem] h-[8rem] '>
            <Skeleton className='line-clamp-2'></Skeleton>
            <Skeleton className='text-sm font-normal text-gray-400'></Skeleton>
            <Skeleton className='text-lg font-normal text-gray-400'></Skeleton>
          </section>
        </CardN>

        <CardN
          className='flex w-[32rem] h-[12rem] gap-4 bg-white border border-gray-500 cursor-pointer rounded-xl max-w-[22rem]'
          radius='lg'>
          <Skeleton className='rounded-lg'>
            <div className='h-24 rounded-lg bg-default-300'></div>
          </Skeleton>
          <section className='flex flex-col items-start w-full gap-2 text-xl min-w-[12rem] h-[8rem] '>
            <Skeleton className='line-clamp-2'></Skeleton>
            <Skeleton className='text-sm font-normal text-gray-400'></Skeleton>
            <Skeleton className='text-lg font-normal text-gray-400'></Skeleton>
          </section>
        </CardN>
        <CardN
          className='flex w-[32rem] h-[12rem] gap-4 bg-white border border-gray-500 cursor-pointer rounded-xl max-w-[22rem]'
          radius='lg'>
          <Skeleton className='rounded-lg'>
            <div className='h-24 rounded-lg bg-default-300'></div>
          </Skeleton>
          <section className='flex flex-col items-start w-full gap-2 text-xl min-w-[12rem] h-[8rem] '>
            <Skeleton className='line-clamp-2'></Skeleton>
            <Skeleton className='text-sm font-normal text-gray-400'></Skeleton>
            <Skeleton className='text-lg font-normal text-gray-400'></Skeleton>
          </section>
        </CardN>
        <CardN
          className='flex w-[32rem] h-[12rem] gap-4 bg-white border border-gray-500 cursor-pointer rounded-xl max-w-[22rem]'
          radius='lg'>
          <Skeleton className='rounded-lg'>
            <div className='h-24 rounded-lg bg-default-300'></div>
          </Skeleton>
          <section className='flex flex-col items-start w-full gap-2 text-xl min-w-[12rem] h-[8rem] '>
            <Skeleton className='line-clamp-2'></Skeleton>
            <Skeleton className='text-sm font-normal text-gray-400'></Skeleton>
            <Skeleton className='text-lg font-normal text-gray-400'></Skeleton>
          </section>
        </CardN>
        <CardN
          className='flex w-[32rem] h-[12rem] gap-4 bg-white border border-gray-500 cursor-pointer rounded-xl max-w-[22rem]'
          radius='lg'>
          <Skeleton className='rounded-lg'>
            <div className='h-24 rounded-lg bg-default-300'></div>
          </Skeleton>
          <section className='flex flex-col items-start w-full gap-2 text-xl min-w-[12rem] h-[8rem] '>
            <Skeleton className='line-clamp-2'></Skeleton>
            <Skeleton className='text-sm font-normal text-gray-400'></Skeleton>
            <Skeleton className='text-lg font-normal text-gray-400'></Skeleton>
          </section>
        </CardN>
        <CardN
          className='flex w-[32rem] h-[12rem] gap-4 bg-white border border-gray-500 cursor-pointer rounded-xl max-w-[22rem]'
          radius='lg'>
          <Skeleton className='rounded-lg'>
            <div className='h-24 rounded-lg bg-default-300'></div>
          </Skeleton>
          <section className='flex flex-col items-start w-full gap-2 text-xl min-w-[12rem] h-[8rem] '>
            <Skeleton className='line-clamp-2'></Skeleton>
            <Skeleton className='text-sm font-normal text-gray-400'></Skeleton>
            <Skeleton className='text-lg font-normal text-gray-400'></Skeleton>
          </section>
        </CardN>
      </article>
    </section>
  )
}
