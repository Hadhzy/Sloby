class PreventUrls {
/**
     **This class is used to hide different components based on the url. 
    * 
    * @param {string} className - The className of the component that we currently pass through. 
    * @param {Array} urlToPreventFrom - This is an array of the urls that we want to hide our components.
    * @param {object} currentUrl - This is an object that is the currentUrl object 
    * @param {string} currentUrl.pathname - This is a string of the actual current URL  
 */


    constructor({ className, urlToPreventFrom, currentUrl }: {className: string, urlToPreventFrom: Array<string>, currentUrl: string}) {} 

    preventURL() {
        if(this.urlToPreventFrom.includes(this.currentUrl)) {
            return "display-none" 
        } else return this.className
        /**
         * This method is going to check that whether or not the currentUrl is in the preventedUrl list. 
         * @returns {string} - It is gonna return a string based on the conditions
         */
    }
}


export default PreventUrls