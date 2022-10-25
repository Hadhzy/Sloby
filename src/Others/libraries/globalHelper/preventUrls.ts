import { IPreventUrl } from '../../types';
import React from 'react';

class PreventUrls  {
    urlToPreventFrom: string[];
    className: string;
    currentUrl: string    
// /**
//      **This class is used for hide different components based on the current url of the browser. 
//     * 
//     * @param {string} className - The className of the component that we currently pass through. 
//     * @param {Array} urlToPreventFrom - This is an array of the urls that we want to hide our components.
//     * @param {object} currentUrl - This is an object that is the currentUrl object 
//     * @param {string} currentUrl.pathname - This is a string of the actual current URL  
//  */

 
    constructor(options: IPreventUrl) { 
        this.className = options.className
        this.currentUrl = options.currentUrl
        this.urlToPreventFrom = options.urlToPreventFrom
    }

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