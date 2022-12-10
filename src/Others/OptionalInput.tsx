import { IFooterItem } from "./types";

export function OptionalInput({ footer_item }: { footer_item: IFooterItem }) {
  return (
    <div className="footer-input">
      <input className="footer-input-style" placeholder={footer_item.placeholder} type="text" />
      <button className="footer-button-style">{footer_item.button}</button>
      <div className="footer-bellow-content footer-icons">
        {footer_item.icons.map((icon) => {
          return (
            <div className="footer-icon" key={icon}>
              <i className={icon}></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}
