"use client";
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toESMCache_node;
var __toESMCache_esm;
var __toESM = (mod, isNodeMode, target) => {
  var canCache = mod != null && typeof mod === "object";
  if (canCache) {
    var cache = isNodeMode ? __toESMCache_node ??= new WeakMap : __toESMCache_esm ??= new WeakMap;
    var cached = cache.get(mod);
    if (cached)
      return cached;
  }
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  if (mod && typeof mod === "object" || typeof mod === "function") {
    for (let key of __getOwnPropNames(mod))
      if (!__hasOwnProp.call(to, key))
        __defProp(to, key, {
          get: __accessProp.bind(mod, key),
          enumerable: true
        });
  }
  if (canCache)
    cache.set(mod, to);
  return to;
};
var __toCommonJS = (from) => {
  var entry = (__moduleCache ??= new WeakMap).get(from), desc;
  if (entry)
    return entry;
  entry = __defProp({}, "__esModule", { value: true });
  if (from && typeof from === "object" || typeof from === "function") {
    for (var key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(entry, key))
        __defProp(entry, key, {
          get: __accessProp.bind(from, key),
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  __moduleCache.set(from, entry);
  return entry;
};
var __moduleCache;
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};

// packages/ui/src/index.ts
var exports_src = {};
__export(exports_src, {
  AppleCarouselContent: () => AppleCarouselContent,
  AppleCarouselControls: () => AppleCarouselControls,
  AppleCarouselItem: () => AppleCarouselItem,
  AppleCarouselPlayButton: () => AppleCarouselPlayButton,
  AppleCarouselRoot: () => AppleCarouselRoot,
  AppleCarouselTab: () => AppleCarouselTab,
  AppleCarouselTabList: () => AppleCarouselTabList,
  AppleHelloEffectEnglish: () => AppleHelloEffectEnglish,
  AppleHelloEffectHindi: () => AppleHelloEffectHindi,
  AppleHelloEffectSpanish: () => AppleHelloEffectSpanish,
  AppleHelloEffectVietnamese: () => AppleHelloEffectVietnamese,
  BrandAssetsMenu: () => BrandAssetsMenu,
  CarbonAds: () => CarbonAds,
  ChevronsUpDownIcon: () => ChevronsUpDownIcon,
  CodeBlockCommand: () => CodeBlockCommand,
  ConsentManager: () => ConsentManager,
  ContributionGraph: () => ContributionGraph,
  ContributionGraphBlock: () => ContributionGraphBlock,
  ContributionGraphCalendar: () => ContributionGraphCalendar,
  ContributionGraphFooter: () => ContributionGraphFooter,
  ContributionGraphLegend: () => ContributionGraphLegend,
  ContributionGraphTotalCount: () => ContributionGraphTotalCount,
  CopyButton: () => CopyButton,
  CopyStateIcon: () => CopyStateIcon,
  DotGridSpotlight: () => DotGridSpotlight,
  ElasticSlider: () => ElasticSlider,
  ExperienceItem: () => ExperienceItem,
  ExperiencePositionItem: () => ExperiencePositionItem,
  FluidGradientText: () => FluidGradientText,
  GitHubContributionList: () => GitHubContributionList,
  GitHubContributions: () => GitHubContributions,
  GitHubContributionsFallback: () => GitHubContributionsFallback,
  GitHubRepoList: () => GitHubRepoList,
  GitHubStars: () => GitHubStars,
  GlowCard: () => GlowCard,
  GlowCardGrid: () => GlowCardGrid,
  IconSwap: () => IconSwap,
  IconSwapItem: () => IconSwapItem,
  JpgCardHolder: () => JpgCardHolder,
  LineNav: () => LineNav,
  LogosCarousel: () => LogosCarousel,
  LogosFlip: () => LogosFlip,
  MiddleTruncation: () => MiddleTruncation,
  MobiusLoopIcon: () => MobiusLoopIcon,
  ScrollFadeEffect: () => ScrollFadeEffect,
  ShareMenu: () => ShareMenu,
  ShimmeringText: () => ShimmeringText,
  SlideToUnlock: () => SlideToUnlock,
  SlideToUnlockHandle: () => SlideToUnlockHandle,
  SlideToUnlockText: () => SlideToUnlockText,
  SlideToUnlockTrack: () => SlideToUnlockTrack,
  SpinningCircularText: () => SpinningCircularText,
  SpotlightLogo: () => SpotlightLogo,
  StatusButton: () => StatusButton,
  SwipeAction: () => SwipeAction2,
  SwipeActions: () => SwipeActions2,
  SwipeContent: () => SwipeContent2,
  SwipeItem: () => SwipeItem2,
  SwipeRoot: () => SwipeRoot2,
  TOCMinimap: () => TOCMinimap,
  TWEMOJI_CDN_URL: () => TWEMOJI_CDN_URL,
  Testimonial: () => Testimonial,
  Testimonial2: () => Testimonial2,
  TestimonialAuthor: () => TestimonialAuthor,
  TestimonialAuthorName: () => TestimonialAuthorName,
  TestimonialAuthorTagline: () => TestimonialAuthorTagline,
  TestimonialAvatar: () => TestimonialAvatar,
  TestimonialAvatarImg: () => TestimonialAvatarImg,
  TestimonialAvatarRing: () => TestimonialAvatarRing,
  TestimonialQuote: () => TestimonialQuote,
  TestimonialSpotlight: () => TestimonialSpotlight,
  TestimonialVerifiedBadge: () => TestimonialVerifiedBadge,
  TextFlip: () => TextFlip,
  ThemeSwitcher: () => ThemeSwitcher,
  TimescaleAge: () => TimescaleAge,
  TimescaleContent: () => TimescaleContent,
  TimescaleHeader: () => TimescaleHeader,
  TimescaleIntroScroll: () => TimescaleIntroScroll,
  TimescaleItem: () => TimescaleItem,
  TimescaleRail: () => TimescaleRail,
  TimescaleRoot: () => TimescaleRoot,
  TimescaleTick: () => TimescaleTick,
  TimescaleTrack: () => TimescaleTrack,
  TimescaleViewport: () => TimescaleViewport,
  TimescaleYear: () => TimescaleYear,
  Twemoji: () => Twemoji,
  WheelPicker: () => WheelPicker2,
  WheelPickerWrapper: () => WheelPickerWrapper2,
  WorkExperience: () => WorkExperience,
  cn: () => import_cn.cn,
  convertNpmCommand: () => convertNpmCommand,
  haptic: () => haptic,
  useActiveHeading: () => useActiveHeading,
  useAppleCarouselItem: () => useAppleCarouselItem,
  useControllableState: () => useControllableState,
  useCopyToClipboard: () => useCopyToClipboard,
  usePackageManager: () => usePackageManager,
  useSound: () => useSound2
});
module.exports = __toCommonJS(exports_src);

// src/registry/components/apple-carousel/apple-carousel.tsx
var import_react = require("react");
var import_react2 = require("motion/react");

// src/lib/utils.ts
var import_cn = require("cn");

// src/registry/components/apple-carousel/apple-carousel.tsx
var jsx_dev_runtime = require("react/jsx-dev-runtime");
"use client";
var CLONE_COUNT = 4;
var SETTLE_DELAY = 150;
var SCROLL_BASE_DURATION = 0.5;
var SCROLL_EXTRA_CARD_DURATION = 0.1;
var SCROLL_MAX_DURATION = 0.9;
var REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
function subscribeReducedMotion(callback) {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}
function usePrefersReducedMotion() {
  return import_react.useSyncExternalStore(subscribeReducedMotion, () => window.matchMedia(REDUCED_MOTION_QUERY).matches, () => false);
}
var subscribeNothing = () => () => {};
function useIsHydrated() {
  return import_react.useSyncExternalStore(subscribeNothing, () => true, () => false);
}
function getSlides(viewport) {
  return Array.from(viewport.firstElementChild?.children ?? []);
}
function getSnapLeft(viewport, slide) {
  if (getComputedStyle(slide).scrollSnapAlign.startsWith("start")) {
    const padding = parseFloat(getComputedStyle(viewport).scrollPaddingInlineStart);
    return slide.offsetLeft - (padding || 0);
  }
  return slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2;
}
function getNearestSlide(viewport) {
  let nearest;
  let minDistance = Infinity;
  for (const slide of getSlides(viewport)) {
    const distance = Math.abs(getSnapLeft(viewport, slide) - viewport.scrollLeft);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = slide;
    }
  }
  return nearest;
}
function getRealSlide(viewport, index) {
  return getSlides(viewport).find((slide) => !slide.hasAttribute("data-clone") && slide.dataset.index === String(index));
}
var AppleCarouselContext = import_react.createContext(null);
function useAppleCarousel() {
  const context = import_react.use(AppleCarouselContext);
  if (!context) {
    throw new Error("AppleCarousel parts must be used within AppleCarouselRoot");
  }
  return context;
}
var AppleCarouselItemContext = import_react.createContext(null);
function useAppleCarouselItem() {
  const { index: currentIndex } = useAppleCarousel();
  const item = import_react.use(AppleCarouselItemContext);
  if (!item) {
    throw new Error("useAppleCarouselItem must be used inside an item of AppleCarouselContent");
  }
  return { ...item, isCurrent: item.index === currentIndex };
}
var AppleCarouselTabContext = import_react.createContext(null);
function AppleCarouselRoot({
  duration = 5000,
  className,
  ...props
}) {
  const id = import_react.useId();
  const viewportRef = import_react.useRef(null);
  const progressFillRef = import_react.useRef(null);
  const [index, setIndex] = import_react.useState(0);
  const [playback, setPlayback] = import_react.useState("auto");
  const isInView = import_react2.useInView(viewportRef, { amount: 0.25 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const isPlaying = isInView && (playback === "playing" || playback === "auto" && !prefersReducedMotion);
  const ignoreScrollUntilRef = import_react.useRef(0);
  const scrollAnimationRef = import_react.useRef(null);
  const progressAnimationRef = import_react.useRef(null);
  const scrollLeft = import_react2.useMotionValue(0);
  const play = () => setPlayback("playing");
  const pause = () => setPlayback("paused");
  const isOwnScroll = () => scrollAnimationRef.current !== null || performance.now() < ignoreScrollUntilRef.current;
  const writeScrollLeft = (value) => {
    const viewport = viewportRef.current;
    if (!viewport)
      return;
    ignoreScrollUntilRef.current = performance.now() + SETTLE_DELAY;
    viewport.scrollLeft = value;
  };
  import_react2.useMotionValueEvent(scrollLeft, "change", writeScrollLeft);
  const setScrollAnimation = (controls) => {
    scrollAnimationRef.current = controls;
    viewportRef.current?.toggleAttribute("data-animating", controls !== null);
  };
  const stopScrollAnimation = () => {
    scrollAnimationRef.current?.stop();
    setScrollAnimation(null);
  };
  const syncFromScroll = () => {
    if (scrollAnimationRef.current)
      return;
    const viewport = viewportRef.current;
    const slide = viewport && getNearestSlide(viewport);
    if (slide)
      setIndex(Number(slide.dataset.index));
  };
  const wrapFromClone = () => {
    const viewport = viewportRef.current;
    const slide = viewport && getNearestSlide(viewport);
    if (!viewport || !slide?.hasAttribute("data-clone"))
      return;
    const realSlide = getRealSlide(viewport, Number(slide.dataset.index));
    if (realSlide)
      writeScrollLeft(getSnapLeft(viewport, realSlide));
  };
  const scrollToSlide = (slide) => {
    const viewport = viewportRef.current;
    if (!viewport)
      return;
    setIndex(Number(slide.dataset.index));
    const to = getSnapLeft(viewport, slide);
    const distance = Math.abs(to - viewport.scrollLeft);
    if (prefersReducedMotion || distance < 1) {
      stopScrollAnimation();
      writeScrollLeft(to);
      wrapFromClone();
      return;
    }
    if (!scrollAnimationRef.current)
      scrollLeft.jump(viewport.scrollLeft);
    const cardsToTravel = Math.max(distance / slide.offsetWidth, 1);
    const controls = import_react2.animate(scrollLeft, to, {
      type: "spring",
      bounce: 0,
      visualDuration: Math.min(SCROLL_BASE_DURATION + (cardsToTravel - 1) * SCROLL_EXTRA_CARD_DURATION, SCROLL_MAX_DURATION),
      onComplete: () => {
        if (scrollAnimationRef.current !== controls)
          return;
        setScrollAnimation(null);
        wrapFromClone();
      }
    });
    setScrollAnimation(controls);
  };
  const goTo = (next) => {
    const viewport = viewportRef.current;
    const slide = viewport && getRealSlide(viewport, next);
    if (slide)
      scrollToSlide(slide);
  };
  const goNext = () => {
    const viewport = viewportRef.current;
    const next = viewport && getNearestSlide(viewport)?.nextElementSibling;
    if (next instanceof HTMLElement)
      scrollToSlide(next);
  };
  const onViewportScroll = import_react.useEffectEvent(() => {
    if (isPlaying && !isOwnScroll())
      pause();
    syncFromScroll();
  });
  const onViewportSettled = import_react.useEffectEvent(() => {
    if (!isOwnScroll())
      wrapFromClone();
  });
  const onViewportInput = import_react.useEffectEvent(() => {
    stopScrollAnimation();
    pause();
  });
  import_react.useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport)
      return;
    let frame = null;
    let settleTimer;
    const handleScroll = () => {
      if (frame === null) {
        frame = requestAnimationFrame(() => {
          frame = null;
          onViewportScroll();
        });
      }
      clearTimeout(settleTimer);
      settleTimer = setTimeout(onViewportSettled, SETTLE_DELAY);
    };
    const handleWheel = (event) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY))
        onViewportInput();
    };
    viewport.addEventListener("scroll", handleScroll, { passive: true });
    viewport.addEventListener("scrollend", onViewportSettled);
    viewport.addEventListener("pointerdown", onViewportInput);
    viewport.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      viewport.removeEventListener("scroll", handleScroll);
      viewport.removeEventListener("scrollend", onViewportSettled);
      viewport.removeEventListener("pointerdown", onViewportInput);
      viewport.removeEventListener("wheel", handleWheel);
      if (frame !== null)
        cancelAnimationFrame(frame);
      clearTimeout(settleTimer);
    };
  }, []);
  const onProgressFinish = import_react.useEffectEvent(goNext);
  import_react.useEffect(() => {
    const animation = new Animation(new KeyframeEffect(progressFillRef.current, [{ scale: "0 1" }, { scale: "1 1" }], { duration, fill: "forwards" }));
    animation.onfinish = onProgressFinish;
    progressAnimationRef.current = animation;
    return () => {
      animation.cancel();
      progressAnimationRef.current = null;
    };
  }, [index, duration]);
  import_react.useEffect(() => {
    const animation = progressAnimationRef.current;
    if (!animation)
      return;
    if (isPlaying)
      animation.play();
    else
      animation.pause();
  }, [index, duration, isPlaying]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(AppleCarouselContext, {
    value: {
      id,
      index,
      isPlaying,
      prefersReducedMotion,
      viewportRef,
      progressFillRef,
      goTo,
      play,
      pause
    },
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
      "data-slot": "apple-carousel",
      "data-playing": isPlaying ? "" : undefined,
      className: import_cn.cn("@container relative w-full", className),
      ...props
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function AppleCarouselContent({
  className,
  children,
  ...props
}) {
  const { index, viewportRef } = useAppleCarousel();
  const isHydrated = useIsHydrated();
  const items = import_react.Children.toArray(children).filter(import_react.isValidElement);
  const count = items.length;
  const cloneCount = isHydrated && count > 1 ? Math.min(CLONE_COUNT, count) : 0;
  const alignToCurrent = import_react.useEffectEvent(() => {
    const viewport = viewportRef.current;
    const slide = viewport && getRealSlide(viewport, index);
    if (viewport && slide)
      viewport.scrollLeft = getSnapLeft(viewport, slide);
  });
  import_react.useLayoutEffect(() => {
    if (cloneCount > 0)
      alignToCurrent();
  }, [cloneCount]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
    ref: viewportRef,
    "data-slot": "apple-carousel-content",
    className: import_cn.cn("relative no-scrollbar snap-x snap-mandatory overflow-x-auto overflow-y-hidden data-animating:snap-none", "[--apple-carousel-gap:--spacing(5)] [--apple-carousel-item-width:min(max(87.5cqw,var(--container-3xs)),var(--container-6xl))] [--apple-carousel-padding:max(6.25cqw,(100cqw-var(--container-6xl))/2)]", "@max-3xl:scroll-ps-(--apple-carousel-padding) @max-3xl:[--apple-carousel-item-width:calc(max(87.5cqw,var(--container-3xs))-var(--apple-carousel-gap))]", className),
    ...props,
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("ul", {
      role: "list",
      "data-slot": "apple-carousel-list",
      className: "mx-auto grid w-fit grid-flow-col gap-(--apple-carousel-gap) px-(--apple-carousel-padding)",
      children: [
        items.slice(count - cloneCount).map((item, i) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(AppleCarouselItemContext, {
          value: { index: count - cloneCount + i, isClone: true },
          children: item
        }, `${item.key}-leading`, false, undefined, this)),
        items.map((item, i) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(AppleCarouselItemContext, {
          value: { index: i, isClone: false },
          children: item
        }, item.key, false, undefined, this)),
        items.slice(0, cloneCount).map((item, i) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(AppleCarouselItemContext, {
          value: { index: i, isClone: true },
          children: item
        }, `${item.key}-trailing`, false, undefined, this))
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
function AppleCarouselItem({ className, ...props }) {
  const { id } = useAppleCarousel();
  const { index, isCurrent, isClone } = useAppleCarouselItem();
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("li", {
    id: isClone ? undefined : `${id}-item-${index}`,
    role: isClone ? undefined : "tabpanel",
    "aria-labelledby": isClone ? undefined : `${id}-tab-${index}`,
    inert: isClone || !isCurrent,
    tabIndex: isCurrent && !isClone ? 0 : -1,
    "data-slot": "apple-carousel-item",
    "data-index": index,
    "data-clone": isClone ? "" : undefined,
    "data-current": isCurrent ? "" : undefined,
    className: import_cn.cn("relative h-152 w-(--apple-carousel-item-width) snap-center overflow-hidden rounded-4xl bg-muted data-clone:snap-always", "@max-5xl:h-140 @max-3xl:h-152 @max-3xl:snap-start", "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring", className),
    ...props
  }, undefined, false, undefined, this);
}
function AppleCarouselControls({
  size = "default",
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
    "data-slot": "apple-carousel-controls",
    "data-size": size,
    className: import_cn.cn("group/apple-carousel-controls flex items-center justify-center gap-3 pt-6 data-[size=sm]:gap-2 data-[size=sm]:pt-4", className),
    ...props
  }, undefined, false, undefined, this);
}
function AppleCarouselTabList({
  className,
  children,
  ...props
}) {
  const tabs = import_react.Children.toArray(children).filter(import_react.isValidElement);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
    role: "tablist",
    "data-slot": "apple-carousel-tab-list",
    className: import_cn.cn("flex h-14 items-center rounded-full bg-muted px-4 group-data-[size=sm]/apple-carousel-controls:h-11 group-data-[size=sm]/apple-carousel-controls:px-3", className),
    ...props,
    children: tabs.map((tab, index) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(AppleCarouselTabContext, {
      value: { index, count: tabs.length },
      children: tab
    }, tab.key, false, undefined, this))
  }, undefined, false, undefined, this);
}
function AppleCarouselTab({
  className,
  children,
  onClick,
  onFocus,
  onKeyDown,
  ...props
}) {
  const {
    id,
    index: currentIndex,
    isPlaying,
    progressFillRef,
    goTo,
    pause
  } = useAppleCarousel();
  const tab = import_react.use(AppleCarouselTabContext);
  if (!tab) {
    throw new Error("AppleCarouselTab must be a direct child of AppleCarouselTabList");
  }
  const { index, count } = tab;
  const isCurrent = index === currentIndex;
  const handleKeyDown = (event) => {
    onKeyDown?.(event);
    if (event.defaultPrevented)
      return;
    let next;
    switch (event.key) {
      case "ArrowLeft":
        next = (index - 1 + count) % count;
        break;
      case "ArrowRight":
        next = (index + 1) % count;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = count - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    goTo(next);
    event.currentTarget.closest('[role="tablist"]')?.querySelectorAll('[role="tab"]')[next]?.focus();
  };
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
    type: "button",
    role: "tab",
    id: `${id}-tab-${index}`,
    "aria-controls": `${id}-item-${index}`,
    "aria-selected": isCurrent,
    tabIndex: isCurrent ? 0 : -1,
    "data-slot": "apple-carousel-tab",
    "data-current": isCurrent ? "" : undefined,
    className: import_cn.cn("relative mx-2 size-2 overflow-hidden rounded-full bg-muted-foreground not-data-current:hover:bg-foreground", "transition-[width,background-color] duration-[400ms,150ms] ease-[cubic-bezier(0.645,0.045,0.355,1),ease]", "motion-reduce:transition-colors motion-reduce:duration-150 motion-reduce:ease-[ease]", "data-current:w-12 group-data-[size=sm]/apple-carousel-controls:data-current:w-6 @max-3xl:data-current:w-8", "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring", className),
    onClick: (event) => {
      onClick?.(event);
      if (!event.defaultPrevented)
        goTo(index);
    },
    onFocus: (event) => {
      onFocus?.(event);
      if (isPlaying && event.currentTarget.matches(":focus-visible"))
        pause();
    },
    onKeyDown: handleKeyDown,
    ...props,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("span", {
        ref: isCurrent ? progressFillRef : undefined,
        "aria-hidden": true,
        "data-slot": "apple-carousel-tab-progress",
        className: "absolute inset-0 origin-left scale-x-0 rounded-[inherit] bg-foreground"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("span", {
        className: "sr-only",
        children
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var ICON_STROKE_WIDTH = 2.5;
var PAUSE_ICON = {
  left: "M5.5 5.5L8.5 5.5L8.5 18.5L5.5 18.5Z",
  right: "M15.5 5.5L18.5 5.5L18.5 18.5L15.5 18.5Z"
};
var PLAY_ICON = {
  left: "M7.5 5.87L13 9.08L13 14.92L7.5 18.13Z",
  right: "M13 9.08L18.01 12L18.01 12L13 14.92Z"
};
var ICON_TRANSITION = {
  type: "spring",
  visualDuration: 0.3,
  bounce: 0
};
var INSTANT_TRANSITION = { duration: 0 };
function AppleCarouselPlayButton({
  className,
  onClick,
  ...props
}) {
  const { isPlaying, prefersReducedMotion, play, pause } = useAppleCarousel();
  const icon = isPlaying ? PAUSE_ICON : PLAY_ICON;
  const transition = prefersReducedMotion ? INSTANT_TRANSITION : ICON_TRANSITION;
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
    type: "button",
    "aria-label": isPlaying ? "Pause gallery" : "Play gallery",
    "data-slot": "apple-carousel-play-button",
    className: import_cn.cn("flex size-14 items-center justify-center rounded-full bg-muted text-foreground group-data-[size=sm]/apple-carousel-controls:size-11", "transition-[background-color,scale] duration-150 ease-out hover:bg-muted/80 active:scale-97 motion-reduce:active:scale-100", "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring", className),
    onClick: (event) => {
      onClick?.(event);
      if (event.defaultPrevented)
        return;
      if (isPlaying)
        pause();
      else
        play();
    },
    ...props,
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("svg", {
      "aria-hidden": true,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: ICON_STROKE_WIDTH,
      strokeLinejoin: "round",
      className: "size-6 group-data-[size=sm]/apple-carousel-controls:size-5",
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(import_react2.motion.path, {
          initial: false,
          animate: { d: icon.left },
          transition
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(import_react2.motion.path, {
          initial: false,
          animate: { d: icon.right },
          transition
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
// src/registry/components/apple-hello-effect/apple-hello-effect-english.tsx
var import_react3 = require("motion/react");
var jsx_dev_runtime2 = require("react/jsx-dev-runtime");
"use client";
var initialProps = {
  pathLength: 0,
  opacity: 0
};
var animateProps = {
  pathLength: 1,
  opacity: 1
};
function AppleHelloEffectEnglish({
  className,
  durationScale = 1,
  onAnimationComplete,
  ...props
}) {
  const calc = (x) => x * durationScale;
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(import_react3.motion.svg, {
    className: import_cn.cn("h-20", className),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 638 200",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "14.8883",
    strokeLinecap: "round",
    initial: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
    ...props,
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("title", {
        children: "hello"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(import_react3.motion.path, {
        d: "M8.69214 166.553C36.2393 151.239 61.3409 131.548 89.8191 98.0295C109.203 75.1488 119.625 49.0228 120.122 31.0026C120.37 17.6036 113.836 7.43883 101.759 7.43883C88.3598 7.43883 79.9231 17.6036 74.7122 40.9363C69.005 66.5793 64.7866 96.0036 54.1166 190.356",
        initial: initialProps,
        animate: animateProps,
        transition: {
          duration: calc(0.8),
          ease: "easeInOut",
          opacity: { duration: 0.4 }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(import_react3.motion.path, {
        d: "M55.1624 181.135C60.6251 133.114 81.4118 98.0479 107.963 98.0479C123.844 98.0479 133.937 110.703 131.071 128.817C129.457 139.487 127.587 150.405 125.408 163.06C122.869 178.941 130.128 191.348 152.122 191.348C184.197 191.348 219.189 173.523 237.097 145.915C243.198 136.509 245.68 128.073 245.928 119.884C246.176 104.996 237.739 93.8296 222.851 93.8296C203.992 93.8296 189.6 115.17 189.6 142.465C189.6 171.745 205.481 192.341 239.208 192.341C285.066 192.341 335.86 137.292 359.199 75.8585C365.788 58.513 368.26 42.4065 368.26 31.1512C368.26 17.8057 364.042 7.55823 352.131 7.55823C340.469 7.55823 332.777 16.6141 325.829 30.9129C317.688 47.4967 311.667 71.4162 309.203 98.4549C303 166.301 316.896 191.348 349.936 191.348C390 191.348 434.542 135.534 457.286 75.6686C463.803 58.513 466.275 42.4065 466.275 31.1512C466.275 17.8057 462.057 7.55823 450.146 7.55823C438.484 7.55823 430.792 16.6141 423.844 30.9129C415.703 47.4967 409.682 71.4162 407.218 98.4549C401.015 166.301 414.911 191.348 444.416 191.348C473.874 191.348 489.877 165.67 499.471 138.402C508.955 111.447 520.618 94.8221 544.935 94.8221C565.035 94.8221 580.916 109.71 580.916 137.75C580.916 168.768 560.792 192.093 535.362 192.341C512.984 192.589 498.285 174.475 499.774 147.179C501.511 116.907 519.873 94.8221 543.943 94.8221C557.839 94.8221 569.51 100.999 578.682 107.725C603.549 125.866 622.709 114.656 630.047 96.7186",
        initial: initialProps,
        animate: animateProps,
        transition: {
          duration: calc(2.8),
          ease: "easeInOut",
          delay: calc(0.7),
          opacity: { duration: 0.7, delay: calc(0.7) }
        },
        onAnimationComplete
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// src/registry/components/apple-hello-effect/apple-hello-effect-hindi.tsx
var import_react4 = require("motion/react");
var jsx_dev_runtime3 = require("react/jsx-dev-runtime");
"use client";
var initialProps2 = {
  pathLength: 0,
  opacity: 0
};
var animateProps2 = {
  pathLength: 1,
  opacity: 1
};
function AppleHelloEffectHindi({
  className,
  durationScale = 0.8,
  onAnimationComplete,
  ...props
}) {
  const calc = (x) => x * durationScale;
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(import_react4.motion.svg, {
    className: import_cn.cn("h-20", className),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 605 273",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "14.888",
    strokeLinecap: "round",
    initial: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
    ...props,
    children: [
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("title", {
        children: "नमस्ते"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(import_react4.motion.path, {
        d: "M42.3842 150.002C53.2928 153.473 60.4984 162.29 60.4984 175.561C60.4984 189.953 50.3247 201.119 36.677 201.119C24.022 201.119 14.8408 192.186 14.8408 179.035C14.8408 160.269 31.2182 148.265 56.5282 149.01C82.0863 149.754 103.723 163.663 120.367 185.069",
        initial: initialProps2,
        animate: animateProps2,
        transition: {
          duration: calc(0.6),
          ease: "easeOut",
          opacity: { duration: 0.2 }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(import_react4.motion.path, {
        d: "M133.502 93.5842C124.459 153.875 117.303 209.683 111.71 264.988",
        initial: initialProps2,
        animate: animateProps2,
        transition: {
          duration: calc(0.4),
          ease: "easeOut",
          delay: calc(0.6),
          opacity: { duration: 0.2, delay: calc(0.6) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(import_react4.motion.path, {
        d: "M216.556 90.9181C217.117 117.977 216.81 137.689 214.869 160.067C212.007 193.058 200.119 213.115 180.936 213.115C169.295 213.115 160.844 205.334 160.844 193.399C160.844 177.222 175.901 164.28 203.653 165.376C229.863 166.411 256.651 174.863 275.138 192.025",
        initial: initialProps2,
        animate: animateProps2,
        transition: {
          duration: calc(0.6),
          ease: "easeOut",
          delay: calc(1),
          opacity: { duration: 0.2, delay: calc(1) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(import_react4.motion.path, {
        d: "M289.489 90.0085C280.255 150.162 272.672 207.783 267.379 263.003",
        initial: initialProps2,
        animate: animateProps2,
        transition: {
          duration: calc(0.4),
          ease: "easeOut",
          delay: calc(1.6),
          opacity: { duration: 0.2, delay: calc(1.6) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(import_react4.motion.path, {
        d: "M373.949 90.0198C394.816 102.051 408.098 128.602 408.098 154.079C408.098 185.141 387.465 205.586 358.47 205.586C330.249 205.586 311.145 186.038 317.527 170.35C322.864 157.231 341.378 156.812 356.237 168.861C374.674 183.811 382.044 216.764 385.021 261.169",
        initial: initialProps2,
        animate: animateProps2,
        transition: {
          duration: calc(0.6),
          ease: "easeOut",
          delay: calc(2),
          opacity: { duration: 0.2, delay: calc(2) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(import_react4.motion.path, {
        d: "M403.474 177.549C418.085 183.32 439.163 184.314 458.424 179.805",
        initial: initialProps2,
        animate: animateProps2,
        transition: {
          duration: calc(0.4),
          ease: "easeOut",
          delay: calc(2.6),
          opacity: { duration: 0.2, delay: calc(2.6) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(import_react4.motion.path, {
        d: "M556.981 88.1333C546.807 149.619 538.371 207.01 531.919 262.906",
        initial: initialProps2,
        animate: animateProps2,
        transition: {
          duration: calc(0.4),
          ease: "easeOut",
          delay: calc(3),
          opacity: { duration: 0.2, delay: calc(3) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(import_react4.motion.path, {
        d: "M536.891 222.462C541.984 183.336 528.689 152.484 496.435 152.484C472.365 152.484 453.755 175.064 453.755 203.104C453.755 223.451 461.199 245.784 475.095 261.417",
        initial: initialProps2,
        animate: animateProps2,
        transition: {
          duration: calc(0.6),
          ease: "easeOut",
          delay: calc(3.4),
          opacity: { duration: 0.2, delay: calc(3.4) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(import_react4.motion.path, {
        d: "M521.259 45.4307C485.619 43.0134 474.856 32.3917 474.856 21.5298C474.856 12.832 482.71 7.04349 493.506 7.46568C518.289 8.37031 542.96 35.3336 555.578 70.4412",
        initial: initialProps2,
        animate: animateProps2,
        transition: {
          duration: calc(0.6),
          ease: "easeOut",
          delay: calc(4),
          opacity: { duration: 0.2, delay: calc(4) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(import_react4.motion.path, {
        d: "M7.44434 88.6792C30.9102 88.8706 59.0093 89.2085 95.3706 89.2085C132.178 89.2085 208.165 89.2571 253.623 89.2047C295.091 89.1568 396.683 89.0223 452.784 89.0234C506.182 89.0244 552.847 88.4444 596.931 87.2836",
        initial: initialProps2,
        animate: animateProps2,
        transition: {
          duration: calc(0.8),
          ease: "easeOut",
          delay: calc(4.6),
          opacity: { duration: 0.2, delay: calc(4.6) }
        },
        onAnimationComplete
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// src/registry/components/apple-hello-effect/apple-hello-effect-spanish.tsx
var import_react5 = require("motion/react");
var jsx_dev_runtime4 = require("react/jsx-dev-runtime");
"use client";
var initialProps3 = {
  pathLength: 0,
  opacity: 0
};
var animateProps3 = {
  pathLength: 1,
  opacity: 1
};
function AppleHelloEffectSpanish({
  className,
  durationScale = 1,
  onAnimationComplete,
  ...props
}) {
  const calc = (x) => x * durationScale;
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(import_react5.motion.svg, {
    className: import_cn.cn("h-20", className),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 562 200",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "14.888",
    strokeLinecap: "round",
    initial: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
    ...props,
    children: [
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV("title", {
        children: "hola"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(import_react5.motion.path, {
        d: "M8.692 169.422c27.495-16.185 51.282-36.493 77.822-72.424 18.627-25.219 27.738-47.893 28.236-65.962.248-13.399-6.204-23.563-18.362-23.563-13.4 0-21.837 10.164-27.048 33.497-5.707 25.643-9.925 55.067-20.595 149.42",
        initial: initialProps3,
        animate: animateProps3,
        transition: {
          duration: calc(0.8),
          ease: "easeOut",
          opacity: { duration: 0.4 }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(import_react5.motion.path, {
        d: "M49.79 181.168c5.265-46.274 26.25-83.086 52.801-83.086 15.881 0 25.974 12.655 23.108 30.769-1.613 10.67-4.528 23.077-6.193 35.236-2.026 15.384 3.761 27.295 21.655 27.295 25.257 0 41.157-24.523 48.037-53.562",
        initial: initialProps3,
        animate: animateProps3,
        transition: {
          duration: calc(0.8),
          ease: "easeInOut",
          delay: calc(0.7),
          opacity: { duration: 0.2, delay: calc(0.8) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(import_react5.motion.path, {
        d: "M234.601 94.36c-24.822 2.006-43.39 23.044-46.898 51.861-3.226 26.302 11.414 46.154 34.739 46.154 28.288 0 46.65-24.318 47.891-54.591.992-29.032-12.903-43.672-31.762-43.672-14.888 0-22.829 11.166-22.332 24.813.484 18.661 14.478 39.612 43.839 42.289 40.725 3.714 96.424-26.396 118.914-85.593 6.487-17.074 8.959-33.18 8.959-44.436 0-13.346-4.219-23.593-16.129-23.593-11.663 0-19.355 9.056-26.303 23.355-8.14 16.583-14.162 40.503-16.625 67.542-6.204 67.846 7.692 92.893 37.42 92.893 30.127 0 50.049-26.113 58.664-56.317",
        initial: initialProps3,
        animate: animateProps3,
        transition: {
          duration: calc(1.6),
          ease: "easeInOut",
          delay: calc(1.4),
          opacity: { duration: 0.2, delay: calc(1.5) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(import_react5.motion.path, {
        d: "M503.236 112.864c-4.864-11.195-15.204-18.753-31.664-18.753-27.295 0-47.808 27.296-49.155 56.576-1.174 26.799 11.192 41.864 28.805 41.687 25.001-.25 43.378-24.805 51.581-76.763 1.012-6.41 2.061-13.104 3.073-19.514",
        initial: initialProps3,
        animate: animateProps3,
        transition: {
          duration: calc(0.7),
          ease: "easeInOut",
          delay: calc(2.9),
          opacity: { duration: 0.2, delay: calc(3) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(import_react5.motion.path, {
        d: "m505.875 96.097-3.073 19.507c-4.482 28.44-6.549 39.66-6.327 46.994.518 17.121 6.675 28.784 22.06 28.784 19.355 0 30.21-13.152 35.421-27.544",
        initial: initialProps3,
        animate: animateProps3,
        transition: {
          duration: calc(0.8),
          ease: "easeInOut",
          delay: calc(3.5),
          opacity: { duration: 0.2, delay: calc(3.5) }
        },
        onAnimationComplete
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// src/registry/components/apple-hello-effect/apple-hello-effect-vietnamese.tsx
var import_react6 = require("motion/react");
var jsx_dev_runtime5 = require("react/jsx-dev-runtime");
"use client";
var initialProps4 = {
  pathLength: 0,
  opacity: 0
};
var animateProps4 = {
  pathLength: 1,
  opacity: 1
};
function AppleHelloEffectVietnamese({
  className,
  durationScale = 1,
  onAnimationComplete,
  ...props
}) {
  const calc = (x) => x * durationScale;
  return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(import_react6.motion.svg, {
    className: import_cn.cn("h-20", className),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1009 200",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "14.8883",
    strokeLinecap: "round",
    initial: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
    ...props,
    children: [
      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV("title", {
        children: "xin chào"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(import_react6.motion.path, {
        d: "M102.233 96.2277C75.6823 127.245 45.1612 158.759 11.4143 190.521",
        initial: initialProps4,
        animate: animateProps4,
        transition: {
          duration: calc(0.3),
          ease: "easeInOut",
          opacity: { duration: 0.15 }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(import_react6.motion.path, {
        d: "M7.69214 116.575C9.67725 105.16 16.8733 95.7311 28.5358 95.7311C40.4465 95.7311 46.8981 105.408 53.3497 124.019C56.7409 133.283 60.1322 142.547 63.5234 151.81C73.689 179.58 81.1988 191.513 100.855 191.513C128.722 191.513 154.043 159.148 161.595 118.502C162.929 111.321 164.774 103.736 166.043 96.2273",
        initial: initialProps4,
        animate: animateProps4,
        transition: {
          duration: calc(0.7),
          ease: "easeInOut",
          delay: calc(0.4),
          opacity: { duration: 0.35, delay: calc(0.4) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(import_react6.motion.path, {
        d: "M166.043 96.2273C163.191 113.101 160.565 126.997 158.92 139.404C157.989 147.592 157.544 154.54 157.596 161.488C157.729 179.354 164.764 191.513 182.695 191.513C209.39 191.513 236.181 159.123 243.73 118.5C245.064 111.321 247.012 103.759 248.139 96.2273",
        initial: initialProps4,
        animate: animateProps4,
        transition: {
          duration: calc(0.5),
          ease: "easeOut",
          delay: calc(1),
          opacity: { duration: 0.25, delay: calc(1) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(import_react6.motion.path, {
        d: "M248.139 96.2278C243.424 127.741 239.454 158.759 234.491 190.272",
        initial: initialProps4,
        animate: animateProps4,
        transition: {
          duration: calc(0.3),
          ease: "easeOut",
          delay: calc(1.5),
          opacity: { duration: 0.15, delay: calc(1.5) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(import_react6.motion.path, {
        d: "M237.873 167.951C244.704 121.32 265.508 94.2422 290.322 94.2422C307.692 94.2422 316.625 106.153 315.136 123.026C313.896 135.681 309.677 150.322 308.685 162.729C307.444 179.85 316.499 191.513 330.769 191.513C348.722 191.513 359.309 179.314 364.143 165.965",
        initial: initialProps4,
        animate: animateProps4,
        transition: {
          duration: calc(0.9),
          ease: "easeOut",
          delay: calc(1.8),
          opacity: { duration: 0.45, delay: calc(1.8) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(import_react6.motion.path, {
        d: "M535.91 109.876C531.265 100.446 520.943 93.4984 505.459 93.4984C476.516 93.4984 462.044 117.816 462.044 143.374C462.044 171.503 482.265 192.506 511.307 192.506C559.762 192.506 592.902 136.708 621.581 97.8807C640.764 71.9101 649.874 49.2359 650.372 31.1674C650.62 17.7684 644.168 7.60362 632.01 7.60362C618.61 7.60362 610.173 17.7684 604.963 41.1011C599.255 66.7441 595.037 96.1684 584.367 190.521",
        initial: initialProps4,
        animate: animateProps4,
        transition: {
          duration: calc(1.1),
          ease: "easeInOut",
          delay: calc(2.6),
          opacity: { duration: 0.55, delay: calc(2.6) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(import_react6.motion.path, {
        d: "M585.413 181.299C590.677 135.025 611.663 98.2125 638.213 98.2125C654.094 98.2125 664.187 110.868 661.321 128.982C659.708 139.652 656.794 152.059 655.128 164.217C653.102 179.602 658.89 191.513 676.813 191.513C702.178 191.513 717.375 164.077 725.613 135.196",
        initial: initialProps4,
        animate: animateProps4,
        transition: {
          duration: calc(1),
          ease: "easeInOut",
          delay: calc(3.6),
          opacity: { duration: 0.5, delay: calc(3.6) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(import_react6.motion.path, {
        d: "M803.871 112.995C799.007 101.8 788.666 94.2423 772.207 94.2423C744.912 94.2423 724.398 121.538 723.052 150.818C721.878 177.617 734.244 192.681 751.857 192.505C776.858 192.255 795.234 167.699 803.437 115.742C804.449 109.332 805.498 102.638 806.51 96.2274",
        initial: initialProps4,
        animate: animateProps4,
        transition: {
          duration: calc(0.8),
          ease: "easeOut",
          delay: calc(4.6),
          opacity: { duration: 0.4, delay: calc(4.6) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(import_react6.motion.path, {
        d: "M806.51 96.2274C805.486 102.73 804.461 109.232 803.436 115.735C798.955 144.175 796.887 155.395 797.109 162.729C797.628 179.85 803.785 191.513 820.064 191.513C842.563 191.513 860.966 164.721 870.266 138.289C879.653 111.612 891.315 94.9867 915.633 94.9867C935.732 94.9867 951.613 109.875 951.613 137.915C951.613 168.932 931.489 192.257 906.059 192.505C883.681 192.753 868.983 174.639 870.471 147.344C872.208 117.071 890.571 94.9867 914.64 94.9867C928.536 94.9867 940.207 101.164 949.38 107.89C974.247 126.031 993.407 114.82 1000.74 96.8832",
        initial: initialProps4,
        animate: animateProps4,
        transition: {
          duration: calc(1.5),
          ease: "easeOut",
          delay: calc(5.4),
          opacity: { duration: 0.75, delay: calc(5.4) }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(import_react6.motion.path, {
        d: "M763.027 19.3039C768.734 34.6886 780.397 48.3362 792.059 55.5322",
        initial: initialProps4,
        animate: animateProps4,
        transition: {
          duration: calc(0.8),
          ease: "easeInOut",
          delay: calc(7),
          opacity: { duration: 0.4, delay: calc(7) }
        },
        onAnimationComplete
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// src/registry/components/brand-assets-menu/brand-assets-menu.tsx
var import_react7 = require("@rexa-developer/tiks/react");
var import_lucide_react3 = require("lucide-react");

// src/components/ui/context-menu.tsx
var import_context_menu = require("@base-ui/react/context-menu");
var import_lucide_react = require("lucide-react");
var jsx_dev_runtime6 = require("react/jsx-dev-runtime");
"use client";
function ContextMenu({ ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(import_context_menu.ContextMenu.Root, {
    "data-slot": "context-menu",
    ...props
  }, undefined, false, undefined, this);
}
function ContextMenuTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(import_context_menu.ContextMenu.Trigger, {
    "data-slot": "context-menu-trigger",
    className: import_cn.cn("select-none", className),
    ...props
  }, undefined, false, undefined, this);
}
function ContextMenuContent({
  className,
  align = "start",
  alignOffset = 4,
  side = "right",
  sideOffset = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(import_context_menu.ContextMenu.Portal, {
    children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(import_context_menu.ContextMenu.Positioner, {
      className: "isolate z-50 outline-none",
      align,
      alignOffset,
      side,
      sideOffset,
      children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(import_context_menu.ContextMenu.Popup, {
        "data-slot": "context-menu-content",
        className: import_cn.cn("z-50 max-h-(--available-height) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-xl bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:ring-foreground/20 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
        ...props
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(import_context_menu.ContextMenu.Item, {
    "data-slot": "context-menu-item",
    "data-inset": inset,
    "data-variant": variant,
    className: import_cn.cn("group/context-menu-item relative flex cursor-default items-center gap-2 rounded-lg px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus:*:[svg]:text-accent-foreground data-[variant=destructive]:*:[svg]:text-destructive", className),
    ...props
  }, undefined, false, undefined, this);
}
function ContextMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(import_context_menu.ContextMenu.Separator, {
    "data-slot": "context-menu-separator",
    className: import_cn.cn("-mx-1 my-1 h-px bg-border", className),
    ...props
  }, undefined, false, undefined, this);
}

// src/components/ui/toast.tsx
var import_toast = require("@base-ui/react/toast");
var import_lucide_react2 = require("lucide-react");

// src/components/ui/button.tsx
var import_button = require("@base-ui/react/button");
var import_class_variance_authority = require("class-variance-authority");
var jsx_dev_runtime7 = require("react/jsx-dev-runtime");
var buttonVariants = import_class_variance_authority.cva("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/80",
      outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
      ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
      destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
      link: "text-primary decoration-1 underline-offset-3 hover:underline active:scale-none"
    },
    size: {
      default: "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      xs: "h-6 gap-1 rounded-[min(var(--radius-lg),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
      sm: "h-8 gap-1 rounded-[min(var(--radius-lg),10px)] px-2.5 in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
      lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
      icon: "size-9",
      "icon-xs": "size-6 rounded-[min(var(--radius-lg),8px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
      "icon-sm": "size-8 rounded-[min(var(--radius-lg),10px)] in-data-[slot=button-group]:rounded-lg",
      "icon-lg": "size-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(import_button.Button, {
    "data-slot": "button",
    className: import_cn.cn(buttonVariants({ variant, size, className })),
    ...props
  }, undefined, false, undefined, this);
}

// src/components/ui/toast.tsx
"use client";
var toast = import_toast.Toast.createToastManager();
var createToastManager = import_toast.Toast.createToastManager;
var useToastManager = import_toast.Toast.useToastManager;

// src/registry/components/brand-assets-menu/brand-assets-menu.tsx
var jsx_dev_runtime8 = require("react/jsx-dev-runtime");
"use client";
function BrandAssetsMenu({
  logomark,
  logomarkSVG,
  logotypeSVG,
  brandGuidelinesURL,
  brandAssetsURL,
  children
}) {
  const { success } = import_react7.useTiks();
  return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ContextMenu, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ContextMenuTrigger, {
        render: children
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ContextMenuContent, {
        className: "w-fit",
        children: [
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ContextMenuItem, {
            onClick: () => {
              copyText(logomarkSVG);
              toast.add({ type: "success", title: "Logomark as SVG copied" });
              success();
            },
            children: [
              logomark,
              "Copy Logomark as SVG"
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ContextMenuItem, {
            onClick: () => {
              copyText(logotypeSVG);
              toast.add({ type: "success", title: "Logotype as SVG copied" });
              success();
            },
            children: [
              /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(import_lucide_react3.TypeIcon, {}, undefined, false, undefined, this),
              "Copy Logotype as SVG"
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ContextMenuSeparator, {}, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ContextMenuItem, {
            render: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV("a", {
              href: brandGuidelinesURL,
              target: "_blank",
              rel: "noopener noreferrer"
            }, undefined, false, undefined, this),
            children: [
              /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(import_lucide_react3.SquareDashedIcon, {}, undefined, false, undefined, this),
              "Brand Guidelines"
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ContextMenuItem, {
            render: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV("a", {
              href: brandAssetsURL,
              target: "_blank",
              rel: "noopener noreferrer",
              download: true
            }, undefined, false, undefined, this),
            children: [
              /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(import_lucide_react3.DownloadIcon, {}, undefined, false, undefined, this),
              "Download Brand Assets"
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};
// src/registry/components/carbon-ads/carbon-ads.tsx
var import_react8 = require("react");
var import_navigation = require("next/navigation");
var jsx_dev_runtime9 = require("react/jsx-dev-runtime");
"use client";
var SCRIPT_ID = "_carbonads_js";
function CarbonAds({
  serve,
  placement,
  format = "responsive",
  className
}) {
  const pathname = import_navigation.usePathname();
  const containerRef = import_react8.useRef(null);
  const [blocked, setBlocked] = import_react8.useState(false);
  import_react8.useEffect(() => {
    const container = containerRef.current;
    if (!container)
      return;
    const script = document.getElementById(SCRIPT_ID);
    if (script) {
      if (container.contains(script) && script.dataset.loaded) {
        window._carbonads?.refresh();
      }
      return;
    }
    const el = document.createElement("script");
    el.id = SCRIPT_ID;
    el.async = true;
    el.type = "text/javascript";
    el.src = `//cdn.carbonads.com/carbon.js?serve=${serve}&placement=${placement}&format=${format}`;
    el.onload = () => {
      el.dataset.loaded = "true";
    };
    el.onerror = () => setBlocked(true);
    container.appendChild(el);
  }, [pathname, serve, placement, format]);
  if (blocked)
    return null;
  return /* @__PURE__ */ jsx_dev_runtime9.jsxDEV("div", {
    ref: containerRef,
    "data-slot": "carbon-ads",
    "data-format": format,
    className: import_cn.cn("min-h-39 data-[format=cover]:min-h-70", className)
  }, undefined, false, undefined, this);
}
// src/registry/components/chevrons-up-down-icon/chevrons-up-down-icon.tsx
var import_react9 = require("react");
var import_react10 = require("motion/react");
var jsx_dev_runtime10 = require("react/jsx-dev-runtime");
"use client";
function ChevronsUpDownIcon({
  ref,
  duration = 0.3,
  ...props
}) {
  const controls = import_react10.useAnimation();
  import_react9.useImperativeHandle(ref, () => {
    return {
      startAnimation: () => controls.start("animate"),
      stopAnimation: () => controls.start("normal")
    };
  });
  return /* @__PURE__ */ jsx_dev_runtime10.jsxDEV("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props,
    children: [
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(import_react10.motion.path, {
        d: "M7 15L12 20L17 15",
        variants: {
          normal: {
            d: "M7 15L12 20L17 15"
          },
          animate: {
            d: "M7 20L12 15L17 20"
          }
        },
        initial: "normal",
        animate: controls,
        transition: {
          duration
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(import_react10.motion.path, {
        d: "M7 9L12 4L17 9",
        variants: {
          normal: {
            d: "M7 9L12 4L17 9"
          },
          animate: {
            d: "M7 4L12 9L17 4"
          }
        },
        initial: "normal",
        animate: controls,
        transition: {
          duration
        }
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// src/registry/components/code-block-command/code-block-command.tsx
var import_react16 = require("react");
var import_scroll_area = require("@base-ui/react/scroll-area");
var import_jotai = require("jotai");
var import_utils12 = require("jotai/utils");
var import_lucide_react5 = require("lucide-react");

// src/components/ui/tabs.tsx
var import_tabs = require("@base-ui/react/tabs");
var jsx_dev_runtime11 = require("react/jsx-dev-runtime");
"use client";
function Tabs({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(import_tabs.Tabs.Root, {
    "data-slot": "tabs",
    className: import_cn.cn("flex flex-col gap-2", className),
    ...props
  }, undefined, false, undefined, this);
}
function TabsList({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(import_tabs.Tabs.List, {
    "data-slot": "tabs-list",
    className: import_cn.cn("relative z-0 flex h-8 w-fit items-center justify-center rounded-lg p-0.5", "bg-zinc-50 text-muted-foreground dark:bg-zinc-900", "inset-ring-1 inset-ring-border/64", className),
    ...props
  }, undefined, false, undefined, this);
}
function TabsIndicator({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(import_tabs.Tabs.Indicator, {
    "data-slot": "tabs-indicator",
    className: import_cn.cn("absolute bottom-0 left-0 -z-1 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-(--active-tab-bottom) rounded-md bg-white transition-[width,translate] duration-200 ease-in-out dark:bg-muted", "inset-ring-1 inset-ring-foreground/10 dark:inset-ring-foreground/6", className),
    ...props
  }, undefined, false, undefined, this);
}
function TabsTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(import_tabs.Tabs.Tab, {
    "data-slot": "tabs-trigger",
    className: import_cn.cn("flex flex-1 shrink-0 items-center justify-center gap-2 rounded-md px-4 py-1 font-sans text-sm font-medium whitespace-nowrap transition-[color,background-color] outline-none hover:text-foreground focus-visible:inset-ring-1 focus-visible:inset-ring-ring disabled:pointer-events-none disabled:opacity-50 data-active:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
    ...props
  }, undefined, false, undefined, this);
}
function TabsContent({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(import_tabs.Tabs.Panel, {
    "data-slot": "tabs-content",
    className: import_cn.cn("flex-1 outline-none", className),
    ...props
  }, undefined, false, undefined, this);
}

// src/registry/components/copy-button/copy-button.tsx
var import_lucide_react4 = require("lucide-react");
var import_react15 = require("motion/react");

// src/hooks/use-copy-to-clipboard.ts
var import_react11 = require("react");
var import_react12 = require("@rexa-developer/tiks/react");
var import_react13 = require("web-haptics/react");
"use client";
function useCopyToClipboard({
  onCopySuccess,
  onCopyError,
  resetDelay = 1500
} = {}) {
  const [state, setState] = import_react11.useState("idle");
  const resetTimeoutRef = import_react11.useRef(null);
  const { trigger: haptic } = import_react13.useWebHaptics();
  const { success: tiksSuccess, error: tiksError } = import_react12.useTiks();
  const copy = import_react11.useCallback(async (text) => {
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }
    try {
      const finalText = typeof text === "function" ? text() : text;
      await navigator.clipboard.writeText(finalText);
      setState("done");
      haptic("success");
      tiksSuccess();
      onCopySuccess?.(finalText);
    } catch (error) {
      setState("error");
      haptic("error");
      tiksError();
      onCopyError?.(error instanceof Error ? error : new Error("Copy failed"));
    } finally {
      resetTimeoutRef.current = setTimeout(() => {
        setState("idle");
      }, resetDelay);
    }
  }, [onCopySuccess, onCopyError, haptic, tiksSuccess, tiksError, resetDelay]);
  return { state, copy };
}

// src/registry/components/icon-swap/icon-swap.tsx
var import_react14 = require("motion/react");
var jsx_dev_runtime12 = require("react/jsx-dev-runtime");
"use client";
function IconSwap(props) {
  return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(import_react14.AnimatePresence, {
    mode: "popLayout",
    initial: false,
    ...props
  }, undefined, false, undefined, this);
}
function IconSwapItem({
  as: Component = import_react14.motion.div,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(Component, {
    initial: { opacity: 0, scale: 0.25, filter: "blur(4px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.25, filter: "blur(4px)" },
    transition: {
      type: "spring",
      duration: 0.3,
      bounce: 0
    },
    ...props
  }, undefined, false, undefined, this);
}
// src/registry/components/copy-button/copy-button.tsx
var jsx_dev_runtime13 = require("react/jsx-dev-runtime");
"use client";
function CopyStateIcon({
  state,
  idleIcon,
  doneIcon,
  errorIcon
}) {
  return /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(IconSwap, {
    children: /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(IconSwapItem, {
      as: import_react15.motion.span,
      children: [
        state === "idle" && (idleIcon ?? /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(import_lucide_react4.CopyIcon, {
          "data-slot": "idle-icon"
        }, undefined, false, undefined, this)),
        state === "done" && (doneIcon ?? /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(import_lucide_react4.CheckIcon, {
          "data-slot": "done-icon"
        }, undefined, false, undefined, this)),
        state === "error" && (errorIcon ?? /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(import_lucide_react4.CircleXIcon, {
          "data-slot": "error-icon"
        }, undefined, false, undefined, this))
      ]
    }, state, true, undefined, this)
  }, undefined, false, undefined, this);
}
function CopyButton({
  className,
  size = "icon",
  children,
  text,
  idleIcon,
  doneIcon,
  errorIcon,
  onClick,
  onCopySuccess,
  onCopyError,
  ...props
}) {
  const { state, copy } = useCopyToClipboard({
    onCopySuccess,
    onCopyError
  });
  return /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(Button, {
    className: import_cn.cn("will-change-transform", className),
    size,
    onClick: (e) => {
      copy(text);
      onClick?.(e);
    },
    "aria-label": "Copy",
    ...props,
    children: [
      /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(CopyStateIcon, {
        state,
        idleIcon,
        doneIcon,
        errorIcon
      }, undefined, false, undefined, this),
      children
    ]
  }, undefined, true, undefined, this);
}
// src/registry/components/code-block-command/code-block-command.tsx
var jsx_dev_runtime14 = require("react/jsx-dev-runtime");
"use client";
var packageManagerAtom = import_utils12.atomWithStorage("packageManager", "pnpm");
function usePackageManager() {
  return import_jotai.useAtom(packageManagerAtom);
}
function CodeBlockCommand({
  prompt,
  pnpm,
  yarn,
  npm,
  bun,
  onCopySuccess,
  onCopyError
}) {
  const [packageManager, setPackageManager] = usePackageManager();
  const tabs = import_react16.useMemo(() => {
    return {
      prompt,
      pnpm,
      yarn,
      npm,
      bun
    };
  }, [prompt, pnpm, yarn, npm, bun]);
  const tabsFiltered = import_react16.useMemo(() => Object.entries(tabs).filter(([, value]) => !!value), [tabs]);
  return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV("div", {
    className: "relative overflow-hidden rounded-xl bg-code",
    children: [
      /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(Tabs, {
        className: "gap-0",
        value: packageManager,
        onValueChange: (value) => {
          setPackageManager(value);
        },
        children: [
          /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(import_scroll_area.ScrollArea.Root, {
            className: "w-full pr-10 shadow-[inset_0_-1px_0_0] shadow-border",
            children: /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(TabsList, {
              className: import_cn.cn("h-10 max-w-full justify-start rounded-none bg-transparent p-0 pl-4 inset-ring-0 dark:bg-transparent [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground", "[--scroll-area-overflow-x-end:inherit] [--scroll-area-overflow-x-start:inherit]", "mask-linear-[to_right,transparent_0,black_min(2.5rem,var(--scroll-area-overflow-x-start)),black_calc(100%-min(2.5rem,var(--scroll-area-overflow-x-end,2.5rem))),transparent_100%]"),
              render: /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(import_scroll_area.ScrollArea.Viewport, {}, undefined, false, undefined, this),
              children: [
                /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(IconSwap, {
                  children: /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(IconSwapItem, {
                    className: "mr-2",
                    children: getIconForPackageManager(packageManager)
                  }, packageManager, false, undefined, this)
                }, undefined, false, undefined, this),
                tabsFiltered.map(([key]) => {
                  return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(TabsTrigger, {
                    className: "h-7 rounded-lg p-0 px-2 font-mono",
                    value: key,
                    children: key
                  }, key, false, undefined, this);
                }),
                /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(TabsIndicator, {
                  className: "h-0.5 translate-y-0 rounded-none bg-foreground ring-0 dark:bg-foreground"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          tabsFiltered.map(([key, value]) => {
            return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(TabsContent, {
              value: key,
              children: /* @__PURE__ */ jsx_dev_runtime14.jsxDEV("pre", {
                "data-pm": key,
                className: "group/tabs-content-pre overscroll-x-contain p-4 leading-6 not-data-[pm=prompt]:overflow-x-auto",
                children: /* @__PURE__ */ jsx_dev_runtime14.jsxDEV("code", {
                  "data-slot": "code-block",
                  "data-language": "bash",
                  className: "font-mono text-sm/none text-muted-foreground group-data-[pm=prompt]/tabs-content-pre:whitespace-normal",
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime14.jsxDEV("span", {
                      className: "select-none group-data-[pm=prompt]/tabs-content-pre:hidden",
                      children: [
                        "$",
                        " "
                      ]
                    }, undefined, true, undefined, this),
                    value
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this)
            }, key, false, undefined, this);
          })
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(CopyButton, {
        className: "absolute top-2 right-2 z-10 size-6 rounded-md border-none [&_svg:not([class*='size-'])]:size-3.5",
        variant: "ghost",
        size: "icon-sm",
        text: tabs[packageManager] || "",
        onCopySuccess: (copiedCommand) => {
          onCopySuccess?.({
            packageManager,
            command: copiedCommand
          });
        },
        onCopyError
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function getIconForPackageManager(manager) {
  switch (manager) {
    case "prompt":
      return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(import_lucide_react5.TextAlignStartIcon, {}, undefined, false, undefined, this);
    case "pnpm":
      return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV("svg", {
        viewBox: "0 0 24 24",
        children: /* @__PURE__ */ jsx_dev_runtime14.jsxDEV("path", {
          d: "M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z",
          fill: "currentColor"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this);
    case "yarn":
      return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV("svg", {
        viewBox: "0 0 24 24",
        children: /* @__PURE__ */ jsx_dev_runtime14.jsxDEV("path", {
          d: "M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z",
          fill: "currentColor"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this);
    case "npm":
      return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV("svg", {
        viewBox: "0 0 24 24",
        children: /* @__PURE__ */ jsx_dev_runtime14.jsxDEV("path", {
          d: "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z",
          fill: "currentColor"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this);
    case "bun":
      return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV("svg", {
        viewBox: "0 0 24 24",
        children: /* @__PURE__ */ jsx_dev_runtime14.jsxDEV("path", {
          d: "M12 22.596c6.628 0 12-4.338 12-9.688 0-3.318-2.057-6.248-5.219-7.986-1.286-.715-2.297-1.357-3.139-1.89C14.058 2.025 13.08 1.404 12 1.404c-1.097 0-2.334.785-3.966 1.821a49.92 49.92 0 0 1-2.816 1.697C2.057 6.66 0 9.59 0 12.908c0 5.35 5.372 9.687 12 9.687v.001ZM10.599 4.715c.334-.759.503-1.58.498-2.409 0-.145.202-.187.23-.029.658 2.783-.902 4.162-2.057 4.624-.124.048-.199-.121-.103-.209a5.763 5.763 0 0 0 1.432-1.977Zm2.058-.102a5.82 5.82 0 0 0-.782-2.306v-.016c-.069-.123.086-.263.185-.172 1.962 2.111 1.307 4.067.556 5.051-.082.103-.23-.003-.189-.126a5.85 5.85 0 0 0 .23-2.431Zm1.776-.561a5.727 5.727 0 0 0-1.612-1.806v-.014c-.112-.085-.024-.274.114-.218 2.595 1.087 2.774 3.18 2.459 4.407a.116.116 0 0 1-.049.071.11.11 0 0 1-.153-.026.122.122 0 0 1-.022-.083 5.891 5.891 0 0 0-.737-2.331Zm-5.087.561c-.617.546-1.282.76-2.063 1-.117 0-.195-.078-.156-.181 1.752-.909 2.376-1.649 2.999-2.778 0 0 .155-.118.188.085 0 .304-.349 1.329-.968 1.874Zm4.945 11.237a2.957 2.957 0 0 1-.937 1.553c-.346.346-.8.565-1.286.62a2.178 2.178 0 0 1-1.327-.62 2.955 2.955 0 0 1-.925-1.553.244.244 0 0 1 .064-.198.234.234 0 0 1 .193-.069h3.965a.226.226 0 0 1 .19.07c.05.053.073.125.063.197Zm-5.458-2.176a1.862 1.862 0 0 1-2.384-.245 1.98 1.98 0 0 1-.233-2.447c.207-.319.503-.566.848-.713a1.84 1.84 0 0 1 1.092-.11c.366.075.703.261.967.531a1.98 1.98 0 0 1 .408 2.114 1.931 1.931 0 0 1-.698.869v.001Zm8.495.005a1.86 1.86 0 0 1-2.381-.253 1.964 1.964 0 0 1-.547-1.366c0-.384.11-.76.32-1.079.207-.319.503-.567.849-.713a1.844 1.844 0 0 1 1.093-.108c.367.076.704.262.968.534a1.98 1.98 0 0 1 .4 2.117 1.932 1.932 0 0 1-.702.868Z",
          fill: "currentColor"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this);
    default:
      return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(import_lucide_react5.TerminalIcon, {}, undefined, false, undefined, this);
  }
}
function convertNpmCommand(npmCommand) {
  if (npmCommand.startsWith("npm install")) {
    return {
      pnpm: npmCommand.replaceAll("npm install", "pnpm add"),
      yarn: npmCommand.replaceAll("npm install", "yarn add"),
      npm: npmCommand,
      bun: npmCommand.replaceAll("npm install", "bun add")
    };
  }
  if (npmCommand.startsWith("npx create-")) {
    return {
      pnpm: npmCommand.replace("npx create-", "pnpm create "),
      yarn: npmCommand.replace("npx create-", "yarn create "),
      npm: npmCommand,
      bun: npmCommand.replace("npx", "bunx --bun")
    };
  }
  if (npmCommand.startsWith("npm create")) {
    return {
      pnpm: npmCommand.replace("npm create", "pnpm create"),
      yarn: npmCommand.replace("npm create", "yarn create"),
      npm: npmCommand,
      bun: npmCommand.replace("npm create", "bun create")
    };
  }
  if (npmCommand.startsWith("npx")) {
    return {
      pnpm: npmCommand.replace("npx", "pnpm dlx"),
      yarn: npmCommand.replace("npx", "yarn dlx"),
      npm: npmCommand,
      bun: npmCommand.replace("npx", "bunx --bun")
    };
  }
  if (npmCommand.startsWith("npm run")) {
    return {
      pnpm: npmCommand.replace("npm run", "pnpm"),
      yarn: npmCommand.replace("npm run", "yarn"),
      npm: npmCommand,
      bun: npmCommand.replace("npm run", "bun")
    };
  }
  return {
    pnpm: npmCommand,
    yarn: npmCommand,
    npm: npmCommand,
    bun: npmCommand
  };
}
// src/registry/components/consent-manager/consent-manager.tsx
var import_nextjs = require("@c15t/nextjs");
var jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function ConsentManager({ children }) {
  return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(import_nextjs.ConsentManagerProvider, {
    options: {
      mode: "offline",
      consentCategories: ["necessary", "measurement"]
    },
    children: [
      /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(import_nextjs.CookieBanner, {
        theme: {
          "banner.card": {
            noStyle: true,
            className: import_cn.cn("relative w-full max-w-(--banner-max-width) divide-y overflow-hidden rounded-2xl", "bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/10 dark:ring-foreground/20")
          },
          "banner.header.title": {
            noStyle: true,
            className: "text-base leading-none font-medium text-foreground"
          },
          "banner.header.description": {
            noStyle: true,
            className: "text-sm text-muted-foreground"
          },
          "banner.footer": {
            style: {
              "--banner-footer-background-color": "transparent",
              "--banner-footer-background-color-dark": "transparent"
            }
          },
          "banner.footer.reject-button": {
            noStyle: true,
            className: buttonVariants({ variant: "secondary" })
          },
          "banner.footer.accept-button": {
            noStyle: true,
            className: buttonVariants({ variant: "secondary" })
          },
          "banner.footer.customize-button": {
            noStyle: true,
            className: buttonVariants({ variant: "default" })
          }
        }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(import_nextjs.ConsentManagerDialog, {
        theme: {
          "dialog.root": {
            style: {
              "--dialog-height": "100%",
              "--dialog-font-family": "var(--font-sans)",
              "--dialog-background-color": "var(--background)",
              "--dialog-background-color-dark": "var(--background)",
              "--dialog-border-width": "0",
              "--dialog-border-color": "var(--border)",
              "--dialog-border-color-dark": "var(--border)",
              "--dialog-card-radius": "1rem",
              "--dialog-card-shadow": "0 0 0 1px var(--dialog-card-shadow-color)"
            },
            className: "[--dialog-card-shadow-color:var(--foreground)]/10 dark:[--dialog-card-shadow-color:var(--border)]"
          },
          "dialog.overlay": {
            style: {
              "--dialog-overlay-background-color": "lab(0% 0 0 / 0.2)",
              "--dialog-overlay-background-color-dark": "lab(0% 0 0 / 0.4)"
            }
          },
          "dialog.title": {
            noStyle: true,
            className: "text-base leading-none font-medium tracking-tight text-foreground"
          },
          "dialog.description": {
            noStyle: true,
            className: "text-sm text-muted-foreground"
          },
          "dialog.header": {
            style: {
              "--dialog-header-gap": "0.5rem",
              "--dialog-card-gap": "0"
            }
          },
          "dialog.footer": {
            style: {
              "--dialog-border-width": "1px",
              "--dialog-stroke-color": "var(--border)",
              "--dialog-stroke-color-dark": "var(--border)",
              "--dialog-branding-icon-height": "1.125rem",
              "--dialog-branding-font-size": "0.875rem",
              "--dialog-branding-focus-color": "color-mix(in oklab, var(--ring) 50%, transparent)",
              "--dialog-branding-focus-color-dark": "color-mix(in oklab, var(--ring) 50%, transparent)",
              "--dialog-foreground-color": "var(--muted-foreground)",
              "--dialog-foreground-color-dark": "var(--muted-foreground)"
            }
          },
          "widget.accordion.item": {
            noStyle: true,
            className: "rounded-lg border"
          },
          "widget.accordion.trigger": {
            noStyle: true,
            className: "flex items-center gap-3 pr-3"
          },
          "widget.accordion.trigger-inner": {
            noStyle: true,
            className: import_cn.cn("flex flex-1 items-center rounded-lg px-4 py-3 text-sm font-medium text-foreground **:[svg]:hidden", "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50")
          },
          "widget.accordion.content": {
            noStyle: true,
            className: "overflow-hidden px-4 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
          },
          "widget.accordion.content-inner": {
            noStyle: true,
            className: "pb-4 text-sm text-muted-foreground"
          },
          "widget.switch": {
            noStyle: true,
            className: import_cn.cn("inline-flex h-4.5 w-8 shrink-0 items-center rounded-full transition-all", "border border-transparent", "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "disabled:cursor-not-allowed disabled:opacity-50", "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80")
          },
          "widget.switch.track": {
            noStyle: true
          },
          "widget.switch.thumb": {
            noStyle: true,
            className: import_cn.cn("pointer-events-none block size-4 rounded-full bg-background ring-0 transition-[translate,background-color]", "data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground")
          },
          "widget.footer.sub-group": {
            noStyle: true,
            className: "grid grid-cols-2 gap-4 sm:flex"
          },
          "widget.footer.reject-button": {
            noStyle: true,
            className: buttonVariants({ variant: "secondary" })
          },
          "widget.footer.accept-button": {
            noStyle: true,
            className: buttonVariants({ variant: "secondary" })
          },
          "widget.footer.save-button": {
            noStyle: true,
            className: buttonVariants({ variant: "default" })
          }
        }
      }, undefined, false, undefined, this),
      children
    ]
  }, undefined, true, undefined, this);
}
// src/registry/components/contribution-graph/contribution-graph.tsx
var import_react17 = require("react");
var import_date_fns = require("date-fns");
var jsx_dev_runtime16 = require("react/jsx-dev-runtime");
"use client";
var DEFAULT_MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
var DEFAULT_LABELS = {
  months: DEFAULT_MONTH_LABELS,
  weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  totalCount: "{{count}} activities in {{year}}",
  legend: {
    less: "Less",
    more: "More"
  }
};
var THEME = import_cn.cn('data-[level="0"]:fill-muted-foreground/5', 'data-[level="1"]:fill-muted-foreground/20', 'data-[level="2"]:fill-muted-foreground/40', 'data-[level="3"]:fill-muted-foreground/60', 'data-[level="4"]:fill-muted-foreground/80');
var ContributionGraphContext = import_react17.createContext(null);
var useContributionGraph = () => {
  const context = import_react17.useContext(ContributionGraphContext);
  if (!context) {
    throw new Error("ContributionGraph components must be used within a ContributionGraph");
  }
  return context;
};
var fillHoles = (activities) => {
  if (activities.length === 0) {
    return [];
  }
  const sortedActivities = [...activities].sort((a, b) => a.date.localeCompare(b.date));
  const calendar = new Map(activities.map((a) => [a.date, a]));
  const firstActivity = sortedActivities[0];
  const lastActivity = sortedActivities.at(-1);
  if (!lastActivity) {
    return [];
  }
  return import_date_fns.eachDayOfInterval({
    start: import_date_fns.parseISO(firstActivity.date),
    end: import_date_fns.parseISO(lastActivity.date)
  }).map((day) => {
    const date = import_date_fns.formatISO(day, { representation: "date" });
    if (calendar.has(date)) {
      return calendar.get(date);
    }
    return {
      date,
      count: 0,
      level: 0
    };
  });
};
var groupByWeeks = (activities, weekStart = 0) => {
  if (activities.length === 0) {
    return [];
  }
  const normalizedActivities = fillHoles(activities);
  const firstActivity = normalizedActivities[0];
  const firstDate = import_date_fns.parseISO(firstActivity.date);
  const firstCalendarDate = import_date_fns.getDay(firstDate) === weekStart ? firstDate : import_date_fns.subWeeks(import_date_fns.nextDay(firstDate, weekStart), 1);
  const paddedActivities = [
    ...new Array(import_date_fns.differenceInCalendarDays(firstDate, firstCalendarDate)).fill(undefined),
    ...normalizedActivities
  ];
  const numberOfWeeks = Math.ceil(paddedActivities.length / 7);
  return new Array(numberOfWeeks).fill(undefined).map((_, weekIndex) => paddedActivities.slice(weekIndex * 7, weekIndex * 7 + 7));
};
var getMonthLabels = (weeks, monthNames = DEFAULT_MONTH_LABELS) => {
  return weeks.reduce((labels, week, weekIndex) => {
    const firstActivity = week.find((activity) => activity !== undefined);
    if (!firstActivity) {
      throw new Error(`Unexpected error: Week ${weekIndex + 1} is empty: [${week}].`);
    }
    const month = monthNames[import_date_fns.getMonth(import_date_fns.parseISO(firstActivity.date))];
    if (!month) {
      const monthName = new Date(firstActivity.date).toLocaleString("en-US", {
        month: "short"
      });
      throw new Error(`Unexpected error: undefined month label for ${monthName}.`);
    }
    const prevLabel = labels.at(-1);
    if (weekIndex === 0 || !prevLabel || prevLabel.label !== month) {
      return labels.concat({ weekIndex, label: month });
    }
    return labels;
  }, []).filter(({ weekIndex }, index, labels) => {
    const minWeeks = 3;
    if (index === 0) {
      return labels[1] && labels[1].weekIndex - weekIndex >= minWeeks;
    }
    if (index === labels.length - 1) {
      return weeks.slice(weekIndex).length >= minWeeks;
    }
    return true;
  });
};
var ContributionGraph = ({
  data,
  blockMargin = 4,
  blockRadius = 2,
  blockSize = 12,
  fontSize = 14,
  labels: labelsProp = undefined,
  maxLevel: maxLevelProp = 4,
  style = {},
  totalCount: totalCountProp = undefined,
  weekStart = 0,
  className,
  ...props
}) => {
  const maxLevel = Math.max(1, maxLevelProp);
  const weeks = import_react17.useMemo(() => groupByWeeks(data, weekStart), [data, weekStart]);
  const LABEL_MARGIN = 8;
  const labels = { ...DEFAULT_LABELS, ...labelsProp };
  const labelHeight = fontSize + LABEL_MARGIN;
  const year = data.length > 0 ? import_date_fns.getYear(import_date_fns.parseISO(data[0].date)) : new Date().getFullYear();
  const totalCount = typeof totalCountProp === "number" ? totalCountProp : data.reduce((sum, activity) => sum + activity.count, 0);
  const width = weeks.length * (blockSize + blockMargin) - blockMargin;
  const height = labelHeight + (blockSize + blockMargin) * 7 - blockMargin;
  if (data.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(ContributionGraphContext.Provider, {
    value: {
      data,
      weeks,
      blockMargin,
      blockRadius,
      blockSize,
      fontSize,
      labels,
      labelHeight,
      maxLevel,
      totalCount,
      weekStart,
      year,
      width,
      height
    },
    children: /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("div", {
      className: import_cn.cn("flex w-max max-w-full flex-col gap-2", className),
      style: { fontSize, ...style },
      ...props
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
var ContributionGraphBlock = ({
  activity,
  dayIndex,
  weekIndex,
  className,
  ...props
}) => {
  const { blockSize, blockMargin, blockRadius, labelHeight, maxLevel } = useContributionGraph();
  if (activity.level < 0 || activity.level > maxLevel) {
    throw new RangeError(`Provided activity level ${activity.level} for ${activity.date} is out of range. It must be between 0 and ${maxLevel}.`);
  }
  return /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("rect", {
    className: import_cn.cn(THEME, className),
    "data-count": activity.count,
    "data-date": activity.date,
    "data-level": activity.level,
    height: blockSize,
    rx: blockRadius,
    ry: blockRadius,
    width: blockSize,
    x: (blockSize + blockMargin) * weekIndex,
    y: labelHeight + (blockSize + blockMargin) * dayIndex,
    ...props
  }, undefined, false, undefined, this);
};
var ContributionGraphCalendar = ({
  title = "Contribution Graph",
  hideMonthLabels = false,
  className,
  children,
  ...props
}) => {
  const { weeks, width, height, blockSize, blockMargin, labels } = useContributionGraph();
  const monthLabels = import_react17.useMemo(() => getMonthLabels(weeks, labels.months), [weeks, labels.months]);
  return /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("div", {
    className: import_cn.cn("no-scrollbar max-w-full scroll-fade-x overflow-x-auto overflow-y-hidden", className),
    ...props,
    children: /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("svg", {
      className: "block overflow-visible",
      height,
      viewBox: `0 0 ${width} ${height}`,
      width,
      children: [
        /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("title", {
          children: title
        }, undefined, false, undefined, this),
        !hideMonthLabels && /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("g", {
          "data-slot": "month-labels",
          className: "fill-current selection:fill-selection-foreground",
          children: monthLabels.map(({ label, weekIndex }) => /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("text", {
            dominantBaseline: "hanging",
            x: (blockSize + blockMargin) * weekIndex,
            children: label
          }, weekIndex, false, undefined, this))
        }, undefined, false, undefined, this),
        weeks.map((week, weekIndex) => week.map((activity, dayIndex) => {
          if (!activity) {
            return null;
          }
          return /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(import_react17.Fragment, {
            children: children({ activity, dayIndex, weekIndex })
          }, `${weekIndex}-${dayIndex}`, false, undefined, this);
        }))
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
};
var ContributionGraphFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("div", {
  className: import_cn.cn("flex flex-wrap gap-1 whitespace-nowrap sm:gap-x-4", className),
  ...props
}, undefined, false, undefined, this);
var ContributionGraphTotalCount = ({
  className,
  children,
  ...props
}) => {
  const { totalCount, year, labels } = useContributionGraph();
  if (children) {
    return /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(jsx_dev_runtime16.Fragment, {
      children: children({ totalCount, year })
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("div", {
    className: import_cn.cn("text-muted-foreground", className),
    ...props,
    children: labels.totalCount ? labels.totalCount.replace("{{count}}", String(totalCount)).replace("{{year}}", String(year)) : `${totalCount} activities in ${year}`
  }, undefined, false, undefined, this);
};
var ContributionGraphLegend = ({
  className,
  children,
  ...props
}) => {
  const { labels, maxLevel, blockSize, blockRadius, blockMargin } = useContributionGraph();
  return /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("div", {
    className: import_cn.cn("ml-auto flex items-center", className),
    style: { gap: blockMargin },
    ...props,
    children: [
      /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("span", {
        className: "mr-1 text-muted-foreground",
        children: labels.legend?.less || "Less"
      }, undefined, false, undefined, this),
      new Array(maxLevel + 1).fill(undefined).map((_, level) => children ? /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(import_react17.Fragment, {
        children: children({ level })
      }, level, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("svg", {
        height: blockSize,
        width: blockSize,
        children: [
          /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("title", {
            children: `${level} contributions`
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("rect", {
            className: import_cn.cn(THEME),
            "data-level": level,
            height: blockSize,
            rx: blockRadius,
            ry: blockRadius,
            width: blockSize
          }, undefined, false, undefined, this)
        ]
      }, level, true, undefined, this)),
      /* @__PURE__ */ jsx_dev_runtime16.jsxDEV("span", {
        className: "ml-1 text-muted-foreground",
        children: labels.legend?.more || "More"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
// src/registry/components/dot-grid-spotlight/dot-grid-spotlight.tsx
var import_react18 = require("react");
var jsx_dev_runtime17 = require("react/jsx-dev-runtime");
"use client";
function DotGridSpotlight({
  dotColor = "rgba(255, 255, 255, 0.05)",
  activeDotColor = "rgba(255, 255, 255, 0.1)",
  spacing = 10,
  baseRadius = 1,
  activeRadius = 2,
  interactionRadius = 128,
  activeMaxAlpha = 1,
  activeMinAlpha = 0.5,
  className
}) {
  const canvasRef = import_react18.useRef(null);
  const mouse = import_react18.useRef({ x: -1000, y: -1000, isActive: false });
  import_react18.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas)
      return;
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    let width = 0;
    let height = 0;
    let renderFrameId = null;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const offsetX = width % spacing / 2;
      const offsetY = height % spacing / 2;
      for (let x = offsetX;x <= width; x += spacing) {
        for (let y = offsetY;y <= height; y += spacing) {
          const dx = x - mouse.current.x;
          const dy = y - mouse.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          let currentRadius = baseRadius;
          let currentColor = dotColor;
          let currentAlpha = 1;
          if (mouse.current.isActive && distance < interactionRadius) {
            const factor = 1 - distance / interactionRadius;
            currentRadius = baseRadius + (activeRadius - baseRadius) * factor;
            currentColor = activeDotColor;
            currentAlpha = activeMinAlpha + (activeMaxAlpha - activeMinAlpha) * factor;
          }
          ctx.globalAlpha = currentAlpha;
          ctx.beginPath();
          ctx.arc(x, y, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = currentColor;
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent)
        return;
      const dpr = window.devicePixelRatio || 1;
      width = parent.clientWidth;
      height = parent.clientHeight;
      if (width === 0 || height === 0)
        return;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      draw();
      requestAnimationFrame(() => {
        canvas.dataset.ready = "true";
      });
    };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isActive: true
      };
      if (renderFrameId === null) {
        renderFrameId = requestAnimationFrame(() => {
          draw();
          renderFrameId = null;
        });
      }
    };
    const handleMouseLeave = () => {
      mouse.current.isActive = false;
      if (renderFrameId === null) {
        renderFrameId = requestAnimationFrame(() => {
          draw();
          renderFrameId = null;
        });
      }
    };
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    const resizeObserver = new ResizeObserver(() => resizeCanvas());
    if (canvas.parentElement)
      resizeObserver.observe(canvas.parentElement);
    resizeCanvas();
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserver.disconnect();
      if (renderFrameId !== null)
        cancelAnimationFrame(renderFrameId);
    };
  }, [
    spacing,
    baseRadius,
    activeRadius,
    interactionRadius,
    dotColor,
    activeDotColor,
    activeMaxAlpha,
    activeMinAlpha
  ]);
  const handleMouseMove = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isActive: true
      };
    }
  };
  const handleMouseLeave = () => {
    mouse.current.isActive = false;
  };
  return /* @__PURE__ */ jsx_dev_runtime17.jsxDEV("canvas", {
    ref: canvasRef,
    "data-ready": "false",
    className: import_cn.cn("pointer-events-auto absolute inset-0 block opacity-0 transition-opacity! duration-500 data-[ready=true]:opacity-100", className),
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  }, undefined, false, undefined, this);
}
// src/registry/components/elastic-slider/elastic-slider.tsx
var import_react19 = require("react");
var import_react20 = require("motion/react");

// src/registry/hooks/use-controllable-state/use-controllable-state.tsx
var React2 = __toESM(require("react"));
var useLayoutEffect3 = globalThis?.document ? React2.useLayoutEffect : () => {};
var useInsertionEffect = React2[" useInsertionEffect ".trim().toString()] || useLayoutEffect3;
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {},
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;
  if (true) {
    const isControlledRef = React2.useRef(prop !== undefined);
    React2.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = React2.useCallback((nextValue) => {
    if (isControlled) {
      const value = isFunction(nextValue) ? nextValue(prop) : nextValue;
      if (value !== prop) {
        onChangeRef.current?.(value);
      }
    } else {
      setUncontrolledProp(nextValue);
    }
  }, [isControlled, prop, setUncontrolledProp, onChangeRef]);
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = React2.useState(defaultProp);
  const prevValueRef = React2.useRef(value);
  const onChangeRef = React2.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  React2.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
function isFunction(value) {
  return typeof value === "function";
}
// src/registry/components/elastic-slider/elastic-slider.tsx
var jsx_dev_runtime18 = require("react/jsx-dev-runtime");
"use client";
var CLICK_THRESHOLD = 3;
var DEAD_ZONE = 32;
var MAX_CURSOR_RANGE = 200;
var MAX_STRETCH = 8;
var HANDLE_BUFFER = 8;
var LABEL_OFFSET = 12 + 4;
var VALUE_OFFSET = 12 - 8;
function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}
function decimalsForStep(step) {
  const s = step.toString();
  const dot = s.indexOf(".");
  return dot === -1 ? 0 : s.length - dot - 1;
}
function roundValue(val, step) {
  const raw = Math.round(val / step) * step;
  return parseFloat(raw.toFixed(decimalsForStep(step)));
}
function snapToDecile(rawValue, min, max) {
  const normalized = (rawValue - min) / (max - min);
  const nearest = Math.round(normalized * 10) / 10;
  if (Math.abs(normalized - nearest) <= 0.03125) {
    return min + nearest * (max - min);
  }
  return rawValue;
}
function ElasticSlider({
  label,
  value: valueProp,
  defaultValue,
  onValueChange,
  min = 0,
  max = 1,
  step = 0.01,
  formatValue,
  className,
  "aria-label": ariaLabel
}) {
  const [value = min, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? min,
    onChange: onValueChange
  });
  const shouldReduceMotion = import_react20.useReducedMotion();
  const wrapperRef = import_react19.useRef(null);
  const trackRef = import_react19.useRef(null);
  const labelRef = import_react19.useRef(null);
  const valueRef = import_react19.useRef(null);
  const [isInteracting, setIsInteracting] = import_react19.useState(false);
  const [isDragging, setIsDragging] = import_react19.useState(false);
  const [isHovered, setIsHovered] = import_react19.useState(false);
  const [keyboardFocusRing, setKeyboardFocusRing] = import_react19.useState(false);
  const pointerDownPos = import_react19.useRef(null);
  const pendingPointerFocusRef = import_react19.useRef(false);
  const isClickRef = import_react19.useRef(true);
  const animRef = import_react19.useRef(null);
  const wrapperRectRef = import_react19.useRef(null);
  const scaleRef = import_react19.useRef(1);
  const percentage = (value - min) / (max - min) * 100;
  const isActive = isInteracting || isHovered;
  const displayValue = formatValue ? formatValue(value) : value.toFixed(decimalsForStep(step));
  const fillPercent = import_react20.useMotionValue(percentage);
  const fillWidth = import_react20.useTransform(fillPercent, (pct) => `${pct}%`);
  const handleLeft = import_react20.useTransform(fillPercent, (pct) => `max(4px, calc(${pct}% - 8px))`);
  const rubberStretch = import_react20.useMotionValue(0);
  const rubberWidth = import_react20.useTransform(rubberStretch, (s) => `calc(100% + ${Math.abs(s)}px)`);
  const rubberX = import_react20.useTransform(rubberStretch, (s) => s < 0 ? s : 0);
  import_react19.useEffect(() => {
    if (!isInteracting && !animRef.current) {
      fillPercent.jump(percentage);
    }
  }, [percentage, isInteracting, fillPercent]);
  const positionToValue = import_react19.useCallback((clientX) => {
    const rect = wrapperRectRef.current;
    if (!rect)
      return min;
    const sceneX = (clientX - rect.left) / scaleRef.current;
    const nativeWidth = wrapperRef.current?.offsetWidth ?? rect.width;
    const percent = clamp(sceneX / nativeWidth, 0, 1);
    return clamp(min + percent * (max - min), min, max);
  }, [min, max]);
  const percentFromValue = import_react19.useCallback((v) => (v - min) / (max - min) * 100, [min, max]);
  const animateFillTo = import_react19.useCallback((targetPercent) => {
    animRef.current?.stop();
    if (shouldReduceMotion) {
      fillPercent.jump(targetPercent);
      animRef.current = null;
      return;
    }
    animRef.current = import_react20.animate(fillPercent, targetPercent, {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.8,
      onComplete: () => {
        animRef.current = null;
      }
    });
  }, [fillPercent, shouldReduceMotion]);
  const computeRubberStretch = import_react19.useCallback((clientX, sign) => {
    const rect = wrapperRectRef.current;
    if (!rect)
      return 0;
    const distancePast = sign < 0 ? rect.left - clientX : clientX - rect.right;
    const overflow = Math.max(0, distancePast - DEAD_ZONE);
    return sign * MAX_STRETCH * Math.sqrt(Math.min(overflow / MAX_CURSOR_RANGE, 1));
  }, []);
  const handlePointerDown = import_react19.useCallback((e) => {
    e.preventDefault();
    e.target.setPointerCapture(e.pointerId);
    pointerDownPos.current = { x: e.clientX, y: e.clientY };
    isClickRef.current = true;
    setIsInteracting(true);
    pendingPointerFocusRef.current = true;
    setKeyboardFocusRing(false);
    trackRef.current?.focus({ preventScroll: true });
    requestAnimationFrame(() => {
      pendingPointerFocusRef.current = false;
    });
    const wrapper = wrapperRef.current;
    if (wrapper) {
      const rect = wrapper.getBoundingClientRect();
      wrapperRectRef.current = rect;
      scaleRef.current = rect.width / wrapper.offsetWidth;
    }
  }, []);
  const handlePointerMove = import_react19.useCallback((e) => {
    if (!isInteracting || !pointerDownPos.current)
      return;
    const dx = e.clientX - pointerDownPos.current.x;
    const dy = e.clientY - pointerDownPos.current.y;
    if (isClickRef.current && Math.hypot(dx, dy) > CLICK_THRESHOLD) {
      isClickRef.current = false;
      setIsDragging(true);
    }
    if (isClickRef.current)
      return;
    const rect = wrapperRectRef.current;
    if (rect && !shouldReduceMotion) {
      if (e.clientX < rect.left) {
        rubberStretch.jump(computeRubberStretch(e.clientX, -1));
      } else if (e.clientX > rect.right) {
        rubberStretch.jump(computeRubberStretch(e.clientX, 1));
      } else {
        rubberStretch.jump(0);
      }
    }
    const newValue = positionToValue(e.clientX);
    animRef.current?.stop();
    animRef.current = null;
    fillPercent.jump(percentFromValue(newValue));
    setValue(roundValue(newValue, step));
  }, [
    isInteracting,
    positionToValue,
    percentFromValue,
    setValue,
    step,
    fillPercent,
    rubberStretch,
    computeRubberStretch,
    shouldReduceMotion
  ]);
  const handlePointerUp = import_react19.useCallback((e) => {
    if (!isInteracting)
      return;
    if (isClickRef.current) {
      const rawValue = positionToValue(e.clientX);
      const discreteSteps = (max - min) / step;
      const snapped = discreteSteps <= 10 ? clamp(min + Math.round((rawValue - min) / step) * step, min, max) : snapToDecile(rawValue, min, max);
      animateFillTo(percentFromValue(snapped));
      setValue(roundValue(snapped, step));
    }
    if (!shouldReduceMotion && rubberStretch.get() !== 0) {
      import_react20.animate(rubberStretch, 0, {
        type: "spring",
        visualDuration: 0.35,
        bounce: 0.15
      });
    }
    setIsInteracting(false);
    setIsDragging(false);
    pointerDownPos.current = null;
  }, [
    isInteracting,
    positionToValue,
    percentFromValue,
    setValue,
    min,
    max,
    step,
    animateFillTo,
    rubberStretch,
    shouldReduceMotion
  ]);
  const handleKeyDown = import_react19.useCallback((e) => {
    const arrowStep = e.shiftKey ? step * 10 : step;
    let next = null;
    switch (e.key) {
      case "ArrowRight":
      case "ArrowUp":
        next = value + arrowStep;
        break;
      case "ArrowLeft":
      case "ArrowDown":
        next = value - arrowStep;
        break;
      case "Home":
        next = min;
        break;
      case "End":
        next = max;
        break;
      default:
        return;
    }
    e.preventDefault();
    setKeyboardFocusRing(true);
    const snapped = roundValue(clamp(next, min, max), step);
    animateFillTo(percentFromValue(snapped));
    setValue(snapped);
  }, [value, min, max, step, animateFillTo, percentFromValue, setValue]);
  const handleTrackFocus = import_react19.useCallback(() => {
    if (!pendingPointerFocusRef.current) {
      setKeyboardFocusRing(true);
    }
  }, []);
  const handleTrackBlur = import_react19.useCallback(() => {
    setKeyboardFocusRing(false);
  }, []);
  const [dodge, setDodge] = import_react19.useState({ left: 38, right: 72 });
  import_react19.useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper)
      return;
    const measure = () => {
      const trackWidth = wrapper.offsetWidth;
      if (trackWidth <= 0)
        return;
      const labelEl = labelRef.current;
      const valueEl = valueRef.current;
      const left = labelEl ? (LABEL_OFFSET + labelEl.offsetWidth + HANDLE_BUFFER) / trackWidth * 100 : 38;
      const right = valueEl ? (trackWidth - VALUE_OFFSET - valueEl.offsetWidth - HANDLE_BUFFER) / trackWidth * 100 : 72;
      setDodge((prev) => {
        return prev.left === left && prev.right === right ? prev : { left, right };
      });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(wrapper);
    if (labelRef.current)
      observer.observe(labelRef.current);
    if (valueRef.current)
      observer.observe(valueRef.current);
    return () => observer.disconnect();
  }, [label, displayValue]);
  const valueDodge = percentage < dodge.left || percentage > dodge.right;
  const handleOpacity = !isActive ? 0 : valueDodge ? 0.1 : isDragging ? 0.8 : 0.5;
  const discreteSteps = (max - min) / step;
  const hashMarkCount = discreteSteps <= 10 ? discreteSteps - 1 : 9;
  const hashMarkPct = (i) => {
    return discreteSteps <= 10 ? (i + 1) * step / (max - min) * 100 : (i + 1) * 10;
  };
  return /* @__PURE__ */ jsx_dev_runtime18.jsxDEV("div", {
    ref: wrapperRef,
    "data-slot": "elastic-slider",
    className: import_cn.cn("[--elastic-slider-height:--spacing(9)] [--elastic-slider-radius:var(--radius-lg)]", "[--elastic-slider-bg:var(--muted)]", "[--elastic-slider-fill:var(--muted-foreground)]/10", "[--elastic-slider-fill-active:var(--muted-foreground)]/20", "[--elastic-slider-hash:var(--muted-foreground)]/30", "[--elastic-slider-handle:var(--foreground)]", "[--elastic-slider-label:var(--muted-foreground)]", "[--elastic-slider-focus:var(--foreground)]", "relative h-(--elastic-slider-height)", className),
    children: /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(import_react20.motion.div, {
      ref: trackRef,
      role: "slider",
      tabIndex: 0,
      "data-slot": "elastic-slider-track",
      "data-active": isActive,
      "data-focus-visible": keyboardFocusRing,
      "aria-label": ariaLabel ?? label,
      "aria-orientation": "horizontal",
      "aria-valuemin": min,
      "aria-valuemax": max,
      "aria-valuenow": value,
      "aria-valuetext": displayValue,
      className: import_cn.cn("group/elastic-slider absolute inset-0 cursor-pointer touch-none overflow-hidden rounded-(--elastic-slider-radius) bg-(--elastic-slider-bg) outline-none select-none", "data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-ring/50 data-[focus-visible=true]:ring-offset-1 data-[focus-visible=true]:ring-offset-background"),
      style: { width: rubberWidth, x: rubberX },
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onFocus: handleTrackFocus,
      onBlur: handleTrackBlur,
      onKeyDown: handleKeyDown,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: [
        /* @__PURE__ */ jsx_dev_runtime18.jsxDEV("div", {
          "data-slot": "elastic-slider-hash-marks",
          "aria-hidden": "true",
          className: "pointer-events-none absolute inset-0",
          children: Array.from({ length: hashMarkCount }, (_, i) => /* @__PURE__ */ jsx_dev_runtime18.jsxDEV("div", {
            className: import_cn.cn("absolute top-1/2 h-2 w-px -translate-1/2 rounded-full transition-colors duration-200", "bg-transparent group-data-[active=true]/elastic-slider:bg-(--elastic-slider-hash)"),
            style: { left: `${hashMarkPct(i)}%` }
          }, i, false, undefined, this))
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(import_react20.motion.div, {
          "data-slot": "elastic-slider-fill",
          "aria-hidden": "true",
          className: import_cn.cn("pointer-events-none absolute inset-y-0 left-0 transition-colors", "bg-(--elastic-slider-fill) group-data-[active=true]/elastic-slider:bg-(--elastic-slider-fill-active)"),
          style: { width: fillWidth }
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(import_react20.motion.div, {
          "data-slot": "elastic-slider-handle",
          "aria-hidden": "true",
          className: "pointer-events-none absolute top-1/2 h-5 w-1 rounded-full bg-(--elastic-slider-handle)",
          style: { left: handleLeft, y: "-50%" },
          animate: {
            opacity: handleOpacity,
            scaleX: isActive ? 1 : 0.25,
            scaleY: isActive && valueDodge ? 0.75 : 1
          },
          transition: shouldReduceMotion ? { duration: 0 } : {
            scaleX: {
              type: "spring",
              visualDuration: 0.25,
              bounce: 0.15
            },
            scaleY: { type: "spring", visualDuration: 0.2, bounce: 0.1 },
            opacity: { duration: 0.15 }
          }
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime18.jsxDEV("span", {
          ref: labelRef,
          "data-slot": "elastic-slider-label",
          "aria-hidden": "true",
          className: "pointer-events-none absolute top-1/2 left-3 inline-flex -translate-y-1/2 items-center text-sm/none font-medium text-(--elastic-slider-label) transition-colors",
          children: label
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime18.jsxDEV("span", {
          ref: valueRef,
          "data-slot": "elastic-slider-value",
          "aria-hidden": "true",
          className: import_cn.cn("pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 font-mono text-sm/none font-medium transition-colors", "text-(--elastic-slider-label) group-data-[active=true]/elastic-slider:text-(--elastic-slider-focus)"),
          children: displayValue
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
// src/registry/components/fluid-gradient-text/fluid-gradient-text.tsx
var import_react21 = require("motion/react");
var jsx_dev_runtime19 = require("react/jsx-dev-runtime");
"use client";
function FluidGradientText({
  text,
  svgViewBoxWidth = 1200,
  svgViewBoxHeight = 300
}) {
  const gradientX1Raw = import_react21.useMotionValue(0.5);
  const gradientX1 = import_react21.useSpring(import_react21.useTransform(gradientX1Raw, [0, 1], [0, svgViewBoxWidth]), {
    stiffness: 150,
    damping: 25
  });
  const handleMouseMove = (event) => {
    const containerRect = event.currentTarget.getBoundingClientRect();
    gradientX1Raw.set((event.clientX - containerRect.left) / containerRect.width);
  };
  const handleMouseLeave = () => {
    gradientX1Raw.set(0.5);
  };
  return /* @__PURE__ */ jsx_dev_runtime19.jsxDEV("div", {
    className: "relative size-full overflow-hidden after:absolute after:bottom-0 after:h-px after:w-full after:bg-current/15",
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    children: /* @__PURE__ */ jsx_dev_runtime19.jsxDEV("svg", {
      className: "size-full translate-y-[37.5%] select-none",
      viewBox: `0 0 ${svgViewBoxWidth} ${svgViewBoxHeight}`,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx_dev_runtime19.jsxDEV("text", {
          x: "50%",
          y: "50%",
          textAnchor: "middle",
          dominantBaseline: "central",
          stroke: "currentColor",
          strokeOpacity: "0.1",
          strokeWidth: "2",
          fill: "url(#fluid_gradient_text_linear)",
          style: {
            fontFamily: "Helvetica",
            fontSize: svgViewBoxHeight,
            fontWeight: "bold"
          },
          children: text
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime19.jsxDEV("defs", {
          children: /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(import_react21.motion.linearGradient, {
            id: "fluid_gradient_text_linear",
            x1: gradientX1,
            y1: "0",
            x2: svgViewBoxWidth / 2,
            y2: svgViewBoxHeight,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx_dev_runtime19.jsxDEV("stop", {
                offset: "0.625",
                stopColor: "currentColor",
                stopOpacity: "0"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime19.jsxDEV("stop", {
                offset: "1",
                stopColor: "currentColor"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
// src/registry/components/github-contribution-list/github-contribution-list.tsx
var import_lucide_react6 = require("lucide-react");
var jsx_dev_runtime20 = require("react/jsx-dev-runtime");
var STATE_META = {
  merged: {
    label: "Merged",
    icon: import_lucide_react6.GitMergeIcon,
    className: "text-violet-700 dark:text-violet-400"
  },
  open: {
    label: "Open",
    icon: import_lucide_react6.GitPullRequestIcon,
    className: "text-green-700 dark:text-green-500"
  },
  closed: {
    label: "Closed",
    icon: import_lucide_react6.GitPullRequestClosedIcon,
    className: "text-red-700 dark:text-red-400"
  }
};
function GitHubContributionList({
  contributions,
  className,
  ...props
}) {
  if (contributions.length === 0) {
    return /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("p", {
      className: import_cn.cn("p-4 text-sm text-muted-foreground", className),
      children: "No contributions."
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("ul", {
    className: import_cn.cn("divide-y divide-line", className),
    ...props,
    children: contributions.map((contribution) => {
      const meta = STATE_META[contribution.state];
      const Icon = meta.icon;
      return /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("li", {
        className: "relative flex items-center gap-4 p-4 transition-colors hover:bg-accent-muted",
        children: [
          /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(Icon, {
            className: import_cn.cn("size-4 shrink-0", meta.className),
            "aria-hidden": true
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("div", {
            className: "min-w-0 flex-1",
            children: [
              /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("h3", {
                className: "truncate leading-snug font-medium",
                children: [
                  /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("a", {
                    className: "absolute inset-0",
                    href: contribution.url,
                    target: "_blank",
                    rel: "noopener",
                    "aria-label": `Open pull request: ${contribution.title}`,
                    children: /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("span", {
                      className: "sr-only",
                      children: contribution.title
                    }, undefined, false, undefined, this)
                  }, undefined, false, undefined, this),
                  contribution.title
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("p", {
                className: "truncate text-sm text-muted-foreground",
                children: contribution.repo
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime20.jsxDEV("span", {
            className: import_cn.cn("shrink-0 text-sm font-medium tabular-nums", meta.className),
            children: meta.label
          }, undefined, false, undefined, this)
        ]
      }, contribution.id, true, undefined, this);
    })
  }, undefined, false, undefined, this);
}
// src/registry/components/github-contributions/github-contributions.tsx
var import_react22 = require("react");
var import_date_fns2 = require("date-fns");

// src/components/ui/spinner.tsx
var import_lucide_react7 = require("lucide-react");
var jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function Spinner({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime21.jsxDEV(import_lucide_react7.Loader2Icon, {
    role: "status",
    "aria-label": "Loading",
    className: import_cn.cn("size-4 animate-spin", className),
    ...props
  }, undefined, false, undefined, this);
}

// src/components/ui/tooltip.tsx
var import_tooltip = require("@base-ui/react/tooltip");
var jsx_dev_runtime22 = require("react/jsx-dev-runtime");
"use client";
function Tooltip(props) {
  return /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(import_tooltip.Tooltip.Root, {
    "data-slot": "tooltip",
    ...props
  }, undefined, false, undefined, this);
}
function TooltipTrigger(props) {
  return /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(import_tooltip.Tooltip.Trigger, {
    "data-slot": "tooltip-trigger",
    ...props
  }, undefined, false, undefined, this);
}
function TooltipContent({
  className,
  side = "top",
  sideOffset = 8,
  align = "center",
  alignOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(import_tooltip.Tooltip.Portal, {
    children: /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(import_tooltip.Tooltip.Positioner, {
      align,
      alignOffset,
      side,
      sideOffset,
      className: "isolate z-50",
      children: /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(import_tooltip.Tooltip.Popup, {
        "data-slot": "tooltip-content",
        className: import_cn.cn("z-50 w-fit max-w-xs origin-(--transform-origin) bg-foreground text-background", "rounded-lg px-4 py-2 text-sm will-change-transform data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", "data-instant:duration-0", "selection:bg-background selection:text-foreground", className),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(import_tooltip.Tooltip.Arrow, {
            className: import_cn.cn("bg-foreground fill-foreground data-[side=bottom]:top-1 data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5", "size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-xs", "data-[side=bottom]:rounded-br-sm data-[side=top]:rounded-tl-sm")
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}

// src/registry/components/github-contributions/github-contributions.tsx
var jsx_dev_runtime23 = require("react/jsx-dev-runtime");
"use client";
function GitHubContributions({
  contributions,
  githubProfileUrl,
  className
}) {
  const data = import_react22.use(contributions);
  return /* @__PURE__ */ jsx_dev_runtime23.jsxDEV(ContributionGraph, {
    className: import_cn.cn("mx-auto py-2", className),
    data,
    blockSize: 11,
    blockMargin: 3,
    blockRadius: 2,
    children: [
      /* @__PURE__ */ jsx_dev_runtime23.jsxDEV(ContributionGraphCalendar, {
        className: "no-scrollbar px-2",
        title: "GitHub Contributions",
        children: ({ activity, dayIndex, weekIndex }) => /* @__PURE__ */ jsx_dev_runtime23.jsxDEV(Tooltip, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime23.jsxDEV(TooltipTrigger, {
              render: /* @__PURE__ */ jsx_dev_runtime23.jsxDEV("g", {
                children: /* @__PURE__ */ jsx_dev_runtime23.jsxDEV(ContributionGraphBlock, {
                  activity,
                  dayIndex,
                  weekIndex
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime23.jsxDEV(TooltipContent, {
              className: "font-sans",
              children: /* @__PURE__ */ jsx_dev_runtime23.jsxDEV("p", {
                children: [
                  activity.count,
                  " contribution",
                  activity.count > 1 ? "s" : null,
                  " ",
                  "on ",
                  import_date_fns2.format(new Date(activity.date), "dd.MM.yyyy")
                ]
              }, undefined, true, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime23.jsxDEV(ContributionGraphFooter, {
        className: "px-2",
        children: [
          /* @__PURE__ */ jsx_dev_runtime23.jsxDEV(ContributionGraphTotalCount, {
            children: ({ totalCount, year }) => /* @__PURE__ */ jsx_dev_runtime23.jsxDEV("div", {
              className: "text-muted-foreground",
              children: [
                totalCount.toLocaleString("en"),
                " contributions in ",
                year,
                " on",
                " ",
                /* @__PURE__ */ jsx_dev_runtime23.jsxDEV("a", {
                  className: "text-foreground link-underline",
                  href: githubProfileUrl,
                  target: "_blank",
                  rel: "noopener",
                  children: "GitHub"
                }, undefined, false, undefined, this),
                "."
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime23.jsxDEV(ContributionGraphLegend, {}, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function GitHubContributionsFallback() {
  return /* @__PURE__ */ jsx_dev_runtime23.jsxDEV("div", {
    className: "flex h-40.5 w-full items-center justify-center",
    children: /* @__PURE__ */ jsx_dev_runtime23.jsxDEV(Spinner, {
      className: "text-muted-foreground"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
// src/registry/components/github-repo-list/github-repo-list.tsx
var import_lucide_react8 = require("lucide-react");
var jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function GitHubRepoList({
  repos,
  className,
  ...props
}) {
  if (repos.length === 0) {
    return /* @__PURE__ */ jsx_dev_runtime24.jsxDEV("p", {
      className: import_cn.cn("p-4 text-sm text-muted-foreground", className),
      children: "No repositories."
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime24.jsxDEV("ul", {
    className: import_cn.cn("divide-y divide-line", className),
    ...props,
    children: repos.map((repo) => /* @__PURE__ */ jsx_dev_runtime24.jsxDEV("li", {
      className: "relative flex items-center gap-4 p-4 transition-colors hover:bg-accent-muted",
      children: [
        /* @__PURE__ */ jsx_dev_runtime24.jsxDEV("div", {
          className: "min-w-0 flex-1",
          children: [
            /* @__PURE__ */ jsx_dev_runtime24.jsxDEV("h3", {
              className: "truncate leading-snug font-medium",
              children: [
                /* @__PURE__ */ jsx_dev_runtime24.jsxDEV("a", {
                  className: "absolute inset-0",
                  href: repo.url,
                  target: "_blank",
                  rel: "noopener",
                  "aria-label": `Open ${repo.fullName} on GitHub`,
                  children: /* @__PURE__ */ jsx_dev_runtime24.jsxDEV("span", {
                    className: "sr-only",
                    children: repo.fullName
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this),
                repo.name
              ]
            }, undefined, true, undefined, this),
            repo.upstream && /* @__PURE__ */ jsx_dev_runtime24.jsxDEV("p", {
              className: "truncate text-sm text-muted-foreground",
              children: [
                "fork of ",
                repo.upstream
              ]
            }, undefined, true, undefined, this),
            repo.description && /* @__PURE__ */ jsx_dev_runtime24.jsxDEV("p", {
              className: "mt-0.5 line-clamp-1 text-sm text-muted-foreground",
              children: repo.description
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        repo.language && /* @__PURE__ */ jsx_dev_runtime24.jsxDEV("span", {
          className: "hidden shrink-0 text-sm text-muted-foreground sm:block",
          children: repo.language
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime24.jsxDEV("span", {
          className: "flex shrink-0 items-center gap-1 text-sm text-muted-foreground tabular-nums",
          children: [
            /* @__PURE__ */ jsx_dev_runtime24.jsxDEV(import_lucide_react8.StarIcon, {
              className: "size-3.5",
              "aria-hidden": true
            }, undefined, false, undefined, this),
            new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short"
            }).format(repo.stars)
          ]
        }, undefined, true, undefined, this)
      ]
    }, repo.id, true, undefined, this))
  }, undefined, false, undefined, this);
}
// src/registry/components/github-stars/github-stars.tsx
var jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function GitHubStars({
  repo,
  stargazersCount,
  locales = "en-US"
}) {
  return /* @__PURE__ */ jsx_dev_runtime25.jsxDEV(Tooltip, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime25.jsxDEV(TooltipTrigger, {
        render: /* @__PURE__ */ jsx_dev_runtime25.jsxDEV(Button, {
          className: "gap-1.5 pr-1.5 pl-2",
          variant: "ghost",
          nativeButton: false,
          render: /* @__PURE__ */ jsx_dev_runtime25.jsxDEV("a", {
            href: `https://github.com/${repo}`,
            target: "_blank",
            rel: "noopener"
          }, undefined, false, undefined, this),
          children: [
            /* @__PURE__ */ jsx_dev_runtime25.jsxDEV("svg", {
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx_dev_runtime25.jsxDEV("path", {
                d: "M12 0C5.37 0 0 5.372 0 11.997 0 17.3 3.438 21.795 8.205 23.38c.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.609-4.042-1.609C4.422 17.77 3.633 17.4 3.633 17.4c-1.087-.744.084-.73.084-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.417-1.304.76-1.604-2.665-.3-5.466-1.332-5.466-5.929 0-1.31.465-2.38 1.235-3.219-.135-.303-.54-1.523.105-3.175 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.006 2.04.138 3 .404 2.28-1.551 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.608-2.805 5.623-5.475 5.918.42.36.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.284 0 .315.21.69.825.57C20.565 21.79 24 17.291 24 11.997 24 5.372 18.627 0 12 0",
                fill: "currentColor"
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime25.jsxDEV("span", {
              className: "text-[0.8125rem]/none text-muted-foreground tabular-nums",
              style: { textBox: "trim-end cap alphabetic" },
              children: new Intl.NumberFormat(locales, {
                notation: "compact",
                compactDisplay: "short"
              }).format(stargazersCount).toLowerCase()
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime25.jsxDEV(TooltipContent, {
        className: "tabular-nums",
        children: [
          new Intl.NumberFormat(locales).format(stargazersCount),
          " stars"
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// src/registry/components/glow-card-grid/glow-card-grid.tsx
var import_react23 = require("react");
var jsx_dev_runtime26 = require("react/jsx-dev-runtime");
"use client";
function GlowCardGrid({
  cardRadius = 16,
  iconBlur = 25,
  iconSaturate = 5,
  iconBrightness = 1.3,
  iconScale = 4,
  iconOpacity = 0.3,
  borderWidth = 3,
  borderBlur = 10,
  borderSaturate = 4.2,
  borderBrightness = 2.5,
  borderContrast = 2.5,
  className,
  style,
  ...props
}) {
  const gridRef = import_react23.useRef(null);
  import_react23.useEffect(() => {
    const handlePointerMove = (event) => {
      if (!gridRef.current)
        return;
      const cards = gridRef.current.querySelectorAll("[data-slot='glow-card']");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = (event.clientX - centerX) / (rect.width / 2);
        const y = (event.clientY - centerY) / (rect.height / 2);
        card.style.setProperty("--pointer-x", x.toFixed(3));
        card.style.setProperty("--pointer-y", y.toFixed(3));
      });
    };
    document.addEventListener("pointermove", handlePointerMove);
    return () => document.removeEventListener("pointermove", handlePointerMove);
  }, []);
  return /* @__PURE__ */ jsx_dev_runtime26.jsxDEV("div", {
    ref: gridRef,
    className: import_cn.cn("grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3", className),
    style: {
      "--card-radius": `${cardRadius}px`,
      "--card-icon-blur": `${iconBlur}px`,
      "--card-icon-saturate": iconSaturate,
      "--card-icon-brightness": iconBrightness,
      "--card-icon-scale": iconScale,
      "--card-icon-opacity": iconOpacity,
      "--card-border-width": `${borderWidth}px`,
      "--card-border-blur": `${borderBlur}px`,
      "--card-border-saturate": borderSaturate,
      "--card-border-brightness": borderBrightness,
      "--card-border-contrast": borderContrast,
      ...style
    },
    ...props
  }, undefined, false, undefined, this);
}
function GlowCard({ name, handle, avatar, className }) {
  return /* @__PURE__ */ jsx_dev_runtime26.jsxDEV("div", {
    "data-slot": "glow-card",
    className: import_cn.cn("@container-size relative h-52 w-full overflow-hidden rounded-(--card-radius) ring-1 ring-border transition-[translate,scale] select-none active:scale-[0.98]", className),
    children: [
      /* @__PURE__ */ jsx_dev_runtime26.jsxDEV("div", {
        className: "flex size-full overflow-hidden rounded-(--card-radius) [clip-path:inset(0_round_var(--card-radius))]",
        children: [
          /* @__PURE__ */ jsx_dev_runtime26.jsxDEV("div", {
            className: import_cn.cn("pointer-events-none absolute inset-0 flex items-center justify-center", "translate-x-[calc(var(--pointer-x,-10)*50cqi)] translate-y-[calc(var(--pointer-y,-10)*50cqh)] translate-z-0 scale-(--card-icon-scale)", "blur-(--card-icon-blur) brightness-(--card-icon-brightness) saturate-(--card-icon-saturate)", "opacity-(--card-icon-opacity) will-change-[transform,filter]"),
            children: /* @__PURE__ */ jsx_dev_runtime26.jsxDEV("img", {
              className: "size-20",
              src: avatar,
              alt: name
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime26.jsxDEV("div", {
            className: "z-1 flex flex-1 flex-col items-center justify-center gap-4",
            children: [
              /* @__PURE__ */ jsx_dev_runtime26.jsxDEV("img", {
                className: "size-20 rounded-full",
                src: avatar,
                alt: name
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime26.jsxDEV("div", {
                className: "flex flex-col items-center gap-1",
                children: [
                  /* @__PURE__ */ jsx_dev_runtime26.jsxDEV("h2", {
                    className: "text-base/none font-semibold text-foreground",
                    children: name
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime26.jsxDEV("p", {
                    className: "text-sm/none text-foreground/50",
                    children: handle
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime26.jsxDEV("div", {
        className: import_cn.cn("pointer-events-none absolute inset-0 translate-z-0 rounded-(--card-radius)", "border-(length:--card-border-width) border-solid border-transparent", "backdrop-blur-(--card-border-blur) backdrop-brightness-(--card-border-brightness) backdrop-contrast-(--card-border-contrast) backdrop-saturate-(--card-border-saturate)", "[clip-path:inset(0_round_var(--card-radius))]"),
        style: {
          maskImage: "linear-gradient(#fff 0 100%), linear-gradient(#fff 0 100%)",
          maskOrigin: "border-box, padding-box",
          maskClip: "border-box, padding-box",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor"
        }
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// src/registry/components/jpg-card-holder/jpg-card-holder.tsx
var import_react24 = require("react");
var import_react25 = require("motion/react");
var jsx_dev_runtime27 = require("react/jsx-dev-runtime");
"use client";
var POCKET_PATH = "M12 0H196.69A8 8 0 0 1 202.34 2.34L317.66 117.66A8 8 0 0 1 320 123.31V408A16 16 0 0 1 304 424H16A16 16 0 0 1 0 408V12A12 12 0 0 1 12 0Z";
var FLAP_PATH = "M0 4.83V104A16 16 0 0 0 16 120H115.17A2 2 0 0 0 116.59 116.59L3.41 3.41A2 2 0 0 0 0 4.83Z";
var STITCH_PATH = "M10 8V414H310V328";
var IMAGE_ICON_PATH = "M15.5 0H134.5A15.5 15.5 0 0 1 150 15.5V104.5A15.5 15.5 0 0 1 134.5 120H15.5A15.5 15.5 0 0 1 0 104.5V15.5A15.5 15.5 0 0 1 15.5 0Z" + "M7 95V15.5A8.5 8.5 0 0 1 15.5 7H134.5A8.5 8.5 0 0 1 143 15.5V98L101.03 57.37Q96 52.5 90.45 56.76L59.34 80.63Q53 85.5 46.27 81.17L37.05 75.25Q32 72 27.58 76.06Z";
var CARD_WIDTH = 240;
var MAX_PULL = 220;
function rubberBand(overshoot, dimension) {
  return overshoot * dimension * 0.55 / (dimension + 0.55 * overshoot);
}
function resistPull(offset, scale) {
  const maxPull = MAX_PULL * scale;
  if (offset < -maxPull) {
    return -maxPull - rubberBand(-maxPull - offset, 80 * scale);
  }
  if (offset > 0) {
    return rubberBand(offset, 24 * scale);
  }
  return offset;
}
function JpgCardHolder({
  className,
  onPointerEnter,
  onPointerLeave,
  onPointerDown,
  onClick,
  ...props
}) {
  const grainId = import_react24.useId();
  const shouldReduceMotion = import_react25.useReducedMotion();
  const backOffset = import_react25.useMotionValue(0);
  const frontOffset = import_react25.useMotionValue(0);
  const offsets = [backOffset, frontOffset];
  const [isPeeking, setIsPeeking] = import_react24.useState(false);
  const [draggingCard, setDraggingCard] = import_react24.useState(null);
  const dragRef = import_react24.useRef(null);
  const pointerTypeRef = import_react24.useRef("");
  function handleCardPointerDown(card, event) {
    if (event.pointerType === "touch" || event.button !== 0)
      return;
    event.currentTarget.setPointerCapture(event.pointerId);
    offsets[card].stop();
    dragRef.current = {
      card,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startOffset: offsets[card].get(),
      angle: (parseFloat(getComputedStyle(event.currentTarget).rotate) || 0) * (Math.PI / 180),
      scale: event.currentTarget.offsetWidth / CARD_WIDTH
    };
    setDraggingCard(card);
  }
  function handleCardPointerMove(event) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId)
      return;
    const along = (event.clientY - drag.startY) * Math.cos(drag.angle) - (event.clientX - drag.startX) * Math.sin(drag.angle);
    offsets[drag.card].set(resistPull(drag.startOffset + along, drag.scale));
  }
  function handleCardPointerUp(event) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId)
      return;
    dragRef.current = null;
    setDraggingCard(null);
    import_react25.animate(offsets[drag.card], 0, shouldReduceMotion ? { duration: 0.15, ease: "easeOut" } : { type: "spring", visualDuration: 0.35, bounce: 0.1 });
  }
  function getCardProps(card) {
    return {
      "data-dragging": draggingCard === card || undefined,
      style: { y: offsets[card] },
      onPointerDown: (event) => handleCardPointerDown(card, event),
      onPointerMove: handleCardPointerMove,
      onPointerUp: handleCardPointerUp,
      onPointerCancel: handleCardPointerUp
    };
  }
  const foil = /* @__PURE__ */ jsx_dev_runtime27.jsxDEV(jsx_dev_runtime27.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("g", {
        transform: "translate(83 142) scale(1.025)",
        children: [
          /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("path", {
            d: IMAGE_ICON_PATH,
            fillRule: "evenodd"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("circle", {
            cx: 44,
            cy: 45,
            r: 16.5
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("text", {
        x: 160,
        y: 381,
        fontSize: 62,
        textAnchor: "middle",
        className: "font-sans font-medium",
        children: "JPG"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
  return /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("div", {
    "data-slot": "jpg-card-holder",
    "data-peek": isPeeking || undefined,
    className: import_cn.cn("group/jpg-card-holder @container relative aspect-320/424 w-80 select-none", className),
    onPointerEnter: (event) => {
      onPointerEnter?.(event);
      if (event.pointerType !== "touch")
        setIsPeeking(true);
    },
    onPointerLeave: (event) => {
      onPointerLeave?.(event);
      if (event.pointerType !== "touch" && !dragRef.current) {
        setIsPeeking(false);
      }
    },
    onPointerDown: (event) => {
      onPointerDown?.(event);
      pointerTypeRef.current = event.pointerType;
    },
    onClick: (event) => {
      onClick?.(event);
      if (pointerTypeRef.current === "touch")
        setIsPeeking((value) => !value);
    },
    ...props,
    children: /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("div", {
      className: "absolute inset-0 drop-shadow-[0_--spacing(2.25)_--spacing(1.75)_rgb(0_0_0/0.1)] [--spacing:calc(100cqw/80)] perspective-distant",
      children: [
        /* @__PURE__ */ jsx_dev_runtime27.jsxDEV(import_react25.motion.div, {
          "aria-hidden": true,
          className: "absolute -top-18 left-20 h-95 w-60 origin-top-left rotate-6 cursor-grab data-dragging:cursor-grabbing",
          ...getCardProps(0),
          children: /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("div", {
            className: "size-full origin-bottom rounded-[3.75cqw] bg-muted-foreground transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-peek/jpg-card-holder:duration-400 motion-safe:group-data-peek/jpg-card-holder:-translate-y-4 motion-safe:group-data-peek/jpg-card-holder:-rotate-3 motion-safe:group-data-peek/jpg-card-holder:delay-40"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime27.jsxDEV(import_react25.motion.div, {
          "aria-hidden": true,
          className: "absolute -top-13.5 left-30 h-95 w-60 origin-top-left rotate-14 cursor-grab data-dragging:cursor-grabbing",
          ...getCardProps(1),
          children: /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("div", {
            className: "size-full origin-bottom rounded-[3.75cqw] bg-foreground transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-peek/jpg-card-holder:duration-400 motion-safe:group-data-peek/jpg-card-holder:-translate-y-7 motion-safe:group-data-peek/jpg-card-holder:rotate-3"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("svg", {
          "aria-hidden": true,
          viewBox: "0 0 320 424",
          className: "pointer-events-none absolute inset-0 size-full overflow-visible",
          children: [
            /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("defs", {
              children: /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("filter", {
                id: grainId,
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                children: [
                  /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("feTurbulence", {
                    type: "fractalNoise",
                    baseFrequency: "0.7",
                    numOctaves: "3",
                    seed: "7"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("feDiffuseLighting", {
                    surfaceScale: "0.6",
                    lightingColor: "#fff",
                    children: /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("feDistantLight", {
                      azimuth: "235",
                      elevation: "55"
                    }, undefined, false, undefined, this)
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -1 0 0 0 1"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("feComposite", {
                    in: "SourceGraphic",
                    operator: "in"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("path", {
              d: POCKET_PATH,
              className: "pointer-events-auto fill-card stroke-foreground/10"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("path", {
              d: POCKET_PATH,
              filter: `url(#${grainId})`,
              className: "fill-foreground opacity-15"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("path", {
              d: STITCH_PATH,
              fill: "none",
              strokeWidth: 1.5,
              className: "stroke-foreground/10"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("path", {
              d: STITCH_PATH,
              fill: "none",
              strokeWidth: 1.5,
              strokeDasharray: "2.5 10.5",
              strokeLinecap: "round",
              className: "stroke-foreground/40"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("g", {
              className: "fill-card",
              children: foil
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("g", {
              strokeWidth: 0.75,
              className: "fill-foreground/15 stroke-foreground/10",
              children: foil
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("svg", {
          "aria-hidden": true,
          viewBox: "0 0 120 120",
          className: "pointer-events-none absolute top-0 right-0 size-30 -translate-x-px translate-y-px overflow-visible blur-[--spacing(0.25)] transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-peek/jpg-card-holder:duration-400 motion-safe:group-data-peek/jpg-card-holder:opacity-0",
          children: /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("path", {
            d: FLAP_PATH,
            fill: "rgb(0 0 0 / 0.12)"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("svg", {
          "aria-hidden": true,
          viewBox: "0 0 120 120",
          className: "pointer-events-none absolute top-0 right-0 size-30 -translate-x-0.75 translate-y-1 overflow-visible opacity-0 blur-[--spacing(0.75)] transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-peek/jpg-card-holder:duration-400 motion-safe:group-data-peek/jpg-card-holder:opacity-100",
          children: /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("path", {
            d: FLAP_PATH,
            fill: "rgb(0 0 0 / 0.16)"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("svg", {
          "aria-hidden": true,
          viewBox: "0 0 120 120",
          className: "pointer-events-none absolute top-0 right-0 size-30 origin-top-left overflow-visible transition-[rotate] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-peek/jpg-card-holder:duration-400 motion-safe:group-data-peek/jpg-card-holder:rotate-[1_1_0_25deg]",
          children: /* @__PURE__ */ jsx_dev_runtime27.jsxDEV("path", {
            d: FLAP_PATH,
            className: "pointer-events-auto fill-card stroke-foreground/10"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
// src/registry/components/line-nav/line-nav.tsx
var import_react26 = require("react");
var import_react27 = require("motion/react");
var jsx_dev_runtime28 = require("react/jsx-dev-runtime");
"use client";
var lineVariants = {
  normal: { width: 24 },
  active: { width: 40 },
  hover: { width: 40 }
};
function LineNav({
  className,
  items,
  activeHref,
  scrollActiveIntoView = true,
  onItemClick
}) {
  const activeItemRef = import_react26.useRef(null);
  import_react26.useEffect(() => {
    if (scrollActiveIntoView) {
      activeItemRef.current?.scrollIntoView({ block: "center" });
    }
  }, [scrollActiveIntoView]);
  return /* @__PURE__ */ jsx_dev_runtime28.jsxDEV("nav", {
    className: import_cn.cn("flex flex-col gap-2 py-5.25", className),
    style: {
      "--line-nav-width": `${lineVariants.normal.width}px`
    },
    children: items.map((item, index) => {
      const isActive = item.href === activeHref;
      return /* @__PURE__ */ jsx_dev_runtime28.jsxDEV(LineNavItem, {
        ref: isActive ? activeItemRef : undefined,
        title: item.title,
        href: item.href,
        active: isActive,
        isLast: index === items.length - 1,
        onClick: onItemClick ? (event) => onItemClick(item, event) : undefined
      }, item.href, false, undefined, this);
    })
  }, undefined, false, undefined, this);
}
var LineNavItem = import_react26.memo(function LineNavItem({
  ref,
  title,
  href,
  active = false,
  isLast = false,
  onClick
}) {
  return /* @__PURE__ */ jsx_dev_runtime28.jsxDEV(jsx_dev_runtime28.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime28.jsxDEV(import_react27.motion.a, {
        ref,
        "aria-current": active ? "page" : undefined,
        className: "group relative flex h-px items-center gap-3 after:absolute after:top-1/2 after:left-0 after:size-full after:-translate-y-1/2 after:p-3.5",
        href,
        initial: false,
        animate: active ? "active" : "normal",
        whileHover: "hover",
        onClick,
        children: [
          /* @__PURE__ */ jsx_dev_runtime28.jsxDEV(import_react27.motion.span, {
            className: "block h-px shrink-0 bg-foreground/20 transition-[background-color] ease-out group-hover:bg-foreground group-aria-[current=page]:bg-foreground",
            variants: lineVariants,
            transition: { type: "spring", stiffness: 200, damping: 20 }
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime28.jsxDEV("span", {
            className: "text-sm whitespace-nowrap text-muted-foreground transition-[color] ease-out group-hover:text-foreground group-aria-[current=page]:text-foreground",
            children: title
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      !isLast && /* @__PURE__ */ jsx_dev_runtime28.jsxDEV(jsx_dev_runtime28.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime28.jsxDEV("span", {
            className: "block h-px w-(--line-nav-width) bg-foreground/20"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime28.jsxDEV("span", {
            className: "block h-px w-(--line-nav-width) bg-foreground/20"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
});
// src/registry/components/logos-carousel/logos-carousel.tsx
var import_react28 = require("react");
var import_react29 = require("motion/react");
var jsx_dev_runtime29 = require("react/jsx-dev-runtime");
"use client";
var DEFAULT_COLUMN_COUNT = 4;
var CYCLE_INTERVAL = 2400;
var STAGGER_DELAY = 125;
var TRANSITION_DURATION = 0.5;
var EASE_OUT_QUAD = [0.25, 0.46, 0.45, 0.94];
function LogosCarousel({
  children,
  columnCount = DEFAULT_COLUMN_COUNT,
  direction = "ltr",
  className
}) {
  const columns = import_react28.useMemo(() => distributeLogos(import_react28.Children.toArray(children), columnCount), [children, columnCount]);
  const reduceMotion = import_react29.useReducedMotion() ?? false;
  const containerRef = import_react28.useRef(null);
  const isPageInView = import_react29.usePageInView();
  const isInView = import_react29.useInView(containerRef, { margin: "100px" });
  const [step, setStep] = import_react28.useState(0);
  const shouldPlay = isPageInView && isInView;
  import_react28.useEffect(() => {
    if (!shouldPlay)
      return;
    const beatId = setInterval(() => setStep((prev) => prev + 1), CYCLE_INTERVAL);
    return () => clearInterval(beatId);
  }, [shouldPlay]);
  return /* @__PURE__ */ jsx_dev_runtime29.jsxDEV("div", {
    ref: containerRef,
    "data-slot": "logos-carousel",
    className: import_cn.cn("grid", className),
    style: {
      gridTemplateColumns: `repeat(var(--column-count,${columns.length}), minmax(0, 1fr))`
    },
    children: columns.map((columnLogos, columnIndex) => {
      const waveIndex = direction === "rtl" ? columns.length - 1 - columnIndex : columnIndex;
      return /* @__PURE__ */ jsx_dev_runtime29.jsxDEV(LogoColumn, {
        logos: columnLogos,
        columnIndex,
        waveIndex,
        activeIndex: step % columnLogos.length,
        reduceMotion
      }, columnIndex, false, undefined, this);
    })
  }, undefined, false, undefined, this);
}
var LogoColumn = import_react28.memo(function LogoColumn({
  logos,
  columnIndex,
  waveIndex,
  activeIndex,
  reduceMotion
}) {
  const transition = {
    ease: EASE_OUT_QUAD,
    duration: TRANSITION_DURATION,
    delay: waveIndex * (STAGGER_DELAY / 1000)
  };
  const column = getColumnVariants(reduceMotion);
  const logo = getLogoVariants(reduceMotion, transition);
  return /* @__PURE__ */ jsx_dev_runtime29.jsxDEV(import_react29.motion.div, {
    "data-slot": "logos-carousel-column",
    className: "relative",
    initial: column.initial,
    animate: column.animate,
    transition,
    children: /* @__PURE__ */ jsx_dev_runtime29.jsxDEV(import_react29.AnimatePresence, {
      mode: "popLayout",
      children: /* @__PURE__ */ jsx_dev_runtime29.jsxDEV(import_react29.motion.div, {
        "data-slot": "logos-carousel-logo",
        className: "flex size-full items-center justify-center",
        initial: logo.initial,
        animate: logo.animate,
        exit: logo.exit,
        children: logos[activeIndex]
      }, `${columnIndex}-${activeIndex}`, false, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
});
function getColumnVariants(reduceMotion) {
  if (reduceMotion) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    };
  }
  return {
    initial: { opacity: 0, transform: "translateY(60%)" },
    animate: { opacity: 1, transform: "translateY(0%)" }
  };
}
function getLogoVariants(reduceMotion, transition) {
  if (reduceMotion) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition },
      exit: { opacity: 0, transition }
    };
  }
  return {
    initial: { opacity: 0, transform: "translateY(60%)", filter: "blur(2px)" },
    animate: {
      opacity: 1,
      transform: "translateY(0%)",
      filter: "blur(0px)",
      transition
    },
    exit: {
      opacity: 0,
      transform: "translateY(-50%)",
      filter: "blur(3px)",
      transition
    }
  };
}
function distributeLogos(logos, columnCount) {
  const effectiveCount = Math.min(columnCount, logos.length);
  const columns = Array.from({ length: effectiveCount }, () => []);
  logos.forEach((logo, index) => {
    columns[index % effectiveCount].push(logo);
  });
  return columns;
}
// src/registry/components/logos-flip/logos-flip.tsx
var import_react30 = require("react");
var import_react31 = require("motion/react");
var jsx_dev_runtime30 = require("react/jsx-dev-runtime");
"use client";
var DEFAULT_COLUMN_COUNT2 = 4;
var CYCLE_INTERVAL2 = 3500;
var STAGGER_DELAY2 = 160;
var FLIP_DURATION = 600;
var RESET_BUFFER = 50;
function LogosFlip({
  children,
  columnCount = DEFAULT_COLUMN_COUNT2,
  className,
  style,
  ...props
}) {
  const logos = import_react30.Children.toArray(children);
  const logoCount = logos.length;
  const cardCount = Math.min(columnCount, logoCount);
  const containerRef = import_react30.useRef(null);
  const isPageInView = import_react31.usePageInView();
  const isInView = import_react31.useInView(containerRef, { margin: "100px" });
  const shouldPlay = isPageInView && isInView && logoCount > cardCount;
  const [offset, setOffset] = import_react30.useState(0);
  const [flippedCount, setFlippedCount] = import_react30.useState(0);
  import_react30.useEffect(() => {
    if (!shouldPlay)
      return;
    const timeouts = new Set;
    let isAnimating = false;
    const schedule = (callback, delay) => {
      const id = window.setTimeout(() => {
        timeouts.delete(id);
        callback();
      }, delay);
      timeouts.add(id);
    };
    const settleWave = () => {
      setOffset((prev) => prev + cardCount);
      setFlippedCount(0);
      isAnimating = false;
    };
    const runWave = () => {
      if (isAnimating)
        return;
      isAnimating = true;
      for (let slot = 0;slot < cardCount; slot++) {
        schedule(() => setFlippedCount(slot + 1), slot * STAGGER_DELAY2);
      }
      schedule(settleWave, (cardCount - 1) * STAGGER_DELAY2 + FLIP_DURATION + RESET_BUFFER);
    };
    const intervalId = window.setInterval(runWave, CYCLE_INTERVAL2);
    return () => {
      window.clearInterval(intervalId);
      timeouts.forEach((id) => window.clearTimeout(id));
      if (isAnimating)
        settleWave();
    };
  }, [shouldPlay, cardCount]);
  if (logoCount === 0)
    return null;
  return /* @__PURE__ */ jsx_dev_runtime30.jsxDEV("div", {
    ref: containerRef,
    "data-slot": "logos-flip",
    className: import_cn.cn("grid gap-2", className),
    style: {
      gridTemplateColumns: `repeat(var(--column-count,${cardCount}), minmax(0, 1fr))`,
      ...style
    },
    ...props,
    children: Array.from({ length: cardCount }, (_, slot) => /* @__PURE__ */ jsx_dev_runtime30.jsxDEV(LogosFlipCard, {
      offset,
      front: logos[(slot + offset) % logoCount],
      back: logos[(slot + offset + cardCount) % logoCount],
      flipped: slot < flippedCount
    }, slot, false, undefined, this))
  }, undefined, false, undefined, this);
}
function LogosFlipCard({ offset, front, back, flipped }) {
  return /* @__PURE__ */ jsx_dev_runtime30.jsxDEV("div", {
    "data-slot": "logos-flip-card",
    className: "h-20 min-w-0 perspective-[1000px] sm:h-24",
    children: /* @__PURE__ */ jsx_dev_runtime30.jsxDEV("div", {
      "data-slot": "logos-flip-card-inner",
      className: import_cn.cn("relative size-full transition-transform duration-600 ease-in-out transform-3d motion-reduce:transition-none", flipped ? "rotate-x-180 motion-reduce:rotate-x-0" : "rotate-x-0"),
      children: [
        /* @__PURE__ */ jsx_dev_runtime30.jsxDEV(LogosFlipFace, {
          className: "rotate-x-0",
          children: front
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime30.jsxDEV(LogosFlipFace, {
          className: "rotate-x-180",
          children: back
        }, undefined, false, undefined, this)
      ]
    }, offset, true, undefined, this)
  }, undefined, false, undefined, this);
}
function LogosFlipFace({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime30.jsxDEV("div", {
    "data-slot": "logos-flip-face",
    className: import_cn.cn("absolute inset-0 flex items-center justify-center rounded-lg border bg-card px-2 backface-hidden", className),
    ...props
  }, undefined, false, undefined, this);
}
// src/registry/components/middle-truncation/middle-truncation.tsx
var import_react32 = require("react");
var jsx_dev_runtime31 = require("react/jsx-dev-runtime");
"use client";
var cachedCanvas = null;
var cachedCtx = null;
function getCanvas() {
  if (!cachedCtx) {
    cachedCanvas = document.createElement("canvas");
    const ctx = cachedCanvas.getContext("2d");
    if (!ctx) {
      throw new Error("Failed to get 2d context from canvas");
    }
    cachedCtx = ctx;
  }
  return cachedCtx;
}
function measureText(text, font) {
  const ctx = getCanvas();
  ctx.font = font;
  return ctx.measureText(text).width;
}
function getComputedFont(el) {
  const cs = window.getComputedStyle(el);
  return `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
}
function debounceWithRAF(fn, delay) {
  let timeoutId;
  let rafId;
  return (...args) => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    if (rafId !== undefined) {
      cancelAnimationFrame(rafId);
    }
    timeoutId = setTimeout(() => {
      rafId = requestAnimationFrame(() => {
        fn(...args);
      });
    }, delay);
  };
}
function computeTruncated(text, end, minEnd, containerW, font, ellipsis) {
  const fullW = measureText(text, font);
  if (fullW <= containerW)
    return text;
  if (end !== undefined) {
    const endStr = text.slice(-end);
    const endW = measureText(ellipsis + endStr, font);
    const available = containerW - endW;
    let lo = 0;
    let hi = text.length - end;
    while (lo < hi) {
      const mid = Math.ceil((lo + hi) / 2);
      if (measureText(text.slice(0, mid), font) <= available)
        lo = mid;
      else
        hi = mid - 1;
    }
    return text.slice(0, lo) + ellipsis + endStr;
  }
  const ellipsisW = measureText(ellipsis, font);
  const availableForText = containerW - ellipsisW;
  let lo = 0;
  let hi = text.length;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    let startLen;
    let endLen;
    if (minEnd !== undefined) {
      endLen = Math.max(Math.ceil(mid / 2), minEnd);
      startLen = Math.max(0, mid - endLen);
    } else {
      startLen = Math.floor(mid / 2);
      endLen = Math.ceil(mid / 2);
    }
    const startStr = text.slice(0, startLen);
    const endStr = text.slice(-endLen);
    const combinedW = measureText(startStr + endStr, font);
    if (combinedW <= availableForText)
      lo = mid;
    else
      hi = mid - 1;
  }
  let startLen;
  let endLen;
  if (minEnd !== undefined) {
    endLen = Math.max(Math.ceil(lo / 2), minEnd);
    startLen = Math.max(0, lo - endLen);
  } else {
    startLen = Math.floor(lo / 2);
    endLen = Math.ceil(lo / 2);
  }
  return text.slice(0, startLen) + ellipsis + text.slice(-endLen);
}
function MiddleTruncation({
  className,
  children,
  end,
  minEnd,
  ellipsis = "...",
  ...props
}) {
  const containerRef = import_react32.useRef(null);
  const [displayed, setDisplayed] = import_react32.useState(children);
  import_react32.useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el)
      return;
    const recalculate = (width) => {
      const font = getComputedFont(el);
      setDisplayed(computeTruncated(children, end, minEnd, width, font, ellipsis));
    };
    const debouncedRecalculate = debounceWithRAF(recalculate, 150);
    const ro = new ResizeObserver(([entry]) => {
      debouncedRecalculate(entry.contentRect.width);
    });
    recalculate(el.offsetWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, [children, end, minEnd, ellipsis]);
  return /* @__PURE__ */ jsx_dev_runtime31.jsxDEV("span", {
    ref: containerRef,
    className: import_cn.cn("block truncate", className),
    title: children,
    ...props,
    children: displayed
  }, undefined, false, undefined, this);
}
// src/registry/components/mobius-loop-icon/mobius-loop-icon.tsx
var import_react33 = require("motion/react");
var jsx_dev_runtime32 = require("react/jsx-dev-runtime");
"use client";
var circle1 = "M12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4Z";
var infinity = "M 6 16 C 11 16 13 8 18 8 C 23.333 8 23.333 16 18 16 C 13 16 11 8 6 8 C 0.667 8 0.667 16 6 16 Z";
var circle2 = "M12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z";
function MobiusLoopIcon(props) {
  return /* @__PURE__ */ jsx_dev_runtime32.jsxDEV(import_react33.motion.svg, {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props,
    children: /* @__PURE__ */ jsx_dev_runtime32.jsxDEV(import_react33.motion.path, {
      animate: {
        d: [circle1, infinity, circle2]
      },
      transition: {
        d: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity
        }
      }
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
// src/registry/components/scroll-fade-effect/scroll-fade-effect.tsx
var jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function ScrollFadeEffect({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime33.jsxDEV("div", {
    "data-orientation": orientation,
    className: import_cn.cn("data-[orientation=horizontal]:overflow-x-auto data-vertical:overflow-y-auto", "data-[orientation=horizontal]:scroll-fade-effect-x data-vertical:scroll-fade-effect-y", className),
    ...props
  }, undefined, false, undefined, this);
}
// src/registry/components/share-menu/share-menu.tsx
var import_lucide_react10 = require("lucide-react");

// src/components/ui/dropdown-menu.tsx
var import_menu = require("@base-ui/react/menu");
var import_lucide_react9 = require("lucide-react");
var jsx_dev_runtime34 = require("react/jsx-dev-runtime");
"use client";
function DropdownMenu({ ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime34.jsxDEV(import_menu.Menu.Root, {
    "data-slot": "dropdown-menu",
    ...props
  }, undefined, false, undefined, this);
}
function DropdownMenuTrigger({ ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime34.jsxDEV(import_menu.Menu.Trigger, {
    "data-slot": "dropdown-menu-trigger",
    ...props
  }, undefined, false, undefined, this);
}
function DropdownMenuContent({
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  collisionPadding,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime34.jsxDEV(import_menu.Menu.Portal, {
    children: /* @__PURE__ */ jsx_dev_runtime34.jsxDEV(import_menu.Menu.Positioner, {
      className: "isolate z-50 outline-none",
      align,
      alignOffset,
      side,
      sideOffset,
      collisionPadding,
      children: /* @__PURE__ */ jsx_dev_runtime34.jsxDEV(import_menu.Menu.Popup, {
        "data-slot": "dropdown-menu-content",
        className: import_cn.cn("z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-xl bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:ring-foreground/20 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95", className),
        ...props
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime34.jsxDEV(import_menu.Menu.Item, {
    "data-slot": "dropdown-menu-item",
    "data-inset": inset,
    "data-variant": variant,
    className: import_cn.cn("group/dropdown-menu-item relative flex cursor-default items-center gap-2 rounded-lg px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", className),
    ...props
  }, undefined, false, undefined, this);
}

// src/registry/components/share-menu/share-menu.tsx
var jsx_dev_runtime35 = require("react/jsx-dev-runtime");
"use client";
function ShareMenu({ title, url }) {
  const absoluteUrl = url.startsWith("http") ? url : typeof window !== "undefined" ? new URL(url, window.location.origin).toString() : url;
  const urlEncoded = encodeURIComponent(absoluteUrl);
  return /* @__PURE__ */ jsx_dev_runtime35.jsxDEV(DropdownMenu, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime35.jsxDEV(DropdownMenuTrigger, {
        render: /* @__PURE__ */ jsx_dev_runtime35.jsxDEV(Button, {
          variant: "outline",
          size: "icon-sm"
        }, undefined, false, undefined, this),
        children: /* @__PURE__ */ jsx_dev_runtime35.jsxDEV(import_lucide_react10.ShareIcon, {}, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime35.jsxDEV(DropdownMenuContent, {
        className: "w-fit",
        align: "start",
        alignOffset: -6,
        collisionPadding: 16,
        finalFocus: false,
        children: [
          /* @__PURE__ */ jsx_dev_runtime35.jsxDEV(DropdownMenuItem, {
            onClick: () => {
              copyText2(absoluteUrl);
              toast.add({ type: "success", title: "Link copied" });
            },
            children: [
              /* @__PURE__ */ jsx_dev_runtime35.jsxDEV(import_lucide_react10.LinkIcon, {}, undefined, false, undefined, this),
              "Copy link"
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime35.jsxDEV(DropdownMenuItem, {
            render: /* @__PURE__ */ jsx_dev_runtime35.jsxDEV("a", {
              href: `https://x.com/intent/tweet?url=${urlEncoded}`,
              target: "_blank",
              rel: "noopener"
            }, undefined, false, undefined, this),
            children: [
              /* @__PURE__ */ jsx_dev_runtime35.jsxDEV(XIcon2, {}, undefined, false, undefined, this),
              "Share on X"
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime35.jsxDEV(DropdownMenuItem, {
            render: /* @__PURE__ */ jsx_dev_runtime35.jsxDEV("a", {
              href: `https://www.linkedin.com/sharing/share-offsite?url=${urlEncoded}`,
              target: "_blank",
              rel: "noopener"
            }, undefined, false, undefined, this),
            children: [
              /* @__PURE__ */ jsx_dev_runtime35.jsxDEV(LinkedInIcon, {}, undefined, false, undefined, this),
              "Share on LinkedIn"
            ]
          }, undefined, true, undefined, this),
          typeof navigator !== "undefined" && "share" in navigator && /* @__PURE__ */ jsx_dev_runtime35.jsxDEV(DropdownMenuItem, {
            closeOnClick: false,
            onClick: () => {
              navigator.share({ title, url: absoluteUrl }).catch(() => {});
            },
            children: [
              /* @__PURE__ */ jsx_dev_runtime35.jsxDEV(import_lucide_react10.EllipsisIcon, {}, undefined, false, undefined, this),
              "Other app"
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var copyText2 = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};
function XIcon2(props) {
  return /* @__PURE__ */ jsx_dev_runtime35.jsxDEV("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    ...props,
    children: /* @__PURE__ */ jsx_dev_runtime35.jsxDEV("path", {
      d: "m22.991 23-8.533-12.612L22.42 1h-2.77l-6.422 7.575L8.105 1H1.123l8.225 12.158L1 23h2.77l6.81-8.03L16.015 23H23zM7.193 2.769l12.49 18.462h-2.76L4.43 2.769z",
      fill: "currentColor"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function LinkedInIcon(props) {
  return /* @__PURE__ */ jsx_dev_runtime35.jsxDEV("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    ...props,
    children: /* @__PURE__ */ jsx_dev_runtime35.jsxDEV("path", {
      d: "M22.274 0H1.728C.692 0 0 .685 0 1.715v20.569C0 23.316.864 24 1.727 24h20.546C23.31 24 24 23.315 24 22.285V1.716C24.001.684 23.31 0 22.274 0M7.08 20.4H3.454V8.915h3.625zM5.352 7.371c-1.209 0-2.07-.856-2.07-2.056s.863-2.059 2.07-2.059c1.21 0 2.073.859 2.073 2.059S6.388 7.37 5.352 7.37M20.548 20.4h-3.626v-5.485c0-1.371 0-3.087-1.9-3.087-1.898 0-2.073 1.372-2.073 2.916V20.4H9.325V8.915h3.454v1.541c.69-1.2 2.073-1.885 3.453-1.885 3.627 0 4.316 2.4 4.316 5.485z",
      fill: "currentColor"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
// src/registry/components/shimmering-text/shimmering-text.tsx
var React4 = __toESM(require("react"));
var import_react34 = require("motion/react");
var jsx_dev_runtime36 = require("react/jsx-dev-runtime");
"use client";
function ShimmeringText({
  text,
  duration = 1,
  isStopped = false,
  className,
  ...props
}) {
  const createCharVariants = React4.useCallback((charIndex) => ({
    running: {
      color: ["var(--color)", "var(--shimmering-color)", "var(--color)"],
      transition: {
        duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: text.length * 0.05,
        delay: charIndex * duration / text.length,
        ease: "easeInOut"
      }
    },
    stopped: {
      color: "var(--color)",
      transition: {
        duration: duration * 0.5,
        ease: "easeOut"
      }
    }
  }), [duration, text.length]);
  return /* @__PURE__ */ jsx_dev_runtime36.jsxDEV(import_react34.motion.span, {
    className: import_cn.cn("inline-block select-none", "[--color:var(--muted-foreground)] [--shimmering-color:var(--foreground)]", className),
    ...props,
    children: [
      text?.split("")?.map((char, i) => /* @__PURE__ */ jsx_dev_runtime36.jsxDEV(import_react34.motion.span, {
        className: "inline-block whitespace-pre",
        initial: "stopped",
        animate: isStopped ? "stopped" : "running",
        variants: createCharVariants(i),
        "aria-hidden": true,
        children: char
      }, i, false, undefined, this)),
      /* @__PURE__ */ jsx_dev_runtime36.jsxDEV("span", {
        className: "sr-only",
        children: text
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// src/registry/components/slide-to-unlock/slide-to-unlock.tsx
var import_react35 = require("react");
var import_react36 = require("motion/react");
var jsx_dev_runtime37 = require("react/jsx-dev-runtime");
"use client";
var SlideToUnlockContext = import_react35.createContext(null);
function useSlideToUnlock() {
  const context = import_react35.useContext(SlideToUnlockContext);
  if (!context) {
    throw new Error(`SlideToUnlock components must be used within SlideToUnlock`);
  }
  return context;
}
function SlideToUnlock({
  className,
  handleWidth = 56,
  children,
  onUnlock,
  ...props
}) {
  const trackRef = import_react35.useRef(null);
  const [isDragging, setIsDragging] = import_react35.useState(false);
  const x = import_react36.useMotionValue(0);
  const fadeDistance = handleWidth;
  const textOpacity = import_react36.useTransform(x, [0, fadeDistance], [1, 0]);
  const handleDragStart = import_react35.useCallback(() => {
    setIsDragging(true);
  }, []);
  const handleDragEnd = import_react35.useCallback(() => {
    setIsDragging(false);
    const trackWidth = trackRef.current?.offsetWidth || 0;
    const maxX = trackWidth - handleWidth;
    if (x.get() >= maxX) {
      onUnlock?.();
    } else {
      import_react36.animate(x, 0, { type: "spring", bounce: 0, duration: 0.25 });
    }
  }, [x, onUnlock, handleWidth]);
  return /* @__PURE__ */ jsx_dev_runtime37.jsxDEV(SlideToUnlockContext.Provider, {
    value: {
      x,
      trackRef,
      isDragging,
      handleWidth,
      textOpacity,
      onDragStart: handleDragStart,
      onDragEnd: handleDragEnd
    },
    children: /* @__PURE__ */ jsx_dev_runtime37.jsxDEV("div", {
      "data-slot": "slide-to-unlock",
      className: import_cn.cn("w-54 rounded-xl bg-muted p-1 shadow-inner inset-ring-1 inset-ring-foreground/10", className),
      ...props,
      children
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function SlideToUnlockTrack({
  className,
  children,
  ...props
}) {
  const { trackRef } = useSlideToUnlock();
  return /* @__PURE__ */ jsx_dev_runtime37.jsxDEV("div", {
    ref: trackRef,
    "data-slot": "track",
    className: import_cn.cn("relative flex h-10 items-center justify-center", className),
    ...props,
    children
  }, undefined, false, undefined, this);
}
function SlideToUnlockText({
  className,
  children,
  style,
  ...props
}) {
  const { handleWidth, textOpacity, isDragging } = useSlideToUnlock();
  return /* @__PURE__ */ jsx_dev_runtime37.jsxDEV(import_react36.motion.div, {
    "data-slot": "text",
    "data-dragging": isDragging,
    className: import_cn.cn("pl-1 text-lg font-medium", className),
    style: { marginLeft: handleWidth, opacity: textOpacity, ...style },
    ...props,
    children: typeof children === "function" ? children({ isDragging }) : children
  }, undefined, false, undefined, this);
}
function SlideToUnlockHandle({
  className,
  children,
  style,
  ...props
}) {
  const {
    x,
    trackRef,
    onDragStart,
    onDragEnd,
    handleWidth: width
  } = useSlideToUnlock();
  return /* @__PURE__ */ jsx_dev_runtime37.jsxDEV(import_react36.motion.div, {
    "data-slot": "handle",
    className: import_cn.cn("absolute top-0 left-0 flex h-10 cursor-grab items-center justify-center rounded-lg bg-white text-zinc-400 shadow-sm active:cursor-grabbing", "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-6", className),
    style: { width, x, ...style },
    drag: "x",
    dragConstraints: trackRef,
    dragElastic: 0,
    dragMomentum: false,
    onDragStart,
    onDragEnd,
    ...props,
    children: children ?? /* @__PURE__ */ jsx_dev_runtime37.jsxDEV("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": true,
      children: /* @__PURE__ */ jsx_dev_runtime37.jsxDEV("path", {
        d: "M24 12 12.75 3v4.696H0v8.608h12.75V21z",
        fill: "currentColor"
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
// src/registry/components/spinning-circular-text/spinning-circular-text.tsx
var jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function SpinningCircularText({
  text,
  charSpacing = 1,
  fontSize = "1rem",
  spinClassName,
  renderChar,
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime38.jsxDEV("div", {
    className: import_cn.cn("grid size-(--sc-container-size) place-items-center font-mono font-medium uppercase select-none", className),
    style: {
      "--sc-size": fontSize,
      "--sc-char-count": text.length,
      "--sc-char-spacing": charSpacing,
      "--sc-inner-angle": "calc((360 / var(--sc-char-count)) * 1deg)",
      "--sc-radius-factor": "calc(var(--sc-char-spacing) / sin(var(--sc-inner-angle)))",
      "--sc-radius": "calc(var(--sc-radius-factor) * -1ch)",
      "--sc-container-size": "calc(var(--sc-radius-factor) * var(--sc-size) * 2)",
      ...style
    },
    ...props,
    children: [
      /* @__PURE__ */ jsx_dev_runtime38.jsxDEV("div", {
        className: import_cn.cn("relative animate-spin-ccw text-(size:--sc-size) leading-none", "*:absolute *:top-1/2 *:left-1/2 *:inline-block", "*:[--sc-char-rotate:calc(var(--sc-inner-angle)*var(--sc-char-index))]", "*:transform-[translate(-50%,-50%)_rotate(var(--sc-char-rotate))_translateY(var(--sc-radius))]", spinClassName),
        "aria-hidden": true,
        children: text.split("").map((char, index) => /* @__PURE__ */ jsx_dev_runtime38.jsxDEV("span", {
          style: { "--sc-char-index": index },
          children: renderChar ? renderChar(char, index) : char
        }, index, false, undefined, this))
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime38.jsxDEV("span", {
        className: "sr-only",
        children: text
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// src/registry/components/spotlight-logo/spotlight-logo.tsx
var import_react39 = require("react");
var import_react40 = require("motion/react");

// src/lib/soundcn/metal-click.ts
var metalClickSound = {
  name: "metal-click",
  dataUri: "data:audio/mpeg;base64,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",
  duration: 0.446,
  format: "mp3",
  license: "CC0",
  author: "Kenney"
};

// src/hooks/soundcn/use-sound.ts
var import_react37 = require("react");
var import_react38 = require("motion/react");

// src/lib/soundcn/sound-engine.ts
var audioContext = null;
var bufferCache = new Map;
function getAudioContext() {
  if (!audioContext) {
    audioContext = new AudioContext;
  }
  return audioContext;
}
async function decodeAudioData(dataUri) {
  const cached = bufferCache.get(dataUri);
  if (cached)
    return cached;
  const ctx = getAudioContext();
  const base64 = dataUri.split(",")[1];
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0;i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const audioBuffer = await ctx.decodeAudioData(bytes.buffer.slice(0));
  bufferCache.set(dataUri, audioBuffer);
  return audioBuffer;
}

// src/hooks/soundcn/use-sound.ts
"use client";
function useSound(sound, options = {}) {
  const {
    volume = 0.5,
    playbackRate = 1,
    interrupt = false,
    soundEnabled: _soundEnabled = true,
    onPlay,
    onEnd,
    onPause,
    onStop
  } = options;
  const [isPlaying, setIsPlaying] = import_react37.useState(false);
  const [duration, setDuration] = import_react37.useState(sound.duration ?? null);
  const sourceRef = import_react37.useRef(null);
  const gainRef = import_react37.useRef(null);
  const bufferRef = import_react37.useRef(null);
  const shouldReduceMotion = import_react38.useReducedMotion();
  const soundEnabled = _soundEnabled && !shouldReduceMotion;
  import_react37.useEffect(() => {
    let cancelled = false;
    decodeAudioData(sound.dataUri).then((buffer) => {
      if (!cancelled) {
        bufferRef.current = buffer;
        setDuration(buffer.duration);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [sound.dataUri]);
  const stop = import_react37.useCallback(() => {
    if (sourceRef.current) {
      try {
        sourceRef.current.stop();
      } catch {}
      sourceRef.current = null;
    }
    setIsPlaying(false);
    onStop?.();
  }, [onStop]);
  const play = import_react37.useCallback((overrides) => {
    if (!soundEnabled || !bufferRef.current)
      return;
    const ctx = getAudioContext();
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    if (interrupt && sourceRef.current) {
      stop();
    }
    const source = ctx.createBufferSource();
    const gain = ctx.createGain();
    source.buffer = bufferRef.current;
    source.playbackRate.value = overrides?.playbackRate ?? playbackRate;
    gain.gain.value = overrides?.volume ?? volume;
    source.connect(gain);
    gain.connect(ctx.destination);
    source.onended = () => {
      setIsPlaying(false);
      onEnd?.();
    };
    source.start(0);
    sourceRef.current = source;
    gainRef.current = gain;
    setIsPlaying(true);
    onPlay?.();
  }, [soundEnabled, playbackRate, volume, interrupt, stop, onPlay, onEnd]);
  const pause = import_react37.useCallback(() => {
    stop();
    onPause?.();
  }, [stop, onPause]);
  import_react37.useEffect(() => {
    if (gainRef.current) {
      gainRef.current.gain.value = volume;
    }
  }, [volume]);
  import_react37.useEffect(() => {
    return () => {
      if (sourceRef.current) {
        try {
          sourceRef.current.stop();
        } catch {}
      }
    };
  }, []);
  return [play, { stop, pause, isPlaying, duration, sound }];
}

// src/registry/components/spotlight-logo/spotlight-logo.tsx
var jsx_dev_runtime39 = require("react/jsx-dev-runtime");
"use client";
var transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200
};
function SpotlightLogo() {
  const id = import_react39.useId();
  const ids = {
    facePattern: `spotlight-logo-face-pattern-${id}`,
    faceFill: `spotlight-logo-face-fill-${id}`,
    stroke: `spotlight-logo-stroke-${id}`,
    radialGradient: `spotlight-logo-radial-gradient-${id}`
  };
  const ref = import_react39.useRef(null);
  const [play] = useSound(metalClickSound);
  const shouldReduceMotion = import_react40.useReducedMotion();
  const isInView = import_react40.useInView(ref, { margin: "80px" });
  const mouseX = import_react40.useMotionValue(0.5);
  const mouseY = import_react40.useMotionValue(0.5);
  const cx = import_react40.useSpring(import_react40.useTransform(mouseX, [0, 1], [0, 556]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1
  });
  const cy = import_react40.useSpring(import_react40.useTransform(mouseY, [0, 1], [0, 400]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1
  });
  import_react39.useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return;
    }
    if (window.matchMedia("(hover: none)").matches) {
      return;
    }
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [shouldReduceMotion, isInView, mouseX, mouseY]);
  return /* @__PURE__ */ jsx_dev_runtime39.jsxDEV(import_react40.motion.svg, {
    ref,
    className: "h-auto w-full touch-manipulation [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]",
    viewBox: "-5.91 -3.58 556 400",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    initial: "normal",
    whileTap: "pressed",
    onTap: () => play(),
    children: [
      /* @__PURE__ */ jsx_dev_runtime39.jsxDEV("defs", {
        children: [
          /* @__PURE__ */ jsx_dev_runtime39.jsxDEV("pattern", {
            id: ids.facePattern,
            x: "0",
            y: "0",
            width: "10",
            height: "10",
            patternUnits: "userSpaceOnUse",
            children: /* @__PURE__ */ jsx_dev_runtime39.jsxDEV("path", {
              d: "M-1 1l2 -2M0 10l10 -10M9 11l2 -2",
              stroke: "var(--pattern)",
              strokeWidth: "1"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime39.jsxDEV(import_react40.motion.g, {
            id: ids.faceFill,
            variants: {
              normal: {
                y: 0
              },
              pressed: {
                y: 16
              }
            },
            transition,
            children: [
              /* @__PURE__ */ jsx_dev_runtime39.jsxDEV("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M166.77 166.98L333.05 262.98L166.77 358.98L0.50 262.98Z M166.77 230.98L111.35 262.98L166.77 294.98L222.20 262.98Z"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime39.jsxDEV("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M488.26 289.86L155.70 97.86L211.12 65.86L321.98 1.86L432.83 65.86L321.98 129.86L543.68 257.86Z M321.98 33.86L377.40 65.86L321.98 97.86L266.55 65.86Z"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime39.jsxDEV(import_react40.motion.path, {
            id: ids.stroke,
            variants: {
              normal: {
                d: [
                  "M166.77 166.98 L333.05 262.98 L166.77 358.98 L0.50 262.98 L166.77 166.98",
                  "M333.05 262.98 L333.05 294.98 L166.77 390.98 L0.50 294.98 L0.50 262.98",
                  "M166.77 358.98 L166.77 390.98",
                  "M166.77 230.98 L222.20 262.98 L166.77 294.98 L111.35 262.98 L166.77 230.98",
                  "M222.20 262.98 L222.20 294.98 L166.77 326.98 L111.35 294.98 L111.35 262.98",
                  "M166.77 294.98 L166.77 326.98",
                  "M488.26 289.86 L155.70 97.86 L211.12 65.86 L321.98 1.86 L432.83 65.86 L321.98 129.86 L543.68 257.86 L488.26 289.86",
                  "M543.68 257.86 L543.68 289.86 L488.26 321.86 L155.70 129.86 L155.70 97.86",
                  "M488.26 289.86 L488.26 321.86",
                  "M432.83 65.86 L432.83 97.86 L321.98 161.86 L321.98 129.86",
                  "M321.98 33.86 L377.40 65.86 L321.98 97.86 L266.55 65.86 L321.98 33.86",
                  "M377.40 65.86 L377.40 97.86 L321.98 129.86 L266.55 97.86 L266.55 65.86",
                  "M321.98 97.86 L321.98 129.86"
                ].join("")
              },
              pressed: {
                d: [
                  "M166.77 182.98 L333.05 278.98 L166.77 374.98 L0.50 278.98 L166.77 182.98",
                  "M333.05 278.98 L333.05 294.98 L166.77 390.98 L0.50 294.98 L0.50 278.98",
                  "M166.77 374.98 L166.77 390.98",
                  "M166.77 246.98 L222.20 278.98 L166.77 310.98 L111.35 278.98 L166.77 246.98",
                  "M222.20 278.98 L222.20 294.98 L166.77 326.98 L111.35 294.98 L111.35 278.98",
                  "M166.77 310.98 L166.77 326.98",
                  "M488.26 305.86 L155.70 113.86 L211.12 81.86 L321.98 17.86 L432.83 81.86 L321.98 145.86 L543.68 273.86 L488.26 305.86",
                  "M543.68 273.86 L543.68 289.86 L488.26 321.86 L155.70 129.86 L155.70 113.86",
                  "M488.26 305.86 L488.26 321.86",
                  "M432.83 81.86 L432.83 97.86 L321.98 161.86 L321.98 145.86",
                  "M321.98 49.86 L377.40 81.86 L321.98 113.86 L266.55 81.86 L321.98 49.86",
                  "M377.40 81.86 L377.40 97.86 L321.98 129.86 L266.55 97.86 L266.55 81.86",
                  "M321.98 113.86 L321.98 129.86"
                ].join("")
              }
            },
            transition
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime39.jsxDEV(import_react40.motion.radialGradient, {
            id: ids.radialGradient,
            cx,
            cy,
            r: "200",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx_dev_runtime39.jsxDEV("stop", {
                className: "dark:[stop-color:#fff]",
                stopColor: "var(--color-zinc-700)"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime39.jsxDEV("stop", {
                className: "dark:[stop-color:var(--color-zinc-600)]",
                offset: "1",
                stopColor: "var(--color-zinc-400)",
                stopOpacity: "0"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime39.jsxDEV("g", {
        className: "fill-background",
        fillRule: "evenodd",
        clipRule: "evenodd",
        children: [
          /* @__PURE__ */ jsx_dev_runtime39.jsxDEV(import_react40.motion.path, {
            variants: {
              normal: {
                d: "M333.05 262.98L333.05 294.98L166.77 390.98L166.77 358.98Z"
              },
              pressed: {
                d: "M333.05 278.98L333.05 294.98L166.77 390.98L166.77 374.98Z"
              }
            },
            transition
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime39.jsxDEV(import_react40.motion.path, {
            variants: {
              normal: {
                d: "M166.77 358.98L166.77 390.98L0.50 294.98L0.50 262.98Z"
              },
              pressed: {
                d: "M166.77 374.98L166.77 390.98L0.50 294.98L0.50 278.98Z"
              }
            },
            transition
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime39.jsxDEV(import_react40.motion.path, {
            variants: {
              normal: {
                d: "M488.26 289.86L155.70 97.86L155.70 129.86L488.26 321.86Z"
              },
              pressed: {
                d: "M488.26 305.86L155.70 113.86L155.70 129.86L488.26 321.86Z"
              }
            },
            transition
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime39.jsxDEV(import_react40.motion.path, {
            variants: {
              normal: {
                d: "M432.83 65.86L321.98 129.86L321.98 161.86L432.83 97.86Z"
              },
              pressed: {
                d: "M432.83 81.86L321.98 145.86L321.98 161.86L432.83 97.86Z"
              }
            },
            transition
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime39.jsxDEV(import_react40.motion.path, {
            variants: {
              normal: {
                d: "M543.68 257.86L488.26 289.86L488.26 321.86L543.68 289.86Z"
              },
              pressed: {
                d: "M543.68 273.86L488.26 305.86L488.26 321.86L543.68 289.86Z"
              }
            },
            transition
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime39.jsxDEV("use", {
        href: `#${ids.faceFill}`,
        className: "fill-background"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime39.jsxDEV("use", {
        href: `#${ids.faceFill}`,
        fill: `url(#${ids.facePattern})`
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime39.jsxDEV("use", {
        href: `#${ids.stroke}`,
        stroke: "var(--stroke)"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime39.jsxDEV("use", {
        href: `#${ids.stroke}`,
        stroke: `url(#${ids.radialGradient})`
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// src/registry/components/status-button/status-button.tsx
var import_react41 = require("react");
var import_lucide_react11 = require("lucide-react");
var import_react42 = require("motion/react");
var jsx_dev_runtime40 = require("react/jsx-dev-runtime");
"use client";
var DEFAULT_SUCCESS_DURATION = 1500;
var swapVariants = {
  initial: { opacity: 0, y: 8, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -8, filter: "blur(4px)" }
};
var reducedMotionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};
var swapTransition = {
  type: "spring",
  duration: 0.3,
  bounce: 0
};
var successVariants = {
  ...swapVariants,
  animate: {
    ...swapVariants.animate,
    transition: {
      type: "spring",
      duration: 0.45,
      bounce: 0.35,
      opacity: swapTransition,
      filter: swapTransition
    }
  }
};
function StatusButton({
  children,
  className,
  onClick,
  status: statusProp,
  onStatusChange,
  successLabel,
  successDuration = DEFAULT_SUCCESS_DURATION,
  ...props
}) {
  const [status, setStatus] = useControllableState({
    prop: statusProp,
    defaultProp: "idle",
    onChange: onStatusChange,
    caller: "StatusButton"
  });
  const shouldReduceMotion = import_react42.useReducedMotion();
  import_react41.useEffect(() => {
    if (status !== "success")
      return;
    const timeoutId = window.setTimeout(() => setStatus("idle"), successDuration);
    return () => window.clearTimeout(timeoutId);
  }, [status, successDuration, setStatus]);
  const isBusy = status !== "idle";
  const handleClick = async (event) => {
    if (isBusy) {
      event.preventDefault();
      return;
    }
    if (!onClick)
      return;
    setStatus("loading");
    try {
      await onClick(event);
      setStatus("success");
    } catch (error) {
      setStatus("idle");
      throw error;
    }
  };
  const variants = shouldReduceMotion ? reducedMotionVariants : swapVariants;
  const transition = shouldReduceMotion ? { duration: 0 } : swapTransition;
  const successContent = /* @__PURE__ */ jsx_dev_runtime40.jsxDEV(jsx_dev_runtime40.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime40.jsxDEV(import_lucide_react11.CheckIcon, {}, undefined, false, undefined, this),
      successLabel ?? /* @__PURE__ */ jsx_dev_runtime40.jsxDEV("span", {
        className: "sr-only",
        children: "Success"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
  return /* @__PURE__ */ jsx_dev_runtime40.jsxDEV(Button, {
    "data-status": status,
    "aria-busy": status === "loading",
    "aria-disabled": isBusy || undefined,
    onClick: handleClick,
    className: import_cn.cn("inline-grid justify-items-center *:col-start-1 *:row-start-1 *:flex *:items-center *:gap-[inherit]", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx_dev_runtime40.jsxDEV("span", {
        "aria-hidden": true,
        className: "invisible",
        children
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime40.jsxDEV("span", {
        "aria-hidden": true,
        className: "invisible",
        children: successContent
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime40.jsxDEV(import_react42.AnimatePresence, {
        initial: false,
        children: [
          status === "idle" && /* @__PURE__ */ jsx_dev_runtime40.jsxDEV(import_react42.motion.span, {
            variants,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            transition,
            children
          }, "idle", false, undefined, this),
          status === "loading" && /* @__PURE__ */ jsx_dev_runtime40.jsxDEV(import_react42.motion.span, {
            role: "status",
            variants,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            transition,
            children: [
              /* @__PURE__ */ jsx_dev_runtime40.jsxDEV(Spinner2, {}, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime40.jsxDEV("span", {
                className: "sr-only",
                children: "Loading"
              }, undefined, false, undefined, this)
            ]
          }, "loading", true, undefined, this),
          status === "success" && /* @__PURE__ */ jsx_dev_runtime40.jsxDEV(import_react42.motion.span, {
            role: "status",
            variants: shouldReduceMotion ? variants : successVariants,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            transition,
            children: successContent
          }, "success", false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function Spinner2({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime40.jsxDEV("svg", {
    "aria-hidden": true,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    className: import_cn.cn("size-4 *:animate-spinner-opacity", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx_dev_runtime40.jsxDEV("rect", {
        x: "11.84",
        y: "7.25",
        width: "4",
        height: "1.5",
        rx: "0.75",
        style: { animationDelay: "-900ms" }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime40.jsxDEV("rect", {
        x: "11.84",
        y: "7.25",
        width: "4",
        height: "1.5",
        rx: "0.75",
        transform: "rotate(36 8 8)",
        style: { animationDelay: "-800ms" }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime40.jsxDEV("rect", {
        x: "11.84",
        y: "7.25",
        width: "4",
        height: "1.5",
        rx: "0.75",
        transform: "rotate(72 8 8)",
        style: { animationDelay: "-700ms" }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime40.jsxDEV("rect", {
        x: "11.84",
        y: "7.25",
        width: "4",
        height: "1.5",
        rx: "0.75",
        transform: "rotate(108 8 8)",
        style: { animationDelay: "-600ms" }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime40.jsxDEV("rect", {
        x: "11.84",
        y: "7.25",
        width: "4",
        height: "1.5",
        rx: "0.75",
        transform: "rotate(144 8 8)",
        style: { animationDelay: "-500ms" }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime40.jsxDEV("rect", {
        x: "11.84",
        y: "7.25",
        width: "4",
        height: "1.5",
        rx: "0.75",
        transform: "rotate(180 8 8)",
        style: { animationDelay: "-400ms" }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime40.jsxDEV("rect", {
        x: "11.84",
        y: "7.25",
        width: "4",
        height: "1.5",
        rx: "0.75",
        transform: "rotate(216 8 8)",
        style: { animationDelay: "-300ms" }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime40.jsxDEV("rect", {
        x: "11.84",
        y: "7.25",
        width: "4",
        height: "1.5",
        rx: "0.75",
        transform: "rotate(252 8 8)",
        style: { animationDelay: "-200ms" }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime40.jsxDEV("rect", {
        x: "11.84",
        y: "7.25",
        width: "4",
        height: "1.5",
        rx: "0.75",
        transform: "rotate(288 8 8)",
        style: { animationDelay: "-100ms" }
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime40.jsxDEV("rect", {
        x: "11.84",
        y: "7.25",
        width: "4",
        height: "1.5",
        rx: "0.75",
        transform: "rotate(324 8 8)"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// src/registry/components/swipe-actions/swipe-actions.tsx
var SwipeActionsPrimitive = __toESM(require("@ncdai/react-swipe-actions"));
var jsx_dev_runtime41 = require("react/jsx-dev-runtime");
var SwipeRoot2 = SwipeActionsPrimitive.SwipeRoot;
var SwipeItem2 = SwipeActionsPrimitive.SwipeItem;
var SwipeActions2 = SwipeActionsPrimitive.SwipeActions;
function SwipeAction2({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime41.jsxDEV(SwipeActionsPrimitive.SwipeAction, {
    className: import_cn.cn("bg-secondary text-xs font-medium whitespace-nowrap text-secondary-foreground select-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-foreground data-armed:brightness-90 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
    ...props,
    children: /* @__PURE__ */ jsx_dev_runtime41.jsxDEV(SwipeActionsPrimitive.SwipeActionContent, {
      className: "min-w-20 flex-col items-center justify-center gap-1.5 px-4",
      children
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function SwipeContent2({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime41.jsxDEV(SwipeActionsPrimitive.SwipeContent, {
    className: import_cn.cn("bg-background data-dragging:cursor-grabbing", className),
    ...props
  }, undefined, false, undefined, this);
}
// src/registry/components/testimonial/testimonial.tsx
var jsx_dev_runtime42 = require("react/jsx-dev-runtime");
function Testimonial({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime42.jsxDEV("figure", {
    "data-slot": "testimonial",
    className: import_cn.cn("flex h-full flex-col", className),
    ...props
  }, undefined, false, undefined, this);
}
function TestimonialQuote({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime42.jsxDEV("blockquote", {
    "data-slot": "testimonial-quote",
    className: import_cn.cn("grow px-4 py-3 text-base text-pretty text-foreground", className),
    ...props
  }, undefined, false, undefined, this);
}
function TestimonialAuthor({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime42.jsxDEV("figcaption", {
    "data-slot": "testimonial-author",
    className: import_cn.cn("grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-3.5 px-4 pt-1 pb-3", className),
    ...props
  }, undefined, false, undefined, this);
}
function TestimonialAvatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime42.jsxDEV("div", {
    "data-slot": "testimonial-avatar",
    className: import_cn.cn("relative row-span-2 size-8 shrink-0", className),
    ...props
  }, undefined, false, undefined, this);
}
function TestimonialAvatarImg({
  className,
  src,
  alt,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime42.jsxDEV("img", {
    "data-slot": "testimonial-avatar-img",
    className: import_cn.cn("size-8 rounded-full select-none", className),
    src,
    alt,
    ...props
  }, undefined, false, undefined, this);
}
function TestimonialAvatarRing({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime42.jsxDEV("div", {
    "data-slot": "testimonial-avatar-ring",
    className: import_cn.cn("pointer-events-none absolute inset-0 rounded-full inset-ring-1 inset-ring-black/10 dark:inset-ring-white/15", className),
    ...props
  }, undefined, false, undefined, this);
}
function TestimonialAuthorName({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime42.jsxDEV("div", {
    "data-slot": "testimonial-author-name",
    className: import_cn.cn("flex items-center gap-1.5 text-sm/4.5 font-semibold text-foreground", className),
    ...props
  }, undefined, false, undefined, this);
}
function TestimonialAuthorTagline({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime42.jsxDEV("div", {
    "data-slot": "testimonial-author-tagline",
    className: import_cn.cn("text-xs/4 text-balance text-muted-foreground", className),
    ...props
  }, undefined, false, undefined, this);
}
function TestimonialVerifiedBadge({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime42.jsxDEV("span", {
    "data-slot": "testimonial-verified-badge",
    className: import_cn.cn("flex [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5", className),
    "aria-hidden": true,
    ...props
  }, undefined, false, undefined, this);
}
// src/registry/components/testimonial-2/testimonial-2.tsx
var jsx_dev_runtime43 = require("react/jsx-dev-runtime");
function Testimonial2({
  className,
  authorName,
  authorTagline,
  url,
  quote
}) {
  return /* @__PURE__ */ jsx_dev_runtime43.jsxDEV("figure", {
    className: import_cn.cn("relative flex flex-col gap-6 pl-3", className),
    children: [
      /* @__PURE__ */ jsx_dev_runtime43.jsxDEV("blockquote", {
        className: "relative block w-full font-serif text-xl text-foreground md:w-lg md:text-2xl",
        children: [
          /* @__PURE__ */ jsx_dev_runtime43.jsxDEV("span", {
            className: "absolute -left-3 text-muted-foreground select-none",
            "aria-hidden": "true",
            children: "“"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime43.jsxDEV("p", {
            className: "inline text-pretty",
            children: quote
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime43.jsxDEV("span", {
            className: "absolute translate-x-0.5 text-muted-foreground select-none",
            "aria-hidden": "true",
            children: "”"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime43.jsxDEV("figcaption", {
        className: "ml-auto flex w-full items-center gap-2 md:w-1/2",
        children: [
          /* @__PURE__ */ jsx_dev_runtime43.jsxDEV("div", {
            className: "hidden h-px grow translate-y-px bg-border md:block"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime43.jsxDEV("div", {
            className: "flex flex-col md:ml-auto md:text-right",
            children: /* @__PURE__ */ jsx_dev_runtime43.jsxDEV("span", {
              className: "text-sm/none font-medium",
              children: [
                /* @__PURE__ */ jsx_dev_runtime43.jsxDEV("a", {
                  href: url,
                  target: "_blank",
                  rel: "noopener",
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime43.jsxDEV("span", {
                      className: "absolute inset-0",
                      "aria-hidden": true
                    }, undefined, false, undefined, this),
                    authorName
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime43.jsxDEV("span", {
                  className: "mt-1 block text-muted-foreground md:mt-0 md:inline",
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime43.jsxDEV("span", {
                      className: "hidden text-foreground md:inline",
                      children: ", "
                    }, undefined, false, undefined, this),
                    authorTagline
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
// src/registry/components/testimonial-spotlight/testimonial-spotlight.tsx
var import_react43 = require("react");
var jsx_dev_runtime44 = require("react/jsx-dev-runtime");
"use client";
function TestimonialSpotlight({
  children,
  className,
  ...props
}) {
  const itemRef = import_react43.useRef(null);
  const handleMouseMove = (e) => {
    if (!itemRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    itemRef.current.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    itemRef.current.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  };
  return /* @__PURE__ */ jsx_dev_runtime44.jsxDEV("div", {
    ref: itemRef,
    "data-slot": "testimonial-spotlight",
    className: import_cn.cn("group/testimonial-spotlight relative overflow-hidden rounded-xl bg-card/50 inset-ring-1 inset-ring-foreground/10", className),
    onMouseMove: handleMouseMove,
    ...props,
    children: [
      /* @__PURE__ */ jsx_dev_runtime44.jsxDEV("div", {
        className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover/testimonial-spotlight:opacity-(--spotlight-opacity,0.5)",
        style: {
          background: `radial-gradient(circle at var(--spotlight-x) var(--spotlight-y), var(--spotlight-color,rgba(255,255,255,0.2)), transparent var(--spotlight-size,60%))`
        }
      }, undefined, false, undefined, this),
      children
    ]
  }, undefined, true, undefined, this);
}
// src/registry/components/text-flip/text-flip.tsx
var import_react44 = require("react");
var import_react45 = require("motion/react");
var jsx_dev_runtime45 = require("react/jsx-dev-runtime");
"use client";
var defaultVariants = {
  initial: { y: "-20%", opacity: 0, filter: "blur(1px)" },
  animate: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)"
  },
  exit: {
    y: "40%",
    opacity: 0,
    filter: "blur(1px)",
    transition: { ease: "easeOut" }
  }
};
function TextFlip({
  as: Component = import_react45.motion.p,
  className,
  children,
  interval = 2,
  transition = { duration: 0.3 },
  variants = defaultVariants,
  play = true,
  onIndexChange
}) {
  const [currentIndex, setCurrentIndex] = import_react44.useState(0);
  const items = import_react44.Children.toArray(children);
  import_react44.useEffect(() => {
    if (!play)
      return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % items.length;
        onIndexChange?.(next);
        return next;
      });
    }, interval * 1000);
    return () => clearInterval(timer);
  }, [play, interval, items.length, onIndexChange]);
  return /* @__PURE__ */ jsx_dev_runtime45.jsxDEV(import_react45.AnimatePresence, {
    mode: "wait",
    initial: false,
    children: /* @__PURE__ */ jsx_dev_runtime45.jsxDEV(Component, {
      className: import_cn.cn("inline-block", className),
      initial: "initial",
      animate: "animate",
      exit: "exit",
      transition,
      variants,
      children: items[currentIndex]
    }, currentIndex, false, undefined, this)
  }, undefined, false, undefined, this);
}
// src/registry/components/theme-switcher/theme-switcher.tsx
var import_react46 = require("react");
var import_lucide_react12 = require("lucide-react");
var import_react47 = require("motion/react");
var import_next_themes = require("next-themes");
var jsx_dev_runtime46 = require("react/jsx-dev-runtime");
"use client";
function ThemeOption({
  icon,
  value,
  isActive,
  onClick
}) {
  return /* @__PURE__ */ jsx_dev_runtime46.jsxDEV("button", {
    "data-active": isActive,
    className: "relative flex size-8 items-center justify-center rounded-full text-muted-foreground transition-[color] hover:text-foreground data-[active=true]:text-foreground [&_svg]:size-4",
    role: "radio",
    "aria-checked": isActive,
    "aria-label": `Switch to ${value} theme`,
    onClick: () => onClick(value),
    children: [
      icon,
      isActive && /* @__PURE__ */ jsx_dev_runtime46.jsxDEV(import_react47.motion.span, {
        layoutId: "theme-option",
        transition: { type: "spring", bounce: 0.3, duration: 0.6 },
        className: "absolute inset-0 rounded-full border"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var THEME_OPTIONS = [
  {
    icon: /* @__PURE__ */ jsx_dev_runtime46.jsxDEV(import_lucide_react12.MonitorIcon, {}, undefined, false, undefined, this),
    value: "system"
  },
  {
    icon: /* @__PURE__ */ jsx_dev_runtime46.jsxDEV(import_lucide_react12.SunIcon, {}, undefined, false, undefined, this),
    value: "light"
  },
  {
    icon: /* @__PURE__ */ jsx_dev_runtime46.jsxDEV(import_lucide_react12.MoonIcon, {}, undefined, false, undefined, this),
    value: "dark"
  }
];
function ThemeSwitcher() {
  const { theme, setTheme } = import_next_themes.useTheme();
  const isMounted = import_react46.useSyncExternalStore(() => () => {}, () => true, () => false);
  if (!isMounted) {
    return /* @__PURE__ */ jsx_dev_runtime46.jsxDEV("div", {
      className: "flex h-8 w-24"
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime46.jsxDEV(import_react47.motion.div, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
    className: "inline-flex items-center overflow-clip rounded-full bg-background inset-ring-1 inset-ring-border",
    role: "radiogroup",
    children: THEME_OPTIONS.map((option) => /* @__PURE__ */ jsx_dev_runtime46.jsxDEV(ThemeOption, {
      icon: option.icon,
      value: option.value,
      isActive: theme === option.value,
      onClick: setTheme
    }, option.value, false, undefined, this))
  }, String(isMounted), false, undefined, this);
}
// src/registry/components/timescale/timescale.tsx
var import_react48 = require("react");
var jsx_dev_runtime47 = require("react/jsx-dev-runtime");
"use client";
function TimescaleRoot({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime47.jsxDEV("div", {
    "data-slot": "timescale-root",
    "data-orientation": orientation,
    className: import_cn.cn("group/timescale relative flex w-full [--timescale-rail:--spacing(14)]", "data-[orientation=vertical]:flex-col", className),
    ...props
  }, undefined, false, undefined, this);
}
function TimescaleViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime47.jsxDEV("div", {
    "data-slot": "timescale-viewport",
    className: import_cn.cn("no-scrollbar w-full", "group-data-[orientation=horizontal]/timescale:flex group-data-[orientation=horizontal]/timescale:flex-1 group-data-[orientation=horizontal]/timescale:scroll-fade-x group-data-[orientation=horizontal]/timescale:overflow-x-auto group-data-[orientation=horizontal]/timescale:overscroll-x-contain group-data-[orientation=horizontal]/timescale:pl-20 group-data-[orientation=horizontal]/timescale:scroll-fade-s-40", className),
    ...props
  }, undefined, false, undefined, this);
}
function TimescaleHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime47.jsxDEV("div", {
    "data-slot": "timescale-header",
    "aria-hidden": "true",
    className: import_cn.cn("z-10", "group-data-[orientation=horizontal]/timescale:absolute group-data-[orientation=horizontal]/timescale:top-0 group-data-[orientation=horizontal]/timescale:left-0 group-data-[orientation=horizontal]/timescale:w-20 group-data-[orientation=horizontal]/timescale:shrink-0 group-data-[orientation=horizontal]/timescale:bg-linear-to-r group-data-[orientation=horizontal]/timescale:from-background group-data-[orientation=horizontal]/timescale:from-75% group-data-[orientation=horizontal]/timescale:to-transparent group-data-[orientation=horizontal]/timescale:pr-4 group-data-[orientation=horizontal]/timescale:text-right", "group-data-[orientation=vertical]/timescale:grid group-data-[orientation=vertical]/timescale:w-full group-data-[orientation=vertical]/timescale:grid-cols-[var(--timescale-rail)_1fr] group-data-[orientation=vertical]/timescale:gap-x-4 group-data-[orientation=vertical]/timescale:bg-background", className),
    ...props
  }, undefined, false, undefined, this);
}
function TimescaleTrack({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime47.jsxDEV("div", {
    "data-slot": "timescale-track",
    className: import_cn.cn("relative flex", "group-data-[orientation=horizontal]/timescale:w-max group-data-[orientation=horizontal]/timescale:items-start", "group-data-[orientation=vertical]/timescale:w-full group-data-[orientation=vertical]/timescale:flex-col group-data-[orientation=vertical]/timescale:pt-4", className),
    ...props
  }, undefined, false, undefined, this);
}
function TimescaleRail({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime47.jsxDEV("div", {
    "data-slot": "timescale-rail",
    "aria-hidden": "true",
    className: import_cn.cn("pointer-events-none absolute border-dashed", "group-data-[orientation=horizontal]/timescale:inset-x-0 group-data-[orientation=horizontal]/timescale:top-(--timescale-rail) group-data-[orientation=horizontal]/timescale:h-px group-data-[orientation=horizontal]/timescale:border-t", "group-data-[orientation=vertical]/timescale:inset-y-0 group-data-[orientation=vertical]/timescale:left-(--timescale-rail) group-data-[orientation=vertical]/timescale:w-px group-data-[orientation=vertical]/timescale:border-l", className),
    ...props
  }, undefined, false, undefined, this);
}
function TimescaleItem({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime47.jsxDEV("div", {
    "data-slot": "timescale-item",
    className: import_cn.cn("relative", "group-data-[orientation=horizontal]/timescale:w-20 group-data-[orientation=horizontal]/timescale:shrink-0 group-data-[orientation=horizontal]/timescale:not-last:pr-4 group-data-[orientation=horizontal]/timescale:has-data-[slot=timescale-content]:w-80", "group-data-[orientation=vertical]/timescale:grid group-data-[orientation=vertical]/timescale:w-full group-data-[orientation=vertical]/timescale:grid-cols-[var(--timescale-rail)_1fr] group-data-[orientation=vertical]/timescale:gap-x-4 group-data-[orientation=vertical]/timescale:not-last:pb-4", className),
    ...props
  }, undefined, false, undefined, this);
}
function TimescaleTick({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime47.jsxDEV("span", {
    "data-slot": "timescale-tick",
    "aria-hidden": "true",
    className: import_cn.cn("absolute z-10 bg-border", "group-data-[orientation=horizontal]/timescale:top-(--timescale-rail) group-data-[orientation=horizontal]/timescale:left-0 group-data-[orientation=horizontal]/timescale:h-3 group-data-[orientation=horizontal]/timescale:w-px group-data-[orientation=horizontal]/timescale:-translate-y-1/2", "group-data-[orientation=vertical]/timescale:top-2.5 group-data-[orientation=vertical]/timescale:left-(--timescale-rail) group-data-[orientation=vertical]/timescale:h-px group-data-[orientation=vertical]/timescale:w-3 group-data-[orientation=vertical]/timescale:-translate-x-1/2", className),
    ...props
  }, undefined, false, undefined, this);
}
function TimescaleAge({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime47.jsxDEV("p", {
    "data-slot": "timescale-age",
    className: import_cn.cn("text-xs/5 font-medium text-muted-foreground tabular-nums", "in-data-[slot=timescale-header]:tracking-widest in-data-[slot=timescale-header]:uppercase", "group-data-[orientation=vertical]/timescale:col-start-1 group-data-[orientation=vertical]/timescale:row-start-1 group-data-[orientation=vertical]/timescale:pr-4 group-data-[orientation=vertical]/timescale:text-right", className),
    ...props
  }, undefined, false, undefined, this);
}
function TimescaleYear({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime47.jsxDEV("p", {
    "data-slot": "timescale-year",
    className: import_cn.cn("text-xs/5 font-medium text-muted-foreground tabular-nums", "in-data-[slot=timescale-header]:tracking-widest in-data-[slot=timescale-header]:uppercase", "group-data-[orientation=vertical]/timescale:col-start-2 group-data-[orientation=vertical]/timescale:row-start-1", className),
    ...props
  }, undefined, false, undefined, this);
}
function TimescaleContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime47.jsxDEV("div", {
    "data-slot": "timescale-content",
    className: import_cn.cn("w-full py-4 text-left", "group-data-[orientation=horizontal]/timescale:mt-4", "group-data-[orientation=vertical]/timescale:col-start-2 group-data-[orientation=vertical]/timescale:row-start-2", className),
    ...props
  }, undefined, false, undefined, this);
}
var INTRO_SCROLL_START_HOLD = 200;
function TimescaleIntroScroll({
  children
}) {
  const ref = import_react48.useRef(null);
  import_react48.useEffect(() => {
    const viewport = ref.current?.querySelector('[data-slot="timescale-viewport"]');
    if (!viewport)
      return;
    const distance = viewport.scrollWidth - viewport.clientWidth;
    if (distance <= 0)
      return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      viewport.scrollLeft = distance;
      return;
    }
    const timer = window.setTimeout(() => {
      viewport.scrollTo({ left: distance, behavior: "smooth" });
    }, INTRO_SCROLL_START_HOLD);
    return () => window.clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsx_dev_runtime47.jsxDEV("div", {
    ref,
    className: "contents",
    children
  }, undefined, false, undefined, this);
}
// src/registry/components/toc-minimap/toc-minimap.tsx
var import_react49 = require("react");

// src/lib/soundcn/u-mini-map-open.ts
var uMiniMapOpenSound = {
  name: "u-mini-map-open",
  dataUri: "data:audio/mpeg;base64,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",
  duration: 0.482,
  format: "mp3",
  license: "CC0",
  author: "Kenney"
};

// src/components/ui/hover-card.tsx
var import_preview_card = require("@base-ui/react/preview-card");
var jsx_dev_runtime48 = require("react/jsx-dev-runtime");
"use client";
function HoverCard({ ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime48.jsxDEV(import_preview_card.PreviewCard.Root, {
    "data-slot": "hover-card",
    ...props
  }, undefined, false, undefined, this);
}
function HoverCardTrigger({ ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime48.jsxDEV(import_preview_card.PreviewCard.Trigger, {
    "data-slot": "hover-card-trigger",
    ...props
  }, undefined, false, undefined, this);
}
function HoverCardContent({
  className,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 4,
  positionMethod,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime48.jsxDEV(import_preview_card.PreviewCard.Portal, {
    "data-slot": "hover-card-portal",
    children: /* @__PURE__ */ jsx_dev_runtime48.jsxDEV(import_preview_card.PreviewCard.Positioner, {
      align,
      alignOffset,
      side,
      sideOffset,
      positionMethod,
      className: "isolate z-50",
      children: /* @__PURE__ */ jsx_dev_runtime48.jsxDEV(import_preview_card.PreviewCard.Popup, {
        "data-slot": "hover-card-content",
        className: import_cn.cn("z-50 w-64 origin-(--transform-origin) rounded-xl bg-popover p-4 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:ring-foreground/20 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
        ...props
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}

// src/registry/components/toc-minimap/toc-minimap.tsx
var jsx_dev_runtime49 = require("react/jsx-dev-runtime");
"use client";
function TOCMinimap({ items, className }) {
  const itemIds = import_react49.useMemo(() => items.map((item) => item.url.replace("#", "")), [items]);
  const activeHeading = useActiveHeading(itemIds);
  const [play] = useSound(uMiniMapOpenSound, { volume: 0.3 });
  if (!items.length) {
    return null;
  }
  return /* @__PURE__ */ jsx_dev_runtime49.jsxDEV("div", {
    className: import_cn.cn("ml-auto w-18", className),
    children: /* @__PURE__ */ jsx_dev_runtime49.jsxDEV(HoverCard, {
      onOpenChange: (open) => {
        if (open)
          play();
      },
      children: [
        /* @__PURE__ */ jsx_dev_runtime49.jsxDEV(HoverCardTrigger, {
          delay: 0,
          closeDelay: 0,
          render: /* @__PURE__ */ jsx_dev_runtime49.jsxDEV("div", {
            className: "flex max-h-[50dvh] flex-col gap-3 overflow-hidden py-3 pl-6 opacity-100 transition-opacity duration-200 data-popup-open:opacity-0",
            children: items.map((item) => /* @__PURE__ */ jsx_dev_runtime49.jsxDEV("div", {
              "data-depth": item.depth,
              "data-active": item.url === `#${activeHeading}`,
              className: import_cn.cn("h-0.5 w-6 shrink-0 rounded-xs bg-ring/50 transition-[background-color] duration-200", "data-[depth=3]:ml-2 data-[depth=3]:w-4", "data-[depth=4]:ml-4 data-[depth=4]:w-2", "data-active:bg-foreground")
            }, item.url, false, undefined, this))
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime49.jsxDEV(HoverCardContent, {
          className: "w-56 overflow-hidden p-0 duration-200 data-[side=left]:slide-in-from-right-3 data-[side=left]:slide-out-to-right-3 data-open:zoom-in-100 data-closed:zoom-out-100",
          align: "start",
          alignOffset: 0,
          side: "left",
          sideOffset: -60,
          children: /* @__PURE__ */ jsx_dev_runtime49.jsxDEV("div", {
            className: "flex max-h-[50dvh] overflow-y-auto overscroll-contain",
            children: /* @__PURE__ */ jsx_dev_runtime49.jsxDEV("ul", {
              className: "flex size-full flex-col px-6 py-4 text-sm",
              children: items.map((item) => /* @__PURE__ */ jsx_dev_runtime49.jsxDEV("li", {
                className: "flex py-1",
                children: /* @__PURE__ */ jsx_dev_runtime49.jsxDEV("a", {
                  href: item.url,
                  "data-depth": item.depth,
                  "data-active": item.url === `#${activeHeading}`,
                  className: import_cn.cn("line-clamp-2 w-full transition-[color] duration-200", "text-muted-foreground hover:text-foreground data-active:text-foreground", "data-[depth=3]:pl-4 data-[depth=4]:pl-8"),
                  onClick: handleItemClick,
                  children: item.title
                }, undefined, false, undefined, this)
              }, item.url, false, undefined, this))
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
function useActiveHeading(itemIds) {
  const [activeId, setActiveId] = import_react49.useState(null);
  import_react49.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }
    }, { rootMargin: "0% 0% -80% 0%", threshold: 0.98 });
    for (const id of itemIds ?? []) {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    }
    return () => {
      for (const id of itemIds ?? []) {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      }
    };
  }, [itemIds]);
  return activeId;
}
function handleItemClick(e) {
  e.preventDefault();
  const url = e.currentTarget.getAttribute("href") ?? "";
  scrollToHeading(url);
}
function scrollToHeading(url) {
  history.pushState(null, "", url);
  document.getElementById(url.replace("#", ""))?.scrollIntoView({
    behavior: "smooth"
  });
}
// src/registry/components/twemoji/lib/twemoji-regex.ts
var regex = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g;
var twemoji_regex_default = regex;

// src/registry/components/twemoji/twemoji.tsx
var jsx_dev_runtime50 = require("react/jsx-dev-runtime");
var VARIATION_SELECTOR_16 = /\uFE0F/g;
var ZERO_WIDTH_JOINER = String.fromCharCode(8205);
var TWEMOJI_CDN_URL = "https://abs-0.twimg.com/emoji/v2/svg";
function Twemoji({
  children,
  className,
  source = defaultSource
}) {
  const parts = [];
  let lastIndex = 0;
  const globalRegex = new RegExp(twemoji_regex_default.source, "g");
  let match;
  while ((match = globalRegex.exec(children)) !== null) {
    if (match.index > lastIndex) {
      parts.push(children.substring(lastIndex, match.index));
    }
    const rawText = match[0];
    const codePoint = getEmojiCodePoint(rawText);
    if (codePoint) {
      parts.push(/* @__PURE__ */ jsx_dev_runtime50.jsxDEV("img", {
        className: import_cn.cn("twemoji", className),
        draggable: false,
        alt: rawText,
        src: source(codePoint)
      }, match.index, false, undefined, this));
    } else {
      parts.push(rawText);
    }
    lastIndex = globalRegex.lastIndex;
  }
  if (lastIndex < children.length) {
    parts.push(children.substring(lastIndex));
  }
  return /* @__PURE__ */ jsx_dev_runtime50.jsxDEV(jsx_dev_runtime50.Fragment, {
    children: parts
  }, undefined, false, undefined, this);
}
function getEmojiCodePoint(rawText) {
  return toCodePoint(rawText.indexOf(ZERO_WIDTH_JOINER) < 0 ? rawText.replace(VARIATION_SELECTOR_16, "") : rawText);
}
function toCodePoint(unicodeSurrogates, sep = "-") {
  const result = [];
  let code = 0;
  let previous = 0;
  let i = 0;
  while (i < unicodeSurrogates.length) {
    code = unicodeSurrogates.charCodeAt(i++);
    if (previous) {
      result.push((65536 + (previous - 55296 << 10) + (code - 56320)).toString(16));
      previous = 0;
    } else if (55296 <= code && code <= 56319) {
      previous = code;
    } else {
      result.push(code.toString(16));
    }
  }
  return result.join(sep);
}
function defaultSource(codePoint) {
  return `${TWEMOJI_CDN_URL}/${codePoint}.svg`;
}
// src/registry/components/wheel-picker/wheel-picker.tsx
var import_style = require("@ncdai/react-wheel-picker/style.css");
var WheelPickerPrimitive = __toESM(require("@ncdai/react-wheel-picker"));
var jsx_dev_runtime51 = require("react/jsx-dev-runtime");
function WheelPickerWrapper2({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime51.jsxDEV(WheelPickerPrimitive.WheelPickerWrapper, {
    className: import_cn.cn("w-56 rounded-lg border border-zinc-200 bg-white px-1 shadow-xs dark:border-zinc-700/80 dark:bg-zinc-900", "*:data-rwp:first:*:data-rwp-highlight-wrapper:rounded-s-md", "*:data-rwp:last:*:data-rwp-highlight-wrapper:rounded-e-md", className),
    ...props
  }, undefined, false, undefined, this);
}
function WheelPicker2({
  classNames,
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime51.jsxDEV(WheelPickerPrimitive.WheelPicker, {
    classNames: {
      optionItem: import_cn.cn("text-zinc-400 dark:text-zinc-500 data-disabled:opacity-40", classNames?.optionItem),
      highlightWrapper: import_cn.cn("bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50", "data-rwp-focused:inset-ring-2 data-rwp-focused:inset-ring-zinc-300 dark:data-rwp-focused:inset-ring-zinc-600", classNames?.highlightWrapper),
      highlightItem: import_cn.cn("data-disabled:opacity-40", classNames?.highlightItem)
    },
    ...props
  }, undefined, false, undefined, this);
}
// src/registry/components/work-experience/work-experience.tsx
var import_react50 = require("react");
var import_date_fns3 = require("date-fns");
var import_lucide_react13 = require("lucide-react");
var import_react_markdown = __toESM(require("react-markdown"));

// src/components/ui/collapsible.tsx
var import_collapsible = require("@base-ui/react/collapsible");
var jsx_dev_runtime52 = require("react/jsx-dev-runtime");
"use client";
function Collapsible({ ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime52.jsxDEV(import_collapsible.Collapsible.Root, {
    "data-slot": "collapsible",
    ...props
  }, undefined, false, undefined, this);
}
function CollapsibleTrigger({ ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime52.jsxDEV(import_collapsible.Collapsible.Trigger, {
    "data-slot": "collapsible-trigger",
    ...props
  }, undefined, false, undefined, this);
}
function CollapsibleContent({ ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime52.jsxDEV(import_collapsible.Collapsible.Panel, {
    "data-slot": "collapsible-content",
    ...props
  }, undefined, false, undefined, this);
}

// src/components/ui/separator.tsx
var import_separator = require("@base-ui/react/separator");
var jsx_dev_runtime53 = require("react/jsx-dev-runtime");
"use client";
function Separator({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsx_dev_runtime53.jsxDEV(import_separator.Separator, {
    "data-slot": "separator",
    orientation,
    className: import_cn.cn("shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch", className),
    ...props
  }, undefined, false, undefined, this);
}

// src/registry/components/work-experience/work-experience.tsx
var jsx_dev_runtime54 = require("react/jsx-dev-runtime");
"use client";
function WorkExperience({
  className,
  experiences
}) {
  return /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("div", {
    className: import_cn.cn("bg-background px-4 text-foreground", className),
    children: experiences.map((experience) => /* @__PURE__ */ jsx_dev_runtime54.jsxDEV(ExperienceItem, {
      experience
    }, experience.id, false, undefined, this))
  }, undefined, false, undefined, this);
}
function ExperienceItem({ experience }) {
  return /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("div", {
    className: "space-y-4 py-4",
    children: [
      /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("div", {
        className: "not-prose flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("div", {
            className: "flex size-6 shrink-0 items-center justify-center",
            children: experience.companyLogo ? /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("img", {
              src: experience.companyLogo,
              alt: experience.companyName,
              className: "size-6 rounded-full",
              "aria-hidden": true
            }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("span", {
              className: "flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("h3", {
            className: "text-lg/snug font-semibold",
            children: experience.companyWebsite ? /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("a", {
              className: "link",
              href: experience.companyWebsite,
              target: "_blank",
              rel: "noopener noreferrer",
              children: experience.companyName
            }, undefined, false, undefined, this) : experience.companyName
          }, undefined, false, undefined, this),
          experience.isCurrentEmployer && /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("span", {
            className: "relative flex items-center justify-center",
            "aria-label": "Current Employer",
            children: [
              /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("span", {
                className: "absolute inline-flex size-3 animate-ping rounded-full bg-sky-500 opacity-50"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("span", {
                className: "relative inline-flex size-2 rounded-full bg-sky-500"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("div", {
        className: "relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border",
        children: experience.positions.map((position) => /* @__PURE__ */ jsx_dev_runtime54.jsxDEV(ExperiencePositionItem, {
          position
        }, position.id, false, undefined, this))
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function ExperiencePositionItem({
  position
}) {
  const chevronsUpDownIconRef = import_react50.useRef(null);
  const handleOpenChange = import_react50.useCallback((open) => {
    const controls = chevronsUpDownIconRef.current;
    if (!controls)
      return;
    if (open) {
      controls.startAnimation();
    } else {
      controls.stopAnimation();
    }
  }, []);
  const { start, end } = position.employmentPeriod;
  const isOngoing = !end;
  const duration = formatDuration(start, end);
  return /* @__PURE__ */ jsx_dev_runtime54.jsxDEV(Collapsible, {
    className: "relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background",
    defaultOpen: position.isExpanded,
    onOpenChange: handleOpenChange,
    disabled: !position.description,
    children: [
      /* @__PURE__ */ jsx_dev_runtime54.jsxDEV(CollapsibleTrigger, {
        className: import_cn.cn("group/experience-position not-prose block w-full text-left select-none", "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:rounded-lg hover:before:bg-muted/30", "data-disabled:before:content-none"),
        children: [
          /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("div", {
            className: "relative z-1 mb-1 flex items-start gap-3 text-base",
            children: [
              /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("div", {
                className: import_cn.cn("flex size-6 shrink-0 items-center justify-center rounded-lg", "bg-muted text-muted-foreground", "border border-muted-foreground/15 ring-1 ring-line ring-offset-1 ring-offset-background", "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"),
                children: position.icon ?? /* @__PURE__ */ jsx_dev_runtime54.jsxDEV(import_lucide_react13.BriefcaseBusinessIcon, {}, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("h4", {
                className: "flex-1 font-medium text-balance text-foreground",
                children: position.title
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("div", {
                className: "shrink-0 text-muted-foreground group-data-disabled/experience-position:hidden [&_svg]:h-lh [&_svg]:w-4",
                children: /* @__PURE__ */ jsx_dev_runtime54.jsxDEV(ChevronsUpDownIcon, {
                  ref: chevronsUpDownIconRef,
                  duration: 0.15
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("dl", {
            className: "relative z-1 flex items-center gap-2 pl-9 text-sm text-muted-foreground",
            children: [
              position.employmentType && /* @__PURE__ */ jsx_dev_runtime54.jsxDEV(jsx_dev_runtime54.Fragment, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("div", {
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("dt", {
                        className: "sr-only",
                        children: "Employment Type"
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("dd", {
                        children: position.employmentType
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime54.jsxDEV(Separator, {
                    className: "data-vertical:h-4 data-vertical:self-center",
                    orientation: "vertical",
                    "aria-hidden": true
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("div", {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("dt", {
                    className: "sr-only",
                    children: "Employment Period"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("dd", {
                    className: "flex items-center gap-0.5 tabular-nums",
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("span", {
                        children: start
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("span", {
                        className: "font-mono",
                        children: "—"
                      }, undefined, false, undefined, this),
                      isOngoing ? /* @__PURE__ */ jsx_dev_runtime54.jsxDEV(import_lucide_react13.InfinityIcon, {
                        className: "size-4.5 translate-y-[0.5px]",
                        "aria-label": "Present"
                      }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("span", {
                        children: end
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              duration && /* @__PURE__ */ jsx_dev_runtime54.jsxDEV(jsx_dev_runtime54.Fragment, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime54.jsxDEV(Separator, {
                    className: "data-vertical:h-4 data-vertical:self-center",
                    orientation: "vertical",
                    "aria-hidden": true
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("div", {
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("dt", {
                        className: "sr-only",
                        children: "Duration"
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("dd", {
                        className: "tabular-nums",
                        children: duration
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime54.jsxDEV(CollapsibleContent, {
        className: "overflow-hidden",
        children: position.description && /* @__PURE__ */ jsx_dev_runtime54.jsxDEV(Prose, {
          className: "pt-2 pl-9",
          children: /* @__PURE__ */ jsx_dev_runtime54.jsxDEV(import_react_markdown.default, {
            children: position.description
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      Array.isArray(position.skills) && position.skills.length > 0 && /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("ul", {
        className: "not-prose flex flex-wrap gap-1.5 pt-3 pl-9",
        children: position.skills.map((skill, index) => /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("li", {
          className: "flex",
          children: /* @__PURE__ */ jsx_dev_runtime54.jsxDEV(Skill, {
            children: skill
          }, undefined, false, undefined, this)
        }, index, false, undefined, this))
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function Prose({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("div", {
    className: import_cn.cn("prose max-w-none prose-ncdai prose-zinc dark:prose-invert", className),
    ...props
  }, undefined, false, undefined, this);
}
function Skill({ className, ...props }) {
  return /* @__PURE__ */ jsx_dev_runtime54.jsxDEV("span", {
    className: import_cn.cn("inline-flex items-center rounded-md border bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground", className),
    ...props
  }, undefined, false, undefined, this);
}
function formatDuration(start, end) {
  const startHasMonth = start.includes(".");
  const endHasMonth = end ? end.includes(".") : true;
  if (!startHasMonth && end && !endHasMonth) {
    const years = parseInt(end, 10) - parseInt(start, 10);
    if (years <= 0) {
      return "";
    }
    return `${years}y`;
  }
  const startDate = parsePeriodDate(start, "first");
  const endDate = end ? parsePeriodDate(end, "last") : new Date;
  const totalMonths = import_date_fns3.differenceInMonths(endDate, startDate) + 1;
  if (totalMonths <= 0) {
    return "";
  }
  if (totalMonths < 12) {
    return `${totalMonths}m`;
  }
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (months === 0) {
    return `${years}y`;
  }
  return `${years}y ${months}m`;
}
function parsePeriodDate(str, fallbackMonth) {
  if (str.includes(".")) {
    return import_date_fns3.parse(str, "MM.yyyy", new Date);
  }
  return import_date_fns3.parse(`${fallbackMonth === "last" ? "12" : "01"}.${str}`, "MM.yyyy", new Date);
}
// src/registry/hooks/sound/use-sound.ts
var import_react51 = require("react");

// src/registry/lib/sound/sound-engine.ts
var audioContext2 = null;
var bufferCache2 = new Map;
function getAudioContext2() {
  if (!audioContext2) {
    audioContext2 = new AudioContext;
  }
  return audioContext2;
}
function fetchAndDecodeAudio(url) {
  const cached = bufferCache2.get(url);
  if (cached)
    return cached;
  const ctx = getAudioContext2();
  const promise = fetch(url).then((res) => {
    if (!res.ok)
      throw new Error(`Failed to fetch audio: ${res.status}`);
    return res.arrayBuffer();
  }).then((data) => ctx.decodeAudioData(data)).catch((err) => {
    bufferCache2.delete(url);
    throw err;
  });
  bufferCache2.set(url, promise);
  return promise;
}

// src/registry/hooks/sound/use-sound.ts
"use client";
function useSound2(url, options = {}) {
  const {
    volume = 1,
    playbackRate = 1,
    interrupt = false,
    soundEnabled = true,
    lazy = false,
    onPlay,
    onEnd,
    onPause,
    onStop
  } = options;
  const [isPlaying, setIsPlaying] = import_react51.useState(false);
  const sourceRef = import_react51.useRef(null);
  const gainRef = import_react51.useRef(null);
  const bufferRef = import_react51.useRef(null);
  import_react51.useEffect(() => {
    bufferRef.current = null;
    if (lazy)
      return;
    let cancelled = false;
    fetchAndDecodeAudio(url).then((buffer) => {
      if (cancelled)
        return;
      bufferRef.current = buffer;
    });
    return () => {
      cancelled = true;
    };
  }, [url, lazy]);
  const stop = import_react51.useCallback(() => {
    if (sourceRef.current) {
      try {
        sourceRef.current.stop();
      } catch {}
      sourceRef.current = null;
    }
    setIsPlaying(false);
    onStop?.();
  }, [onStop]);
  const play = import_react51.useCallback((overrides) => {
    if (!soundEnabled)
      return;
    const startPlayback = (buffer) => {
      const ctx = getAudioContext2();
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      if (interrupt && sourceRef.current) {
        stop();
      }
      const source = ctx.createBufferSource();
      const gain = ctx.createGain();
      source.buffer = buffer;
      source.playbackRate.value = overrides?.playbackRate ?? playbackRate;
      gain.gain.value = overrides?.volume ?? volume;
      source.connect(gain);
      gain.connect(ctx.destination);
      source.onended = () => {
        setIsPlaying(false);
        onEnd?.();
      };
      source.start(0);
      sourceRef.current = source;
      gainRef.current = gain;
      setIsPlaying(true);
      onPlay?.();
    };
    if (bufferRef.current) {
      startPlayback(bufferRef.current);
      return;
    }
    fetchAndDecodeAudio(url).then((buffer) => {
      bufferRef.current = buffer;
      startPlayback(buffer);
    });
  }, [soundEnabled, url, interrupt, playbackRate, volume, stop, onPlay, onEnd]);
  const pause = import_react51.useCallback(() => {
    stop();
    onPause?.();
  }, [stop, onPause]);
  import_react51.useEffect(() => {
    if (gainRef.current) {
      gainRef.current.gain.value = volume;
    }
  }, [volume]);
  import_react51.useEffect(() => {
    return () => {
      if (sourceRef.current) {
        try {
          sourceRef.current.stop();
        } catch {}
      }
    };
  }, []);
  const controls = { stop, pause, isPlaying };
  return [play, controls];
}
// src/registry/lib/haptic/haptic.ts
var isTouchDevice = typeof window !== "undefined" ? window.matchMedia("(pointer: coarse)").matches : false;
function haptic(pattern = 50) {
  try {
    if (!isTouchDevice)
      return;
    if ("vibrate" in navigator) {
      navigator.vibrate(pattern);
      return;
    }
    const label = document.createElement("label");
    label.ariaHidden = "true";
    label.style.display = "none";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute("switch", "");
    label.appendChild(input);
    try {
      document.head.appendChild(label);
      label.click();
    } finally {
      document.head.removeChild(label);
    }
  } catch {}
}
