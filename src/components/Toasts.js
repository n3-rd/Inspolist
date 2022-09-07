import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const ErrorToast = (message) => {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#ff0000",
        },
      }).showToast();

    }

    const SuccessToast = (message) => {
        Toastify({
            text: message,
            duration: 3000,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#26b526",
            },
          }).showToast();
        }

export { ErrorToast, SuccessToast }