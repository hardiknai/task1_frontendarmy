import React from "react";
import "./index.css";

export default function SideBar() {
  return (
    <div class="sidebar-container">
      <ul class="sidebar-navigation">
        <li class="header">Navigation</li>
        <li>
          <a href="#">
            <i class="fa fa-home" aria-hidden="true"></i> Homepage
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-users" aria-hidden="true"></i> Friends
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-cog" aria-hidden="true"></i> Settings
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-info-circle" aria-hidden="true"></i> Information
          </a>
        </li>
      </ul>
    </div>
  );
}
