import * as React from 'react'

type RenderProps = {
  inView: boolean
  entry: IntersectionObserverEntry | undefined
  ref: React.RefObject<any> | ((node?: Element | null) => void)
}

export type IntersectionOptions = IntersectionObserverInit & {
  /** Only trigger the inView callback once */
  triggerOnce?: boolean
}

export type IntersectionObserverProps = IntersectionOptions & {
  /**
   * Children expects a function that receives an object
   * contain an `inView` boolean and `ref` that should be
   * assigned to the element root.
   */
  children: (fields: RenderProps) => React.ReactNode

  /** Call this function whenever the in view state changes */
  onChange?: (inView: boolean, entry: IntersectionObserverEntry) => void
}

/**
 * Types specific to the PlainChildren rendering of InView
 * */
export type PlainChildrenProps = IntersectionOptions & {
  children: React.ReactNode

  /**
   * Render the wrapping element as this element.
   * @default `'div'`
   */
  as?: React.ReactType<any>

  /**
   * Element tag to use for the wrapping component
   * @deprecated Replace with the 'as' prop
   */
  tag?: React.ReactType<any>

  /** Call this function whenever the in view state changes */
  onChange?: (inView: boolean, entry: IntersectionObserverEntry) => void
} & React.HTMLProps<HTMLDivElement>

export type HookResponse = [
  ((node?: Element | null) => void),
  boolean,
  IntersectionObserverEntry | undefined
]
