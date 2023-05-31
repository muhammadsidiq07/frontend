import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik, FormikProvider } from "formik";
import { FindUserPasswordRequest, EditUserPasswordRequest } 
from "../../../../redux/action/users/user-passwordAction";

export default function Edit(props: any) {
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState<number>();
    const dispatch = useDispatch();
    const { UserPassword } = useSelector((state: any) => state. userPasswordState);

useEffect(() => {
    dispatch(FindUserPasswordRequest(props.id));
}, [dispatch, props.id, showModal]);

// console.log(props.id);

const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
        uspaUserId: props.id,
        uspaPasswordhash: '',
        uspaPasswordsalt: '',
    },
    onSubmit: async (values) => {
      const payload = {
        uspaUserId: values.uspaUserId,
        uspaPasswordhash: values.uspaPasswordhash,
        uspaPasswordsalt: values.uspaPasswordsalt,
      }
        dispatch(EditUserPasswordRequest(payload));
        props.setRefresh(true);
        setShowModal(false);
    },
});

const editButton = () => {
    setId(props.id);
    setShowModal(true);
};

const modal = () => {
    props.setRefresh(true);
    setShowModal(false);
  };


return (
    <>
      <button
        className="p-2 bg-emerald-700 text-white active:bg-emerald-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={editButton}
      >
        <span>Edit</span>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Change Password</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <FormikProvider value={formik}>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="py-4 px-8 ">
                        <div className="flex gap-10 ">
                          <label className="py-2 text-black font-bold w-full">
                            Current Password
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="password"
                            name="uspaPasswordhash"
                            id="uspaPasswordhash"
                            onChange={formik.handleChange}
                            value={formik.values.uspaPasswordhash}
                            placeholder="••••••••"
                          />
                        </div>
                      </div>
                      <div className="py-4 px-8 ">
                        <div className="flex gap-10 ">
                          <label className="py-2 text-black font-bold w-full">
                            New Password
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="password"
                            name="uspaPasswordhash"
                            id="uspaPasswordhash"
                            onChange={formik.handleChange}
                            value={formik.values.uspaPasswordhash}
                            placeholder="••••••••"
                          />
                        </div>
                      </div>
                      <div className="py-4 px-8 ">
                        <div className="flex gap-10 ">
                          <label className="py-2 text-black font-bold w-full">
                            Re-type Password
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="password"
                            name="uspaPasswordsalt"
                            id="uspaPasswordsalt"
                            onChange={formik.handleChange}
                            value={formik.values.uspaPasswordsalt}
                            placeholder="••••••••"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={modal}
                        >
                          Close
                        </button>
                        <button
                          className="bg-sky-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </FormikProvider>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
