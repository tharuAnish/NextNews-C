import React from "react"

export default function NewsDetailLayout({ children, modal }) {
  return (
    <div>
      {modal}
      {children}
    </div>
  )
}
