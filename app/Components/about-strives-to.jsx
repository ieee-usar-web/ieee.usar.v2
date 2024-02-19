'use client'
import React from "react";
import "./about-strives-to.css";

function AboutStrivesTo() {
  const contentAndComments = [
    {
      title: "Guiding Hands",
      comment:
        "Offering support and resources to help you conquer your professional journey.",
      src: "https://imgs.search.brave.com/0cRysDhZuc3ku3_4azbSqdBATXAtgH1lc6ShN6cHypE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NzQ3NDA2MDEwMTIt/ZjZmMjUwMjliMzQ3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRCOGZH/aGhibVFsTWpCcGJp/VXlNR2hoYm1SOFpX/NThNSHg4TUh4OGZE/QT0.jpeg",
    },
    {
      title: "Spotlight Moments",
      comment:
        "Celebrating your achievements and contributions within the community.",
      src: "https://imgs.search.brave.com/mLyB4z50EKSY4YV6YtLaVy4Cqtz7iIkTgvcuUOVqncA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NzU4MjY5/MjczNTItZTk5ZWZi/YWIzNmQ4P3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/TVROOGZITjBZWEp6/SlRJd2FXNGxNakIw/YUdVbE1qQnphM2w4/Wlc1OE1IeDhNSHg4/ZkRBPQ.jpeg",
    },
    {
      title: "Skill Sharpening",
      comment:
        "Hosting workshops and events to boost your professional development.",
      src: "https://imgs.search.brave.com/iNe89dDqvCO3RbOQGuyZnUhX73VnCCXPdtMvS2C11ng/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzcwLzAwLzQ4/LzM2MF9GXzI3MDAw/NDgxOF9MaTdOa3Ja/eHhjSzY4NXFkdFQ4/NjJpQnY0dXB6SzBU/Vy5qcGc",
    },
    {
      title: "Leading Voices",
      comment:
        "Amplifying your leadership potential and advocating for your ideas.",
      src: "https://imgs.search.brave.com/FD45Sz1qoU87GC9HDJoUq7s6Gw7t_8Qn4sYiXIG0q9s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Njc1OTYzODg3NTYt/ZjZkNzEwYzhmYzA3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRKOGZH/MXBZM0p2Y0dodmJt/VjhaVzU4TUh4OE1I/eDhmREE9.jpeg",
    },
    {
      title: "Lifelong Learning",
      comment:
        "Fostering continuous growth through diverse professional development opportunities.",
      src: "https://imgs.search.brave.com/Yc7xjuSp2Tb_Wpd7DlqiBGeyY9RqjL0P8K6eguLLc2Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/MDg2NDk0Ni9waG90/by9lLWxlYXJuaW5n/LWVkdWNhdGlvbi1j/b25jZXB0LWxlYXJu/aW5nLW9ubGluZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/eTFmUS0zd2JzdmRE/YU1uLWN1SFBpYmNn/b3pPeEtRUzk5bUln/ejZERmNWQT0",
    },
    {
      title: "Global Connections",
      comment:
        "Building a worldwide network of professionals for collaboration and knowledge sharing.",
      src: "https://imgs.search.brave.com/7kxDiAj8_LUN10Gm0cKE8EJ83HPaKtyOXmqULZfB66I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vMTMzNDk0/OTQvMjUzMTIvaS80/NTAvZGVwb3NpdHBo/b3Rvc18yNTMxMjA0/Mzgtc3RvY2stcGhv/dG8tb2xkLWdsb2Jl/LWRhcmstdGV4dHVy/ZWQtc3VyZmFjZS5q/cGc",
    },
  ];

  return (
    <div
      id="strivesMainDiv"
      data-scroll-container
      data-scroll
      data-scroll-speed="0.7"
    >
      <span id="strivesHeading">IEEE Strives To:</span>
      <div className="wrapper">
        {contentAndComments.map((item, index) => (
          <div key={index} className="card">
            <div className="info">
              <h1>{item.comment}</h1>
            </div>
            <br />
            <p>{item.title}</p>
            <img src={item.src} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutStrivesTo;
