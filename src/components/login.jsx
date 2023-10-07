import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  Input,
  VStack,
  Flex
} from "@chakra-ui/react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from 'yup'

const LoginSchema =Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address format')
    .required('*Email is required'),
  password: Yup.string()
    .min(4,'Password is wrong')  
    .required('*Password is required')
})

const LoginUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();


  return (  
    <Formik
      initialValues= {{email: '', password: ''}}
      validationSchema= {LoginSchema}
      onSubmit={() => {

      }}
    >
      {(formitProps) => {
        console.log(formitProps);
        return (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type= 'email'
                name= 'email'   
              />
              <ErrorMessage
                component='div'
                name='email'
                style= {{ color: 'red' }}              
              />
            </div>

            <div>
              <label htmlFor="password">password</label>
              <Field
                type= 'password'
                name= 'password'   
              />
              <ErrorMessage
                component='div'
                name='password'
                style= {{ color: 'red' }}              
              />
            </div>
            <Button type="submit" colorScheme="linkedin">Masuk</Button>


          </Form>
        )
      }}

    </Formik>  
  );
}
 
export default LoginUser;