"use client"

import { useCallback, useEffect, useState, useSyncExternalStore } from "react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"
import { AppleHelloEffectEnglish } from "@/registry/components/apple-hello-effect/apple-hello-effect-english"
import { AppleHelloEffectHindi } from "@/registry/components/apple-hello-effect/apple-hello-effect-hindi"
import { AppleHelloEffectSpanish } from "@/registry/components/apple-hello-effect/apple-hello-effect-spanish"
import { AppleHelloEffectVietnamese } from "@/registry/components/apple-hello-effect/apple-hello-effect-vietnamese"

const STORAGE_KEY = "has_seen_welcome_intro"

let isVisibleState: boolean | null = null
const listeners = new Set<() => void>()

function notify() {
  for (const listener of listeners) {
    listener()
  }
}

function getInitialVisibility(): boolean {
  if (typeof window === "undefined") return false
  try {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get("intro") === "true") return true
    return sessionStorage.getItem(STORAGE_KEY) !== "true"
  } catch {
    return true
  }
}

function getSnapshot(): boolean {
  if (isVisibleState === null) {
    isVisibleState = getInitialVisibility()
  }
  return isVisibleState
}

function getServerSnapshot(): boolean {
  return false
}

function subscribe(callback: () => void) {
  listeners.add(callback)
  return () => {
    listeners.delete(callback)
  }
}

function setIntroVisible(visible: boolean) {
  isVisibleState = visible
  notify()
}

export function WelcomeIntro() {
  const isVisible = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )
  const [index, setIndex] = useState(0)

  const dismiss = useCallback(() => {
    setIntroVisible(false)
    try {
      sessionStorage.setItem(STORAGE_KEY, "true")
    } catch {
      // Storage might be disabled in private mode
    }
  }, [])

  useEffect(() => {
    const handleReplay = () => {
      setIndex(0)
      setIntroVisible(true)
    }

    window.addEventListener("replay-welcome-intro", handleReplay)
    return () => {
      window.removeEventListener("replay-welcome-intro", handleReplay)
    }
  }, [])

  // Lock body scroll while intro is visible
  useEffect(() => {
    if (isVisible) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isVisible])

  // Allow pressing Escape key to skip
  useEffect(() => {
    if (!isVisible) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismiss()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isVisible, dismiss])

  const handleNext = () => {
    setIndex((prevIndex) => {
      if (prevIndex >= 3) {
        // After Vietnamese completes, finish intro
        setTimeout(dismiss, 500)
        return prevIndex
      }
      return prevIndex + 1
    })
  }

  const demos = [
    <AppleHelloEffectEnglish
      key="english"
      durationScale={0.7}
      className="h-20 text-foreground sm:h-28 md:h-32"
      onAnimationComplete={handleNext}
    />,
    <AppleHelloEffectHindi
      key="hindi"
      durationScale={0.7}
      className="h-20 text-foreground sm:h-28 md:h-32"
      onAnimationComplete={handleNext}
    />,
    <AppleHelloEffectSpanish
      key="spanish"
      durationScale={0.7}
      className="h-20 text-foreground sm:h-28 md:h-32"
      onAnimationComplete={handleNext}
    />,
    <AppleHelloEffectVietnamese
      key="vietnamese"
      durationScale={0.65}
      className="h-20 text-foreground sm:h-28 md:h-32"
      onAnimationComplete={handleNext}
    />,
  ]

  const languageLabels = ["English", "हिन्दी", "Español", "Tiếng Việt"]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="welcome-intro-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)",
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-background/95 backdrop-blur-2xl select-none"
          role="dialog"
          aria-modal="true"
          aria-label="Welcome greeting"
        >
          {/* Subtle background glow */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,var(--foreground)_0%,transparent_70%)] opacity-[0.04]"
            aria-hidden
          />

          {/* Minor Skip Button */}
          <button
            type="button"
            onClick={dismiss}
            aria-label="Skip welcome animation"
            className="group absolute top-5 right-5 flex cursor-pointer items-center gap-1.5 rounded-full border border-line bg-background/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-xs backdrop-blur-md transition-all hover:border-foreground/30 hover:bg-background hover:text-foreground active:scale-95 sm:top-7 sm:right-7"
          >
            <span>Skip</span>
            <kbd className="hidden h-4 items-center rounded border border-border/80 bg-muted/60 px-1 font-mono text-[10px] text-muted-foreground/80 group-hover:text-foreground sm:inline-flex">
              Esc
            </kbd>
          </button>

          {/* Centered handwriting animation */}
          <div className="relative flex flex-col items-center justify-center px-6">
            <AnimatePresence mode="wait">{demos[index]}</AnimatePresence>

            {/* Language indicator pill */}
            <motion.span
              key={`label-${index}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="mt-6 font-mono text-xs tracking-wider text-muted-foreground uppercase select-none"
            >
              {languageLabels[index]}
            </motion.span>
          </div>

          {/* Bottom progress dots */}
          <div className="absolute bottom-8 flex items-center gap-1.5">
            {demos.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-1 rounded-full transition-all duration-300",
                  i === index
                    ? "w-6 bg-foreground"
                    : "w-1.5 bg-muted-foreground/30"
                )}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
