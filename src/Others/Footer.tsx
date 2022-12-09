export function Footer() {
  // const { footer } = useContext(ContentContext);
  // const currentUrl = useLocation();
  // const footerClassName = new PreventUrls({
  //   className: "footer-container",
  //   urlToPreventFrom: ["/editor/dashboard", "/admin"],
  //   currentUrl: currentUrl.pathname,
  // });

  return <div className="footer-container">Hello world</div>;
  // return <div className="theme-case-footer">
  //    <div className="footer-container">
  //       {footer ? (
  //         <div>
  //           {footer.map((footer_item: IFooterItem) => (
  //           <div className="footer-items content-base" key={footer_item.id}>
  //               <div className="footer-text footer-title">{footer_item.title}</div>
  //             <div>
  //               {footer_item.items.map((item, index) => {
  //               return(
  //                 <div className="footer-text footer-links"  key={index}>{item}</div>
  //               )
  //             })}
  //             </div>
  //               <div className="footer-text">{footer_item.news_letter_description}</div>
  //               {footer_item.input && footer_item.icons && <OptionalInput footer_item={footer_item}/>}

  //              <div className="footer-bellow">{footer_item.optional && footer_item.optional.map((item) => {
  //                return (
  //                    <div className="footer-bellow-content" key={item}>{item}</div>
  //                )
  //              })}
  //             </div>
  //           </div>
  //         ))}
  //         </div>
  //       ): null}
  // </div>
  // </div>

  // function OptionalInput({ footer_item }: { footer_item: IFooterItem }) {
  //   return (
  //     <div className="footer-input">
  //       <input className="footer-input-style" placeholder={footer_item.placeholder} type="text" />
  //       <button className="footer-button-style">{footer_item.button}</button>
  //       <div className="footer-bellow-content footer-icons">
  //         {footer_item.icons.map((icon) => {
  //           return (
  //             <div className="footer-icon" key={icon}>
  //               <i className={icon}></i>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
  // }
}
