import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaSkype,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/somoye-ayotunde/",
  },
  {
    id: 2,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://web.facebook.com/somoye.ayo/",
  },
  {
    id: 3,
    icon: <FaSkype className="social-icon"></FaSkype>,
    url: "https://join.skype.com/invite/lNXHbbqTbTFg",
  },
  {
    id: 4,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/somoye123",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/ayotunde_197",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
