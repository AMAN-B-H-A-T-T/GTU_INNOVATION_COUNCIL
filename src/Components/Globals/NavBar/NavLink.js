"use client";
import Link from "next/link";
function NavLink({ classList, title, href, dropdown,isChildDropdown }) {  
  if (href) {
    return (
      <Link className={classList} href={href}>
        {title}
      </Link>
    );
  } else {
    return (
      <button
        className={classList}
        onClick={() => {
          document.querySelectorAll(".navdropdowns").forEach((item) => {
            if(!isChildDropdown){ 
              item.id !== dropdown ? item.classList.add("hidden") : null;
            }
          });
          document.getElementById(dropdown).classList.toggle("hidden");
        }}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-caret-right inline ml-2"
          viewBox="0 0 16 16"
        >
          <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
        </svg>
      </button>
    );
  }
}

export default NavLink;
