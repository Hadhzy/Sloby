import Link from "next/link";
import React from "react";
import styled from "styled-components";

const tabsData = [
  {
    title: "Quick Start",
    value: "Quick Start",
    link: "/quickstart"
  },
  {
    title: "Documentation",
    value: "Documentation",
    link: "/documentation"
  },
  {
    title: "Templates",
    value: "Templates",
    link: "/templates"
  },
  {
    title: "Blog",
    value: "Blog",
    link: "/blog"
  }
];

const Tabs = () => {
  const [tabBoundingBox, setTabBoundingBox] = React.useState<any>(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = React.useState<any>(null);
  const [highlightedTab, setHighlightedTab] = React.useState<any>(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = React.useState<any>(true);

  const highlightRef = React.useRef<any>(null);
  const wrapperRef = React.useRef<any>(null);

  const repositionHighlight = (e:any, tab:any) => {
    setTabBoundingBox(e.target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const resetHighlight = () => setHighlightedTab(null);

  const highlightStyles = {
    transitionDuration: '',
    opacity: 0,
    width: '',
    transform: '',
    left: ''
}

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? "0ms" : "150ms";
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }

  return (
    <div ref={wrapperRef} onMouseLeave={resetHighlight} className="relative">
      <div ref={highlightRef} style={highlightStyles} className="nav-highlight"></div>
      {tabsData.map((tab) => (
        <Link href={tab.link} key={tab.value} onMouseOver={(ev) => repositionHighlight(ev, tab)} className="nav-button">
          {tab.title}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;