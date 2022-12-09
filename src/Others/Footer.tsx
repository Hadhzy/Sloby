import { useContext } from "react";
import { ContentContext } from "./Context/ContentContext";
import { OptionalInput } from "./OptionalInput";
import { IFooterItem } from "./types";

// TODO: Edit this.
export function Footer() {
  const { footer } = useContext(ContentContext);
  // const currentUrl = useLocation();

  // const footerClassName = new PreventUrls({
  //   className: "footer-container",
  //   urlToPreventFrom: ["/editor/dashboard", "/admin"],
  //   currentUrl: currentUrl.pathname,
  // });

  if (footer) {
    const footerItems = footer.map((footer_item: IFooterItem) => {
      const footerLinks = footer_item.items.map((item, index) => {
        return (
          <div className="footer-text footer-links" key={index}>
            {item}
          </div>
        );
      });

      const optionalLinks = footer_item.optional.map((item) => {
        return (
          <div className="footer-bellow-content" key={item}>
            {item}
          </div>
        );
      });

      if (footer_item.input && footer_item.icons) {
        return (
          <div className="footer-items content-base" key={footer_item.id}>
            <div className="footer-text footer-title">{footer_item.title}</div>
            <div>{footerLinks}</div>
            <div className="footer-text">{footer_item.news_letter_description}</div>
            <OptionalInput footer_item={footer_item} />
            <div className="footer-bellow">{footer_item.optional && optionalLinks}</div>
          </div>
        );
      } else {
        return (
          <div className="footer-items content-base" key={footer_item.id}>
            <div className="footer-text footer-title">{footer_item.title}</div>
            <div>{footerLinks}</div>
            <div className="footer-text">{footer_item.news_letter_description}</div>
            <div className="footer-bellow">{footer_item.optional && optionalLinks}</div>
          </div>
        );
      }
    });

    return (
      <div className="theme-case-footer">
        <div className="footer-container">
          <div>{footerItems}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
