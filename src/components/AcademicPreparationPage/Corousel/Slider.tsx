import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../../ui/carousel";
  
  function Slider() {
    return (
      <Carousel className="w-screen bg-[#393374] pt-[6rem]">
        <CarouselContent >
          <CarouselItem>
            <div className="w-full h-full">
              <img
                src="1.png"
                alt="Image"
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full">
              <img
                src="2.png"
                alt="Image"
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full">
              <img
                src="3.png"
                alt="Image"
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full">
              <img
                src="4.png"
                alt="Image"
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full">
              <img
                src="5.png"
                alt="Image"
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full h-full">
              <img
                src="6.png"
                alt="Image"
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="md:left-2" />
        <CarouselNext className="md:right-2" />
      </Carousel>
    );
  }
  
  export default Slider;