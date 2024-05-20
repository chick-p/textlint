import React from "react";

const Block = function ({ title, content }) {
    return (
        <div className="blockContent">
            <h2>
                <div>
                    <span>
                        <p>{title}</p>
                    </span>
                </div>
            </h2>
            <div>
                <span>
                    <p>{content}</p>
                </span>
            </div>
        </div>
    );
};

export default ({ contents, layout }) => {
    return (
        <div className="gridBlock">
            <div className="blockElement threeByGridBlock">
                {contents.map((content, index) => {
                    return <Block content={content.content} title={content.title}></Block>;
                })}
            </div>
        </div>
    );
};
