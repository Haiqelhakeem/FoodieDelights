import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-white border-gray-200 dark:bg-gray-900">
      <aside>
        <img
          src="/images/logo-black.png"
          alt=""
          style={{ width: "100px" }}
          className="rounded-xl"
        />
        <p className="font-bold">
          Foodie Delights <br />
          Food Recommendation Website
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com">
            <Icon icon="mdi:github" width={48} height={48} />
          </a>
          <a href="https://www.instagram.com">
            <Icon icon="fa6-brands:square-instagram" width={48} height={48} />
          </a>
          <a href="https://whatsapp.com">
            <Icon icon="ic:round-whatsapp" width={48} height={48}/>
          </a>
          <a href="https://www.linkedin.com">
            <Icon icon="bi:linkedin" width={48} height={43}/>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
