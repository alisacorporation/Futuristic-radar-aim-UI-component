import React from 'react';
import { Target, Zap, Shield, Crosshair, Radar, Activity, Radio, Satellite } from 'lucide-react';
import './RadarNav.css';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const leftMenuItems: MenuItem[] = [
  { id: 'target', label: 'Target Lock', icon: <Target size={20} />, href: '#target' },
  { id: 'shield', label: 'Defense Grid', icon: <Shield size={20} />, href: '#shield' },
  { id: 'activity', label: 'Scan Area', icon: <Activity size={20} />, href: '#activity' },
  { id: 'radio', label: 'Broadcast', icon: <Radio size={20} />, href: '#radio' },
];

const rightMenuItems: MenuItem[] = [
  { id: 'crosshair', label: 'Precision Aim', icon: <Crosshair size={20} />, href: '#crosshair' },
  { id: 'radar', label: 'Radar Sweep', icon: <Radar size={20} />, href: '#radar' },
  { id: 'zap', label: 'Power Core', icon: <Zap size={20} />, href: '#zap' },
  { id: 'satellite', label: 'Uplink', icon: <Satellite size={20} />, href: '#satellite' },
];

export default function RadarNav() {
  return (
    <div className="radar-container">
      <nav className="radar-nav" aria-label="Radar navigation">
        {/* Left menu stack */}
        <ul className="menu-stack menu-stack--left">
          {leftMenuItems.map((item, index) => (
            <li key={item.id} className="menu-item-wrapper">
              <a
                href={item.href}
                className="menu-block"
                aria-label={item.label}
                style={{
                  '--item-index': index,
                  '--total-items': leftMenuItems.length,
                } as React.CSSProperties}
              >
                <span className="menu-block__icon">{item.icon}</span>
                <span className="menu-block__label">{item.label}</span>
                <span className="menu-block__connector" aria-hidden="true"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Radar */}
        <div className="radar" role="img" aria-label="Radar display">
          {/* Grid rings */}
          <div className="radar__ring radar__ring--1"></div>
          <div className="radar__ring radar__ring--2"></div>
          <div className="radar__ring radar__ring--3"></div>
          
          {/* Grid lines */}
          <div className="radar__gridlines">
            <div className="radar__gridline radar__gridline--v1"></div>
            <div className="radar__gridline radar__gridline--v2"></div>
            <div className="radar__gridline radar__gridline--h1"></div>
            <div className="radar__gridline radar__gridline--h2"></div>
          </div>

          {/* Sweep beam */}
          <div className="radar__sweep" aria-hidden="true">
            <div className="radar__sweep-beam"></div>
          </div>

          {/* Center dot */}
          <div className="radar__center">
            <div className="radar__dot"></div>
            <div className="radar__crosshair radar__crosshair--h"></div>
            <div className="radar__crosshair radar__crosshair--v"></div>
          </div>

          {/* Scan lines overlay */}
          <div className="radar__scanlines" aria-hidden="true"></div>
        </div>

        {/* Right menu stack */}
        <ul className="menu-stack menu-stack--right">
          {rightMenuItems.map((item, index) => (
            <li key={item.id} className="menu-item-wrapper">
              <a
                href={item.href}
                className="menu-block"
                aria-label={item.label}
                style={{
                  '--item-index': index,
                  '--total-items': rightMenuItems.length,
                } as React.CSSProperties}
              >
                <span className="menu-block__icon">{item.icon}</span>
                <span className="menu-block__label">{item.label}</span>
                <span className="menu-block__connector" aria-hidden="true"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
