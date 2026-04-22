import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import lightIcon from "../assets/light.svg";
import darkIcon from "../assets/dark.svg";

export default function Navbar() {
  let [search, setSearch] = useState("");
  let navigate = useNavigate();

  let handleSearch = (e) => {
    navigate("/?search=" + search);
  };

  let { isDark, changeTheme } = useTheme();

  return (
    <nav
      className={`border border-b-1 ${isDark ? "bg-dbg border-primary" : "bg-white"}`}
    >
      <ul className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <li className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="search books..."
            className="outline-none px-2 py-1 rounded-lg"
          />
          <button
            onClick={handleSearch}
            className="text-white bg-primary px-3 py-1 rounded-2xl flex items-center gap-1"
          >
            <span className="hidden md:block">Search</span>
          </button>
        </li>
        <Link
          to="/"
          className="flex items-center gap-3 md:-ml-32 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
            />
          </svg>

          <span className="text-2xl font-bold text-primary hidden md:block">
            Book Store
          </span>
        </Link>
        <li className="flex gap-3 items-center">
          {/* create book */}
          <Link
            to="/create"
            className="text-white bg-primary px-3 py-2 rounded-2xl flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <span className="hidden md:block">Create book</span>
          </Link>
          {/* profile image */}
          <div className="w-11">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAaVBMVEX///8CAgIAAADv7+/8/PxiYmLd3d339/fr6+syMjL09PSsrKyhoaHn5+dRUVFaWlrX19eHh4fOzs4bGxuXl5cjIyM4ODhpaWnGxsY9PT1EREQTExO8vLxMTEx5eXmzs7NxcXGPj48rKytldYH3AAAI2ElEQVR4nL2c2ZqqMAyAseyibAKi6KC+/0OO2LQUBJqwmIvzzZyB9qcNSZqGGsYCsTwnvR2Sc/iqdh+pXvdzcriljmctaXcWy+ffY53Y14qBcCjx2+lq/9XH31K5cXDu0nRF/O0cxO4PcJpBcrLwNELzxXYKn872VHHmj43P2Jj5WbwlkZVG+RAQU2Tor3lUbqX4XpD3OpUkp+J6D8P7tTgN0r1/y4Mt9H6fFf2O3jB5mNSl4xw98yPe0XHKOgnz0zdXke1XRjIPaiefHou/Q+mNXe+Vh7+C9e7ZHcwVkaz6ojx2M0L3zDE1amKZTnbtvKaMXerVdCuN2qabh48C9GvuBDbr3BylqyDtk536sEVyJBlE10uKzmglK6hW6XceNJgx/lZtq6PllwuR9omqqnY6RyWsxsDZajvLBssJFVdrL3rC8qy47XCBjb8pg35fbJTLu9JcPbeVRBmmwwru3j0og5XMasI8ty2cR60kTTylTXuGJTWvcP/76YJ1kBqpdxLrSqZKC/lI0aqu9BhJqoJoSJ1cMj1XDh7dp6TKSQFgKZlOt3WRGrnJ1nOClRHjxFi1STDrnIS+4scqlk9iY0yvmR7CZlWTP4IYZaotY29LKqRemRcxThGiDzcLlWA4CnAa6Ap1ZwXK2rxtgbBvehu+z1g3YnqHEajAxkrEbFwwluEsmGz9tfG9G7RzrtcfAst6iLFC9CN8C2acgpHVy9sFILCgJ4THuYkrIz1TNr7+Y6dMe7sViTnReGdHjqlex5Nxpk88rg1PXFtQTV66D+GySs900KyTEZZxf4LuwqnuErxNq7Vrd0TQ5AiqCbUqhUJpfIv1dmCVPp+gbUdR4dFR3ftwxVPXloxrdFTaAAO8M3uNTaCYvEhnlU0bmXZhtu4ddiM5gYOXpjuGfLwHNhWEUKuj6HXQCYLZQMSZKSE/5esaE2/MsGGshYXSWs0zmundnNZaWcKvDQwqxAaIyYtPFCj9qsWDoRrwzNwWMqZ3DzWBCfHWNF3z4Tj0/7Dndofd9W38kaAK/bLDvQNV3yxkMLGIkPxKgqoQK/QSOu/NksdXVAgtNwyKSo296l0BXe+PagAahVld4A0CuskSuu9YI+sFtgLRAA1qh4IybHA26kSlMKmopQVp+lBa2gK0T2AZEV6jiIqOhLLsr6nii09sIoNi0JE6JZU6b99VsF4+bs122ALKgte/NaDwH8g8VknRdJRJaCSBgRG/O1ivB5fnFKgcmd48ggcUgXgGSobM+YjVBQ4K4WY+AksbYdXdkKLmhoxQcVDYRxWqHvLreZKFndBZmZICdca2ylc27BQD4ufuK/Zukk3/jkdGBWIFPmGPzmRihDB/+shTCqj2uX1uxgg5O3yQzhi+VQdAmp+PYCCwCWTLsMwIDeXjn9UEc9m8rjy6ZX/oXY7Up+iUfmUrn5aHtJ8FRMIHDa+QuNVxS4VOecMyoXEsNj6840ILXZDxUCMQ6r1jFZ7iZBV+94XiZXbYKK8Rj1uqqydsVo5mMl5bQfHHbXL3KVh3PFSx1fTxWLOJK26ksKURij/eKX5fLxC+3ESAR9g9Q+dcAAq/gxaIQO/JfyDs3GS0GJ1g00sxa49ubIWQGw2K4Ogd4f3CDT3fpwu0RZfeLzR8/hoSdj89yhoLHaM3cuTm6cXtM/MpO9ekpFlI2FjlGQ1WGZ+UI24rSUhKgaJUWIgNNAPCTtLOt4/PeSK2qBSoO0Dxe+8kKLndqkNiD1JVixkugDLiAkPFWELbqZdQc6bPADelg7oQCz/a6aMrOhoqJNbsiN3rOSahEYwDZA9iox4YzRnG8yOY1Au5HkkaT7qb4ffrNZ0R4gMu0s2AQyaXful9DX7F3kLBffTQhctNN1Qkr8dFhi70IA/koaEiq7kS5NHDYRBr2ipgNlT6kojVKH3hIKmmogV2n1FXGIqFA32JJeU5BUXyxCAyUeZd5xkqYzojNAfKq8Ri1CIv2zeDapftIsFByJltBaUkOMipoK2gRCqosU7UpNlmUKbfJs1mpBe3gVLTizMSsdtAdRKxNTllvQ3UVXV4sUwL0cScygmxC7UQ3qnU5L4bEbdBQP4mPTK7Eqm62yDUDSMu1mT1W9PeixSjQXmQVG3i1hqXszb0ZCdKQNXfWjMu5PClxCxHPzl0rE3ub0ISt2vV6m0d1R9WsVxfBHhCnBdF1fc1+gM/hnb0YmNbMQFiAx4z1ul3ae4k1gPT6EAJwECtwtjN5YXwHSQMVqZ3q0PVGpb/DTqIFNKIAOvy1GGBPeiUlcgCnIlyCzcNfOIoKaNl1+mExRkswJGlSmNa5aZ/d2RSagxrd4kOI1xCo/oF85AbGB6q9FmNfnNMwGoq++uhiYQk+FegIsrfvj3WW5GqZTwdsuL7gwNR/rb76nusULDR7ZWQAOvVT8Zk0PX3PuhwSaX52K2JBFzdb5aE1xtK3ImJVYuo6sFvoZdTVepgiVL5oWzWQJku0sXNwRJaYoE1Gnvx435Bsy6vsojqrzd5u5E4p1v6bU1Hloup+EbSvi39HpY9WFB+wcS3HutQHfhAgJaPxjjq5wTOtkyw0tR/TtBOYBXTKoTnUZ1lwfZk0CuL+6uUuNE/B4rdUJ+otB/zECsiZlJBZ7qUgUj6/oBJdIL4kmUzgzlKhllFkQpe14DCZB1MWm3wYibcrt7+8kMqViCTdfH25kAy4RMOx18YhA8T5fPo8jdUpI+jxUJ+cyZini7eXtvJH9y/30FakSIdacbRBOohDtswnecdh6NLIC5imnfchYHYkp3PtODEA2dOlgWBFC468cDdYApXOJmnvKyLtcKxPEbvAKPlTLs1DjAyukc9LSNa7agno38o1gKmFQ/FMprjw6rlSbNq1ePDmm2D/kFrZKb1D1prxAte8xOxr2Cl44a+xErtFx3rTRTNOk0LLc7hQj3msDj84PhFJwv7RwuOEuVh9gOij7hx/cAcnfmof3J0piKfQ0bbsxZVmOaQ0eTXh4xKMZvjWJ+P0M/f/uPNdfLD83P5caz/L+lxxzbKxDoAAAAASUVORK5CYII="
              alt="Profile Image"
              className="w-full rounded-full"
            />
          </div>
          <div className="cursor-pointer">
            {isDark && (
              <img
                src={lightIcon}
                alt=""
                className="w-8"
                onClick={() => changeTheme("light")}
              />
            )}
            {!isDark && (
              <img
                src={darkIcon}
                alt=""
                className="w-8"
                onClick={() => changeTheme("dark")}
              />
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}
