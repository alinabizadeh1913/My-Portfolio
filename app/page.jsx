'use client';
import React, { useEffect } from "react";
import Menu from "./components/Menu";
import Header from "./components/Header";
import { loadBack, loadDescription, loadDescriptionWrapper, loadIam1, loadIam2, loadLabel, loadMenu, loadWhoAmI } from "./utils/loadSection";
const HomePage = () => {

  useEffect(() => {
    setTimeout(() => {
      loadMenu();
    },313)
    setTimeout(() => {
      loadBack();
    },800)
    setTimeout(() => {
      loadWhoAmI()
    },1200)
    setTimeout(() => {
      loadIam1()
    },1500)
    setTimeout(() => {
      loadIam2()
    },1900)
    setTimeout(() => {
      loadLabel()
    },2400)
    setTimeout(() => {
      loadDescription()
    },2700)
    setTimeout(() => {
      loadDescriptionWrapper()
    },3000)
  }, [])

  return (
    <section id="home">
      <Menu />
      <Header />
    </section>
  )
}

export default HomePage;