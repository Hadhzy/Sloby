import Link from 'next/link';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
const tabsData = [
  {
    title: 'Quick Start',
    value: 'Quick Start',
    link: '/quickstart',
  },
  {
    title: 'Documentation',
    value: 'Documentation',
    link: '/documentation',
  },
  {
    title: 'Templates',
    value: 'Templates',
    link: '/templates',
  },
  {
    title: 'Blog',
    value: 'Blog',
    link: '/blog',
  },
];

const Tabs = () => {
  const [tabBoundingBox, setTabBoundingBox] = React.useState<{
    width: string;
    left: number;
  }>({ width: '', left: 0 });
  const [wrapperBoundingBox, setWrapperBoundingBox] = React.useState<{
    left: number;
  }>({ left: 0 });
  const [highlightedTab, setHighlightedTab] = React.useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = React.useState(true);

  const highlightRef = React.useRef(null);
  const wrapperRef = React.useRef<any>(null);

  const repositionHighlight = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    tab: any
  ) => {
    const { width, left } = (
      e.currentTarget! as HTMLElement
    ).getBoundingClientRect();
    setTabBoundingBox({ width: `${width}px`, left });
    if (wrapperRef !== null) {
      setWrapperBoundingBox(wrapperRef!.current!.getBoundingClientRect());
    }
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const resetHighlight = () => setHighlightedTab(null);

  const highlightStyles = {
    transitionDuration: '',
    opacity: 0,
    width: '',
    transform: '',
    left: '',
  };

  if (typeof window !== 'undefined') {
    if (tabBoundingBox && wrapperBoundingBox) {
      highlightStyles.transitionDuration = isHoveredFromNull ? '0ms' : '150ms';
      highlightStyles.opacity = highlightedTab ? 1 : 0;
      highlightStyles.width = `${tabBoundingBox.width}px`;
      highlightStyles.transform = `translate(${
        tabBoundingBox.left - wrapperBoundingBox.left
      }px)`;
    }
  }
  return (
    <TabsNav ref={wrapperRef} onMouseLeave={resetHighlight}>
      <TabsHighlight ref={highlightRef} style={highlightStyles} />
      {tabsData.map((tab) => (
        <Link href={tab.link}>
          <Tab
            key={tab.value}
            onMouseOver={(
              ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>
            ) => repositionHighlight(ev, tab)}
            className="nav-button"
          >
            {tab.title}
          </Tab>
        </Link>
      ))}
    </TabsNav>
  );
};

const TabsNav = styled.div`
  position: relative;
`;

const Tab = styled.a`
  padding: 16px 12px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: color 250ms;
`;

const TabsHighlight = styled.div`
  background: rgba(50, 50, 50, 0.5);
  position: absolute;
  top: 10px;
  left: 0;
  border-radius: 4px;
  height: 32px;
  transition: 0.15s ease;
  transition-property: width, transform, opacity;
`;

export default Tabs;
