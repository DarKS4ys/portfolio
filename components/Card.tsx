import type { ReactNode } from 'react';

export function Card({
  heading,
  description,
  icon,
}: {
  heading: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="hover:shadow-sm dark:bg-white/10 dark:hover:bg-white/20 bg-gray-50 hover:bg-gray-100 transition w-full sm:max-w-[19rem] max-w-[14rem] p-6 sm:p-8 sm:px-7 pt-6 borderBlack rounded-lg overflow-hidden relative min-h-[19rem]">
      <div className="flex justify-center items-center text-center mb-4">
        {icon}
      </div>
      <hr className="mt-2" />
      <div className="flex flex-col items-center text-center mt-4 justify-center">
        <h3 className="text-base sm:text-xl font-semibold mb-2">{heading}</h3>
        <p className="text-sm sm:text-base leading-4 font-light">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Card2({
  heading,
  description,
  icon,
}: {
  heading: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="hover:shadow-sm dark:bg-white/10 dark:hover:bg-white/20 bg-gray-50 hover:bg-gray-100 transition w-full md:max-w-[19rem] max-w-[28.25rem] p-6 md:p-8 md:px-7 pt-6 border border-black/10 rounded-lg overflow-hidden relative md:min-h-[19rem] min-h-[13.3rem] ">
      <div className="flex justify-center items-center text-center mb-4">
        {icon}
      </div>
      <hr className="mt-2" />
      <div className="flex flex-col items-center text-center mt-4 justify-center">
        <h3 className="text-base sm:text-xl font-semibold mb-2">{heading}</h3>
        <p className="text-sm sm:text-base leading-4 font-light">
          {description}
        </p>
      </div>
    </div>
  );
}

{
  /*         <div className='bg-gray-50 w-full sm:max-w-[18.5rem] mb-8 pt-20 p-6 border border-black/10 rounded-lg overflow-hidden relative'>
            {icon}
            <hr className="mt-2"/>
            <div className='flex flex-col items-start mt-4 justify-start'>
                <h3 className='text-xl font-semibold mb-2' >{heading}</h3>
                <p className='text-sm leading-4 font-light'>{description}</p>
            </div>
        </div> */
}

{
  /*         <div className='bg-gray-100 max-w-[21.5rem] mb-8 p-6 border border-black/5 rounded-lg overflow-hidden relative'>
            <div className='relative w-full h-40'>
                <Image
                alt='project'
                src={'/corpcomment.png'}
                quality={95}
                width={1143}
                height={902}
                className="h-36 absolute hidden sm:block top-0 right-0 rounded"
                />
            </div>
            <hr/>
            <div className='flex flex-col items-start mt-4 justify-start'>
                <h3 className='text-xl font-bold mb-2' >UI & UX Design</h3>
                <p className='text-sm leading-4 font-light'>Creating user interfaces that are easy to understand, perform tasks efficiently, and provide a pleasant experience for the user.</p>
            </div>
        </div> */
}
