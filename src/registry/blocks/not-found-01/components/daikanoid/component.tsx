// Inspired by departuremono.com

"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "motion/react"
import { useTheme } from "next-themes"
import p5 from "p5"

import { cn } from "@/lib/utils"

import { Ball } from "./ball"
import { resetGame } from "./brick"
import { Colors, loadColors } from "./colors"
import {
  BALL_DARK_URL,
  BALL_LIGHT_URL,
  FONT_URL,
  PADDLE_DARK_URL,
  PADDLE_LIGHT_URL,
  SOUND_BOUNCE_URL,
  SOUND_BREAK_URL,
  SOUND_GAME_OVER_URL,
} from "./constants"
import { getLogoIndex } from "./logos"
import { Paddle } from "./paddle"
import type { GameState } from "./types"
import { UI } from "./ui"

export function Daikanoid({
  className,
  defaultLogo,
  ...props
}: Omit<React.ComponentPropsWithRef<"canvas">, "children"> & {
  defaultLogo?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    loadColors()

    const el = canvasRef.current!

    const state: GameState = {
      canvas: null,

      enableGame: false,
      enableSounds: !shouldReduceMotion,

      score: 0,
      bricks: [],
      logoIndex: getLogoIndex(defaultLogo),

      soundBounce: null,
      soundBreak: null,
      soundGameOver: null,

      ballImage: null,
      paddleImage: null,
    }

    let font: p5.Font
    let sketch: p5
    let paddle: Paddle
    let ball: Ball
    let ui: UI

    function game(p: p5) {
      sketch = p

      p.preload = () => {
        font = p.loadFont(FONT_URL, undefined, () => {
          // fallback to system font
        })

        try {
          state.soundBounce = p.createAudio(SOUND_BOUNCE_URL)
          state.soundBreak = p.createAudio(SOUND_BREAK_URL)
          state.soundGameOver = p.createAudio(SOUND_GAME_OVER_URL)
        } catch {
          // audio load failure fallback
        }

        state.ballImage = p.loadImage(
          resolvedTheme === "dark" ? BALL_DARK_URL : BALL_LIGHT_URL,
          undefined,
          () => {}
        )
        state.paddleImage = p.loadImage(
          resolvedTheme === "dark" ? PADDLE_DARK_URL : PADDLE_LIGHT_URL,
          undefined,
          () => {}
        )
      }

      p.setup = () => {
        state.canvas = p.createCanvas(800, 600, p.P2D, el)
        paddle = new Paddle(p, state)
        ball = new Ball(p, state)
        ui = new UI(p, state)

        p.imageMode(p.CENTER)
        if (font) {
          p.textFont(font)
        } else {
          p.textFont("monospace")
        }
        p.background(Colors.background)
        p.fill(Colors.foreground)
        p.noStroke()

        resetGame(p, state)

        state.canvas.mouseClicked(() => {
          state.enableGame = true
          ball.reset()
          return false
        })

        state.canvas.touchStarted(() => {
          state.enableGame = true
          return false
        })
      }

      p.draw = () => {
        p.background(Colors.background)

        if (state.bricks.length === 0) {
          p.fill(Colors.foreground)
          p.textAlign(p.CENTER, p.CENTER)
          p.textSize(80)
          p.text("404", p.width / 2, p.height / 2 - 11)
          return
        }

        paddle.show()
        paddle.move()

        ball.show()
        if (state.enableGame) {
          ball.move()
          ball.checkEdges()
          ball.checkPaddle(paddle)
        }

        for (const brick of state.bricks) {
          brick.show()
        }
        p.noStroke()

        ball.checkBricks(state.bricks)
        ui.show()
      }
    }

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === " ") {
        if (state.bricks.length === 0) {
          state.enableGame = false
          ball.reset()
          resetGame(sketch, state)
          return
        }

        state.enableGame = true
        ball.reset()
      }
    }
    window.addEventListener("keypress", handleKeyPress)

    const p5Instance = new p5(game)

    return () => {
      window.removeEventListener("keypress", handleKeyPress)
      p5Instance.remove()
    }
  }, [shouldReduceMotion, resolvedTheme, defaultLogo])

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-150 w-200 ring-1 ring-border", className)}
      {...props}
    />
  )
}
