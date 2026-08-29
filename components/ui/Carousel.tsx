"use client";

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export interface CarouselHandle {
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
}

interface CarouselProps {
  children: React.ReactNode[];
  /** Tailwind flex-basis classes applied to each slide, e.g. "flex-[0_0_100%] sm:flex-[0_0_50%]". */
  slideClassName?: string;
  loop?: boolean;
  autoplayDelay?: number;
  center?: boolean;
  containerClassName?: string;
  viewportClassName?: string;
  onSlideChange?: (index: number) => void;
  onScrollSnapsChange?: (count: number) => void;
}

const Carousel = forwardRef<CarouselHandle, CarouselProps>(
  (
    {
      children,
      slideClassName = "flex-[0_0_100%]",
      loop = true,
      autoplayDelay,
      center = false,
      containerClassName = "",
      viewportClassName = "",
      onSlideChange,
      onScrollSnapsChange,
    },
    ref
  ) => {
    const plugins = autoplayDelay
      ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]
      : [];

    const [emblaRef, emblaApi] = useEmblaCarousel(
      { loop, align: center ? "center" : "start" },
      plugins
    );

    const [, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
      if (!emblaApi) return;
      const index = emblaApi.selectedScrollSnap();
      setSelectedIndex(index);
      onSlideChange?.(index);
    }, [emblaApi, onSlideChange]);

    useEffect(() => {
      if (!emblaApi) return;
      onSelect();
      onScrollSnapsChange?.(emblaApi.scrollSnapList().length);
      emblaApi.on("select", onSelect);
      emblaApi.on("reInit", onSelect);
      emblaApi.on("reInit", () =>
        onScrollSnapsChange?.(emblaApi.scrollSnapList().length)
      );
      return () => {
        emblaApi.off("select", onSelect);
        emblaApi.off("reInit", onSelect);
      };
    }, [emblaApi, onSelect, onScrollSnapsChange]);

    useImperativeHandle(ref, () => ({
      scrollPrev: () => emblaApi?.scrollPrev(),
      scrollNext: () => emblaApi?.scrollNext(),
      scrollTo: (index: number) => emblaApi?.scrollTo(index),
    }));

    return (
      <div className={`overflow-hidden ${viewportClassName}`} ref={emblaRef}>
        <div className={`flex ${containerClassName}`}>
          {React.Children.map(children, (child, index) => (
            <div className={slideClassName} key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

export default Carousel;
