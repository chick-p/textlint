import Layout from "@theme/Layout";
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const ProjectTitle = (props) => (
    <h2 className="ProjectTitle">
        {props.title}
        <small className={"ProjectTitle-copy"}>{props.tagline}</small>
    </h2>
);

const PromoSection = (props) => (
    <div className="section promoSection">
        <div className="promoRow">
            <div className="pluginRowBlock">{props.children}</div>
        </div>
    </div>
);

const SplashContainer = (props) => (
    <div className="homeContainer">
        <div className="homeSplashFade">
            <div className="wrapper homeWrapper">{props.children}</div>
        </div>
    </div>
);

const HomeSplash = (props) => {
    const { siteConfig } = useDocusaurusContext();
    const language = props.language || "";
    return (
        <SplashContainer>
            <div className="inner">
                <ProjectTitle title={siteConfig.title} tagline={siteConfig.tagline} />
                <PromoSection>
                    <a className={"GettingStartedButton"} href={`${language}/docs/getting-started.html`}>
                        Getting Started
                    </a>
                </PromoSection>
            </div>
        </SplashContainer>
    );
};

function getCurrentLanguage() {
    const { siteConfig } = useDocusaurusContext();
    const baseUrl = siteConfig.baseUrl;
    if (baseUrl.includes("/ja/")) return "ja";
    return "en";
}

export default () => {
    const { siteConfig } = useDocusaurusContext();
    const currentLanguage = getCurrentLanguage();

    return (
        <Layout>
            <div className={"main"}>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `document.body.classList.add("is-index");`
                    }}
                />
                <HomeSplash language={currentLanguage} />
            </div>
        </Layout>
    );
};
