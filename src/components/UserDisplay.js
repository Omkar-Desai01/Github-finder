import React from "react";

export default function UserDisplay(props) {
  let styleMain = {
    display: "flex",
    flexDirection: "row",
  };
  let styleText = {
    marginLeft: "20px",
  };
  let styleImg = {
    borderRadius: "50%",
    marginLeft: "20px",
    width: "200px",
  };

  return (
    <>
      <div className="card" style={styleMain}>
        <div>
          <img
            src={props.data.avatar_url}
            alt="avatar"
            className="avatar-img card-img-right "
            style={styleImg}
          />
        </div>
        <div className="card-body" style={styleText}>
          {props.data.name && <h1 className="card-title">{props.data.name}</h1>}
          <p className="card-text">{props.data.bio}</p>
          <p>
            <img
              src="https://img.icons8.com/ios-glyphs/20/000000/marker--v1.png"
              alt="location"
            />
            {props.data.location}
          </p>
          {props.data.twitter_username && (
            <p>
              Twitter{" "}
              <a
                href={`http://twitter.com/${props.data.twitter_username}`}
                className="card-link"
              >
                {props.data.twitter_username}
              </a>
            </p>
          )}
        </div>
      </div>
      <h5>
        <img
          src="https://img.icons8.com/ios-glyphs/20/000000/link--v1.png"
          alt="Link"
        />
        <a href={props.data.html_url} target="_blank" rel="noopener noreferrer">
          {props.data.html_url}
        </a>
      </h5>
    </>
  );
}
