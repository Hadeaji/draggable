"use client"

import { MultipleContainers } from "./containers/MultipleContainers";
import GridLayoutComponent from "./dragable";
import { rectSortingStrategy } from "@dnd-kit/sortable";

export default function Home() {
  return (
    <>
      {/* <GridLayoutComponent /> */}
      <div className="App">
      <MultipleContainers itemCount={5} strategy={rectSortingStrategy} />
    </div>
    </>
  );
}
