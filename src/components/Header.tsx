"use client"
import {useState} from "react"
import Nav from "@/components/Navigation"
import styles from "./Header.module.css"
import { GiBee } from "react-icons/gi"
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);  
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <div className={styles.brand}>
          <div className={styles.iconWrapper}>
                  <GiBee size={24} color="#5f0484" />
          </div>

          <div>
            <h1 className={styles.appName}>BusyBee</h1>
            <p className={styles.tagline}>Study Timer & Tracker</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>

            <Nav />
        </div>
        {/* Hamburger Navigation */}
        <button className={styles.hamburger} onClick={()=> setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24}/>}
        </button>
      </div>

        {/* Mobile dropdown */}
        {menuOpen && (
            <div className={styles.mobileNav}>
                <Nav />
            </div>
        )}
    </header>
  )
}