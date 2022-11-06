import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { FaTimes } from "react-icons/fa";

const Alert = ({ message, showMessage, setShowMessage  }) => {

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowMessage(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <FaTimes fontSize="small" />
      </IconButton>
    </>
  );
console.log(message)
  return (
    <div>
      <Snackbar
        open={true}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </div>
  );
};

export default Alert;


// export default function SimpleSnackbar() {
//   const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpen(false);
//   };

//   const action = (
//     <>
//       <Button color="secondary" size="small" onClick={handleClose}>
//         UNDO
//       </Button>
//       <IconButton
//         size="small"
//         aria-label="close"
//         color="inherit"
//         onClick={handleClose}
//       >
//         <CloseIcon fontSize="small" />
//       </IconButton>
//     </>
//   );

//   return (
//     <div>
//       <Button onClick={handleClick}>Open simple snackbar</Button>
//       <Snackbar
//         open={open}
//         autoHideDuration={6000}
//         onClose={handleClose}
//         message="Note archived"
//         action={action}
//       />
//     </div>
//   );
// }
