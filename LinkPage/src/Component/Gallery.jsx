import React from 'react'
import { Link } from 'react-router-dom'

export default function Gallery() {
  return (
    <div>
                <h1>Gallery</h1>
        <Link to={"/"}>Home</Link>
        <Link to = {"/About"}>About</Link>
        <Link to = {"/Blog"}>Blog</Link>
        <Link to = {"/Gallery"}>Gallery</Link>
        <Link to = {"/Contact"}>Contact</Link>

    </div>
  )
}
