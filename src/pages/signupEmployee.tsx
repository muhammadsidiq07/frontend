import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UserSignupRequest } from '../redux/action/users/userAction'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import * as Yup from 'yup';
//import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const dispatch = useDispatch();
    const router =useRouter();
    // const validationSchema = Yup.object().shape({
    //     userFullName: Yup.string().
    //     max(15).required("Username is required"),
    //     userEmail: Yup.string()
    //     .email("Must be a valid email")
    //     .max(50)
    //     .required("Email is required"),
    //       uspaPasswordhash: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
    //       uspaPasswordsalt: Yup.string().
    //       oneOf([Yup.ref('uspaPasswordsalt')], "Password not matched").required("Required"),
    //       userPhoneNumber: Yup.string().max(14).required("Phone Number is required"),
    //     });
        
    const formik = useFormik({
        initialValues: {
            userFullName: '',
            userEmail: '',
            uspaPasswordhash: '',
            uspaPasswordsalt: '',
            userPhoneNumber: ''
        },
        // validationSchema: validationSchema,
        onSubmit: async (values) => {
            let payload = {
              userFullName: values.userFullName,
              userEmail: values.userEmail,
              uspaPasswordhash: values.uspaPasswordhash,
              uspaPasswordsalt: values.uspaPasswordsalt,
              userPhoneNumber: values.userPhoneNumber,
            };
            dispatch(UserSignupRequest(payload));
            router.push("/signin");
          },
        });

return (  
<div>
<section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            Hotel Realta  
        </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-3 space-y-2 md:space-y-2 sm:p-3">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Employee Signup
            </h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={formik.handleSubmit}>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input id="userFullName" 
                    name="userFullName"
                    type="text" 
                    value={formik.values.userFullName} 
                    onChange={formik.handleChange} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name"/>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input id="userEmail" 
                    name="userEmail" 
                    type="userEmail"
                    value={formik.values.userEmail} 
                    onChange={formik.handleChange} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input id="uspaPasswordhash" 
                    name="uspaPasswordhash" 
                    type="password"
                    value={formik.values.uspaPasswordhash} 
                    onChange={formik.handleChange} 
                    placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                    <input id="uspaPasswordsalt" 
                    name="uspaPasswordsalt"
                    type="password"
                    value={formik.values.uspaPasswordsalt} 
                    onChange={formik.handleChange} 
                    placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                    <input id="userPhoneNumber" 
                    name="userPhoneNumber" 
                    type="text"
                    value={formik.values.userPhoneNumber}
                    onChange={formik.handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678"/>
                </div>
                <div className="mt-6 space-y-2">
                    <div className="flex gap-x-2">
                    <button type="submit" className="w-full px-8 py-3 text-blue-100 bg-blue-600 rounded-md">Signup</button>
                    <button formAction="/signin" className="w-full px-8 py-3 text-blue-600 border border-blue-600 rounded-md">Cancel</button>
                </div>
                </div>
            </form>
        </div>
    </div>
</div>
</section>
</div>
    )
}