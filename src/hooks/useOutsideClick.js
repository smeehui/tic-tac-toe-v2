const { useEffect } = require("react");

const useOutsideClick = (ref,callback) => {
   useEffect(() => {
       function handleClickOutside(event) {
           if (ref.current && !ref.current.contains(event.target)) {
              callback();
           }
       }
       document.addEventListener("mousedown", handleClickOutside);
       return () => {
           // Unbind the event listener on clean up
           document.removeEventListener("mousedown", handleClickOutside);
       };
   }, [ref,callback]);
};


export {useOutsideClick}