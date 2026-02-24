// import "bootstrap/dist/css/bootstrap.min.css";
// import { useContext, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import useLoginForm from "./hooks/useLoginForm";
// import { AuthContext } from "../../context/AuthContext";

// const AuthModal = () => {
//   const { isAuth, logoutAuth } = useContext(AuthContext);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const { form, mutation } = useLoginForm(handleClose);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = form;

//   const onSubmit = (data) => {
//     mutation.mutate(data);
//   };

//   return (
//     <div className="login-page">
//       {isAuth ? (
//         <Button variant="danger" onClick={logoutAuth}>
//           Logout
//         </Button>
//       ) : (
//         <Button variant="success" onClick={handleShow}>
//           Login
//         </Button>
//       )}

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit(onSubmit)}>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Email"
//                 autoFocus
//                 {...register("email")}
//               />
//               {errors.email && (
//                 <p className="text-danger">{errors.email.message}</p>
//               )}
//             </Form.Group>

//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 {...register("password")}
//               />
//               {errors.password && (
//                 <p className="text-danger">{errors.password.message}</p>
//               )}
//             </Form.Group>
//             <Button
//               type="submit"
//               className="btn btn-success text-center"
//               variant="primary"
//             >
//               Login
//             </Button>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer></Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default AuthModal;

// import "bootstrap/dist/css/bootstrap.min.css";
// import { useContext, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import useLoginForm from "./hooks/useLoginForm";
// import { AuthContext } from "../../context/AuthContext";

// const AuthModal = () => {
//   const { isAuth, logoutAuth } = useContext(AuthContext);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const { form, mutation } = useLoginForm(handleClose);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = form;

//   const onSubmit = (data) => {
//     mutation.mutate(data);
//   };

//   return (
//     <div className="login-page">
//       {isAuth ? (
//         <Button variant="danger" onClick={logoutAuth}>
//           Logout
//         </Button>
//       ) : (
//         <Button variant="success" onClick={handleShow}>
//           Login
//         </Button>
//       )}

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit(onSubmit)}>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Email"
//                 autoFocus
//                 {...register("email")}
//               />
//               {errors.email && (
//                 <p className="text-danger">{errors.email.message}</p>
//               )}
//             </Form.Group>

//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 {...register("password")}
//               />
//               {errors.password && (
//                 <p className="text-danger">{errors.password.message}</p>
//               )}
//             </Form.Group>
//             <Button
//               type="submit"
//               className="btn btn-success text-center"
//               variant="primary"
//             >
//               Login
//             </Button>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer></Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default AuthModal;

import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AuthContext } from "../../context/AuthContext";
import "./auth-modal.scss";

import LoginForm from "./pages/login/LoginForm";
import Register from "./pages/register/Register";
import useLoginForm from "./hooks/useLoginForm";

const AuthModal = () => {
  const { isAuth, logoutAuth, handleClose, handleShow, show, mode, setMode } =
    useContext(AuthContext);
  const { logoutMutation } = useLoginForm();

  return (
    <div className="login-page">
      {isAuth ? (
        <Button variant="danger" onClick={() => logoutMutation.mutate()}>
          Logout
        </Button>
      ) : (
        <Button variant="success" onClick={() => handleShow("login")}>
          Login
        </Button>
      )}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <div className="auth-switch text-center mb-3 d-flex justify-content-center gap-1">
            <h5
              onClick={() => setMode("login")}
              className={`auth-tab ${mode === "login" ? "active" : ""}`}
              style={{ cursor: "pointer" }}
            >
              Login
            </h5>
            <span> | </span>
            <h5
              onClick={() => setMode("register")}
              className={`auth-tab ${mode === "register" ? "active" : ""}`}
              style={{ cursor: "pointer" }}
            >
              Register
            </h5>
          </div>

          <p className="text-center">
            {mode === "login"
              ? "Enter your username and password to login."
              : "Enter your email and password to register."}
          </p>

          {/* 🔹 FORM */}
          {mode === "login" ? (
            <LoginForm onSuccess={handleClose} />
          ) : (
            <Register onSuccess={() => setMode("login")} />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AuthModal;
