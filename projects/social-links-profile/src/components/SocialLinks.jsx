import React from "react";

const socialMedia = [
  {
    name: "Github",
    link: "https://github.com/jonathanmtzgzz",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/jonathanaldairmartinezgonzalez/",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jonathanmtzgzz/",
  },
  {
    name: "Twitter",
    link: "https://x.com/jonathanmtzgzz",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/jonathanmtzgzz/",
  },
];

export const SocialLinks = () => {
  return (
    <div>
      <CardSocialLink />
    </div>
  );
};

const CardSocialLink = () => {
  return (
    <div className="flex flex-col justify-center space-y-4">
      {socialMedia.map((social, index) => (
        <a
          key={index}
          className="flex items-center justify-center text-white text-base h-12 bg-[#333333] rounded-xl hover:bg-[#C4F82A] hover:text-black"
          href={social.link}
          target="_blank"
          rel="noreferrer"
        >
          {social.name}
        </a>
      ))}
    </div>
  );
};
