import { MagnifyingGlass, MapPin } from '@phosphor-icons/react';
import { Separator } from './ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from './ui/sheet';

export default function Filter() {
  const cities = [
    'Helsinki, Finland',
    'Turku, Finland',
    'Oulu, Finland',
    'Vaasa, Finland',
  ];
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex items-center gap-4 px-4 py-4 shadow-md rounded-2xl cursor-pointer">
            <p className=" text-[#333333] text-sm ">Helsinki, Finland</p>
            <Separator orientation="vertical" className=" bg-[#f2f2f2f1] " />
            <p className="text-[#BDBDBD]">Add guests</p>
            <Separator orientation="vertical" className=" bg-[#F2F2F2] " />
            <MagnifyingGlass size={24} color="#EB5757" weight="regular" />
          </div>
        </SheetTrigger>
        <SheetContent position={'top'} size={'content'}>
          <div className=" max-w-7xl mx-auto">
            <SheetHeader>
              <SheetDescription>
                <div className="grid grid-cols-3 gap-4 px-2 py-2 shadow-md rounded-xl w-full mb-8 max-md:grid-cols-1 max-md:gap-2 justify-items-start">
                  <div className=" text-[#333333] text-sm max-md:pl-4">
                    <p className="uppercase text-[10px] font-extrabold tracking-wider text-left">
                      location
                    </p>
                    <p>Helsinki, Finland</p>
                  </div>
                  <Separator className="md:hidden" />
                  <div className="text-[#BDBDBD] text-sm max-md:pl-4">
                    <p className="uppercase text-[10px] text-[#333333] font-extrabold tracking-wider text-left">
                      guests
                    </p>
                    Add guests
                  </div>
                  <SheetClose
                    asChild
                    className="justify-self-center max-md:hidden"
                  >
                    <button
                      type="submit"
                      className=" flex items-center gap-2 text-white bg-[#EB5757] rounded-lg py-2 px-3 text-sm font-semibold "
                    >
                      <MagnifyingGlass size={18} weight="bold" />
                      Search
                    </button>
                  </SheetClose>
                </div>
              </SheetDescription>
            </SheetHeader>
            <div className="grid grid-cols-3 max-md:grid-cols-1">
              <div className="flex flex-col gap-6">
                {cities.map((city) => (
                  <button className="text-[#4F4F4F] flex gap-2 items-center text-sm cursor-pointer">
                    <MapPin size={18} weight="fill" />
                    {city}
                  </button>
                ))}
              </div>
              <div className="flex-col gap-6 hidden">
                <div>
                  <p className="text-sm text-[#BDBDBD] mb-3">
                    <p className="font-bold  text-[#333333]">Adult</p>
                    Ages 13 or above
                  </p>
                  <div className="flex gap-4">
                    <button className=" border-[1px] border-[#828282] rounded-lg w-6 h-6 flex items-center justify-center">
                      +
                    </button>
                    {0}
                    <button className=" border-[1px] border-[#828282] rounded-lg w-6 h-6 flex items-center justify-center">
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#BDBDBD] mb-3">
                    <p className="font-bold  text-[#333333]">Children</p>
                    Ages 2-12
                  </p>
                  <div className="flex gap-4">
                    <button className=" border-[1px] border-[#828282] rounded-lg w-6 h-6 flex items-center justify-center">
                      +
                    </button>
                    {0}
                    <button className=" border-[1px] border-[#828282] rounded-lg w-6 h-6 flex items-center justify-center">
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild className="md:hidden">
              <button
                type="submit"
                className=" flex items-center gap-2 text-white bg-[#EB5757] rounded-lg py-2 px-3 text-sm font-semibold"
              >
                <MagnifyingGlass size={18} weight="bold" />
                Search
              </button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
