import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CardUser({ cardUsers, deleteCardUser }) {
  const { id } = useParams();
  const [ing, setIng] = useState({});

  useEffect(() => {
    if (!cardUsers) return;
    setIng(
      cardUsers.find((user) => {
        return user.id == id;
      })
    );
  }, [id]);

  return (
    <div>
      {ing && (
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img src={ing.img} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{ing.fulName}</div>
            <p className="text-gray-700 text-base">{ing.job}</p>
            <p>
              Though much of the hiring process happens through formal channels,
              such as company websites, emails and phone calls, sometimes it's
              appropriate to send text messages. Texting professional contacts
              like recruiters about a job can be one way to express interest and
              explore potential opportunities. Learning about sending
              professional texts can help you if you think this can benefit your
              job search. In this article, we discuss why you might use text
              messaging, how to text someone about a job and share a template,
              examples and tips you can use when sending one.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
